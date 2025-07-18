from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import FavoriteLocationsSerializer, BootLocationSerializer
from .models import BootLocation, FavoriteLocations

from django.utils.decorators import method_decorator
from django_ratelimit.decorators import ratelimit
from rest_framework.decorators import api_view


class UserFavoriteLocationsView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, req):
        user = self.request.user
        favorite_locations_query_set = user.favorite_locations.all()
        if favorite_locations_query_set.exists():
            serializer = FavoriteLocationsSerializer(favorite_locations_query_set, many=True)
            return Response({'message': serializer.data})
        else:
            print('Não existe')
            return Response({'message': 'Favorite Locations Not Found'}, status=404)
    
    @method_decorator(ratelimit(key='user', rate='3/m', method='POST', block=False))
    def post(self, req):
        if getattr(req, 'limited', False):
            return Response({"message": 'Voce está adicionando muitos locais favoritos, aguarde um pouco!'}, status=429)
        try:
            user = self.request.user
            data = req.data.copy()
            data['username'] = user.id
            serializer = FavoriteLocationsSerializer(data=data, context={'request': req})

            if serializer.is_valid():
                serializer.save()
                print(f'The User {user.username} has added a favorite location')
                return Response({'message': 'Favorite Location has been added with sucess'}, status=201)
            else:
                return Response(serializer.errors, status=400)
            
        except Exception as e:
            print(f'ERROR AS {e}')
            return Response({'error': 'error'}, status=404)


    def delete(self, req):
        user = self.request.user
        location_id = req.data.get('id')

        if not location_id:
            return Response({'error': f'o campo: id. é obrigatório.'}, status=400)
        
        try:
            location = user.favorite_locations.get(id=location_id)
            location.delete()
            return Response(status=204)
        except Exception as e:
            print(f'ERRO: {e}')
            return Response({'error': 'Localização não encontrada'}, status=404)
        
        # Verificar se ta funcionando amanha a def delete e fazer a def post

 

class UserBootLocationView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, req):
        user = self.request.user
        boot_location = getattr(user, 'boot_location', None)
        if boot_location:
            serializer = BootLocationSerializer(boot_location)
            return Response({'message': serializer.data}, status=200)
        else:
            return Response({'message': f'{user.username} favorite_lcoations has not found'}, status=404)
    

    @method_decorator(ratelimit(key='user', rate='5/m', method='POST', block=True))
    def post(self, req):

        # terminar post dia 05/06/2025

        try:
            user = self.request.user
            data = req.data.copy()
            serializer = BootLocationSerializer(data=data, context={'request': req})
            
            if serializer.is_valid():
                print('is validated')
                serializer.save()
                return Response({'message': 'Boot Location has been added with sucess'}, status=201)
            return Response(serializer.errors, status=400)
                
        except Exception as e:
            print(e)
            return Response({'message': f'{e}'})

    

    def delete(self, req):
        user = self.request.user
        if hasattr(user, 'boot_location') and user.boot_location:
            user.boot_location.delete()
            user.boot_location = None
            user.save()
            return Response({'message': f'{user.username} boot_location deleted'})
        else:
            return Response({'message': f'{user.username} boot_location has not found'}, status=404)


from dj_rest_auth.views import LoginView, PasswordChangeView, PasswordResetView, PasswordResetConfirmView, UserDetailsView, LogoutView
from dj_rest_auth.registration.views import RegisterView
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView
from django.views.decorators.csrf import ensure_csrf_cookie


@ensure_csrf_cookie
@api_view(['GET'])
def get_csrf_token(request):
    return Response({'csrfToken': 'CSRF token set'}, status=status.HTTP_200_OK)

@method_decorator(ratelimit(key='user', rate='10/m', method='POST', block=False), name='dispatch')
class CustomTokenRefreshView(TokenRefreshView):
    permission_classes = [AllowAny]
    def post(self, request, *args, **kwargs):
        if getattr(request, 'limited', False):
            return Response({"message": 'Você está tentando atualizar o token muitas vezes, aguarde um pouco!'}, status=429)
        return super().post(request, *args, **kwargs)


@method_decorator(ratelimit(key='user', rate='60/m', method='POST', block=False), name='dispatch')
class CustomTokenVerifyView(TokenVerifyView):
    permission_classes = [AllowAny]
    def post(self, request, *args, **kwargs):
        if getattr(request, 'limited', False):
            return Response({"message": 'Você está tentando verificar o token muitas vezes, aguarde um pouco!'}, status=429)
        return super().post(request, *args, **kwargs)


