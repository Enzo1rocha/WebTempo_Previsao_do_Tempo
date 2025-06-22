from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import FavoriteLocationsSerializer, BootLocationSerializer
from .models import BootLocation, FavoriteLocations

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
    

    def post(self, req):
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
            return Response({'message': 'Localização removida com sucesso'}, status=200)
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