@method_decorator(ratelimit(key='user_or_ip', rate='100/d', method='POST', block=False), name='dispatch')
@method_decorator(ensure_csrf_cookie, name='dispatch')
class CustomRegisterView(RegisterView):

    #essa view fica responsável pelo registro de usuários e alocação dos JWT em http only

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save(self.request)


        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        refresh_token = str(refresh)

        response = Response(
            {"detail": 'Usuário criado com sucesso.'}, status=201
        )

        # set cookies

        response.set_cookie(
            key='access_token',
            value=access_token,
            httponly=True,
            secure=False,
            samesite='Lax',
            max_age=60*15,
            path='/'
        )
        response.set_cookie(
            key='refresh_token', 
            value=refresh_token,
            httponly=True,
            secure=False,
            samesite='Lax',
            max_age=60*60*24*7,
            path='/api/auth/token/refresh'
        )


        return response


    def post(self, request, *args, **kwargs):
        if getattr(request, 'limited', False):
            return Response({"message": 'Você está tentando se registrar muitas vezes, aguarde um pouco!'}, status=429)
        return super().post(request, *args, **kwargs)


@method_decorator(ratelimit(key='user_or_ip', rate='5/m', method='POST', block=False), name='dispatch')
class CustomLoginView(LoginView):

    #essa view fica responsável pelo login de usuários e alocação dos JWT em http only

    def get_response(self):
        original_response = super().get_response()
        user = self.user
        
        data = original_response.data

        refresh = RefreshToken.for_user(user)
        access_token = data.get('access')

        response = Response(data, status=status.HTTP_200_OK)

        response.set_cookie(
            key='access_token',
            value=access_token,
            httponly=True,
            secure=False,
            samesite='Lax',
            max_age=60*15,
            path='/'  # Adjust the path as needed
        )

        response.set_cookie(
            key='refresh_token',
            value=refresh,
            httponly=True,
            secure=False,
            samesite='Lax',
            max_age=60*60*24*7,  # 7 days
            path='/api/auth/token/refresh/'  # Adjust the path as needed
        )

        del data['access']
        del data['refresh']
        del data['user']['pk']
        del data['user']['first_name']
        del data['user']['last_name']

        return response


    def post(self, request, *args, **kwargs):
        if getattr(request, 'limited', False):
            return Response({"message": 'Você está tentando fazer login muitas vezes, aguarde um pouco!'}, status=429)
        return super().post(request, *args, **kwargs)
    

@method_decorator(ratelimit(key='user', rate='3/h', method='POST', block=False), name='dispatch')
class CustomPasswordChangeView(PasswordChangeView):
    permission_classes = [IsAuthenticated]
    def post(self, request, *args, **kwargs):
        if getattr(request, 'limited', False):
            return Response({"message": 'Você está tentando mudar a senha muitas vezes, aguarde ate as proximas horas!'}, status=429)
        return super().post(request, *args, **kwargs)


@method_decorator(ratelimit(key='user_or_ip', rate='10/h', method='POST', block=False), name='dispatch')
class CustomPasswordResetView(PasswordResetView):
    def post(self, request, *args, **kwargs):
        if getattr(request, 'limited', False):
            return Response({"message": 'Você está tentando redefinir a senha muitas vezes, aguarde um pouco!'}, status=429)
        return super().post(request, *args, **kwargs)
    

@method_decorator(ratelimit(key='user_or_ip', rate='3/h', method='POST', block=False), name='dispatch')
class CustomPasswordResetConfirmView(PasswordResetConfirmView):
    def post(self, request, *args, **kwargs):
        if getattr(request, 'limited', False):
            return Response({"message": 'Você está tentando redefinir a senha muitas vezes, aguarde um pouco!'}, status=429)
        return super().post(request, *args, **kwargs)


@method_decorator(ratelimit(key='user', rate='60/m', method='GET', block=True), name='dispatch')
class CustomUserDetailsView(UserDetailsView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):

        original_response = super().get(request, *args, **kwargs)
        data = original_response.data
        del data['pk']
        del data['first_name']
        del data['last_name']

        if getattr(request, 'limited', False):
            return Response({"message": 'Você está tentando acessar os detalhes do usuário muitas vezes, aguarde um pouco!'}, status=429)
        return Response(data, status=status.HTTP_200_OK)


@method_decorator(ratelimit(key='user', rate='60/m', method='POST', block=True), name='dispatch')
class CustomLogoutView(LogoutView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        response = Response({'message': 'Logout realizado com sucesso'}, status=status.HTTP_200_OK)
        response.delete_cookie('access_token', path='/')
        response.delete_cookie('refresh_token', path='/api/auth/token/refresh/')
        return response