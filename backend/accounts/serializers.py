from dj_rest_auth.serializers import UserDetailsSerializer
from rest_framework import serializers
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import FavoriteLocations, BootLocation
from dj_rest_auth.registration.serializers import RegisterSerializer
from dj_rest_auth.serializers import LoginSerializer, JWTSerializerWithExpiration
import re
from decouple import config


User = get_user_model()


class CustomJWTSerializer(JWTSerializerWithExpiration):
    def to_representation(self, instance):
        return {
            "user": self.context['request'].user.email,
        }

class CustomLoginSerializer(LoginSerializer):
    username = None
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True, trim_whitespace=False)


class CustomRegisterSerializer(RegisterSerializer):
    favorite_location_name = serializers.CharField(required=False)
    lat_favorite_location = serializers.CharField(required=False)
    long_favorite_location = serializers.CharField(required=False)

    lat_boot_location = serializers.CharField(required=False)
    long_boot_location = serializers.CharField(required=False)


    def validate_email(self, value):
        value = super().validate_email(value)
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Esse email já esta em uso.")
        return value


    def get_cleaned_data(self):
        data = super().get_cleaned_data()

        data['favorite_location_name'] = self.validated_data.get('favorite_location_name')
        data['favorite_location_lat'] = self.validated_data.get('lat_favorite_location')
        data['favorite_location_long'] = self.validated_data.get('long_favorite_location')
        data['boot_location_lat'] = self.validated_data.get('lat_boot_location')
        data['boot_location_long'] = self.validated_data.get('long_boot_location')

        return data
    

    def save(self, request):
        user = super().save(request)

        favorite_location_location_name = self.validated_data.get('favorite_location_name')
        favorite_location_lat = self.validated_data.get('lat_favorite_location')
        favorite_location_long = self.validated_data.get('long_favorite_location')

        boot_location_lat = self.validated_data.get('lat_boot_location')
        boot_location_long = self.validated_data.get('long_boot_location')

        if favorite_location_location_name and favorite_location_lat and favorite_location_long:
            from .models import FavoriteLocations
            FavoriteLocations.objects.create(
                username=user,
                location_name=favorite_location_location_name,
                lat=favorite_location_lat,
                long=favorite_location_long,
            )
        
        if boot_location_lat and boot_location_long:
            serializer = BootLocationSerializer(data={
                'lat': boot_location_lat,
                'long': boot_location_long
            }, context={'user': user})
            serializer.is_valid(raise_exception=True)
            serializer.save()


        user.save()
        return user
    


# o que fazer amanhã ver como vai reagir ao criar o get e verificar por que não esta sendo salvo no banco de dados tudo isso a url do stackoverflou é essa: https://stackoverflow.com/questions/64498554/how-to-add-custom-user-fields-of-dj-rest-auth-package



class FavoriteLocationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteLocations
        fields = ['id', 'location_name', 'lat', 'long', 'country', 'country_code', 'state']
        extra_kwargs = {
            'lat': {'required': False},
            'long': {'required': False},
            'country_code': {'required': False}
        }

    
    def validate_location_name(self, value):
        if not re.fullmatch(r"[A-Za-zÀ-ÿ\s]+", value):
            raise serializers.ValidationError("Location name must contain only letters and spaces")
        if len(value) > 50:
            raise serializers.ValidationError("Location name must be at most 50 characters long")
        return value


    def validate_lat(self, value):
        try:
            float(value)
        except ValueError:
            raise serializers.ValidationError('lat must be a rational number')
        return value
        
    
    def validate_long(self, value):
        try:
            float(value)
        except ValueError:
            raise serializers.ValidationError('Long must be a rational number')
        return value
    

    def create(self, validated_data):
        user = self.context['request'].user

        location_name = validated_data.get('location_name')
        state = validated_data.get('state')
        country = validated_data.get('country')

        query = f"{location_name}, {state}, {country}"

        import requests

        try:
            response = requests.get(
                'https://nominatim.openstreetmap.org/search',
                params={
                    'q': query,
                    'format': 'json',
                    'addressdetails': 1,
                    'limit': 1,
                },
                headers={
                    'User-Agent': config('USER_AGENT')
                }
            )
            data = response.json()

            if not data:
                raise serializers.ValidationError('Localização não encontrada')
            print(data)    

            place = data[0]

            validated_data['lat'] = place['lat']
            validated_data['long'] = place['lon']

            address = place.get('address', {})

            validated_data['country_code'] = address.get('country_code', '').upper()
            validated_data['location_name'] = location_name or address.get('city') or address.get('town') or address.get('village')
            validated_data['state'] = state or address.get('state')
            validated_data['country'] = country or address.get('country')


        except Exception as e:
            raise serializers.ValidationError(f'Erro ao identificar localização: {e}')
        
        return FavoriteLocations.objects.create(username=user, **validated_data)


class BootLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = BootLocation
        fields = ['location_name', 'lat', 'long', 'country', 'country_code', 'state']
        extra_kwargs = {
            'location_name': {'required': False},
            'country': {'required': False},
            'country_code': {'required': False},
            'state': {'required': False},
        }

    
    def validate_lat(self, value):
        try:
            float(value)
        except ValueError:
            raise serializers.ValidationError('lat must be a rational number')
        return value
    

    def validate_long(self, value):
        try:
            float(value)
        except ValueError:
            raise serializers.ValidationError('long must be a rational number')
        return value
        
    
    def create(self, validated_data):
        user = self.context.get('user') or self.context.get('request').user if self.context.get('request') else None
        if not user or user.is_anonymous:
            raise serializers.ValidationError('usuário inválido')
        lat = validated_data.get('lat')
        long = validated_data.get('long')
        boot_location_data = self.get_boot_location_data_from_nominatim(lat,long)
        validated_data['location_name'] = boot_location_data['location_name']
        validated_data['country'] = boot_location_data['country']
        validated_data['country_code'] = boot_location_data['country_code']
        validated_data['state'] = boot_location_data['state']


        instance, created = BootLocation.objects.update_or_create(
            username=user,
            defaults=validated_data
        )

        return instance
    

    def get_boot_location_data_from_nominatim(self, lat, lon):
        import requests

        try:
            response = requests.get(
                'https://nominatim.openstreetmap.org/reverse',
                params={
                    'lat': lat,
                    'lon': lon,
                    'format':'json',
                    'addressdetails': 1
                },
                headers={
                    'User-Agent': config('USER_AGENT'),
                }
            )
            boot_location_data = {}
            data = response.json()
            print(data)

            address = data.get('address', {})
            options_location_name = ['city', 'town', 'village', 'municipality']
            options_country = ['country']
            options_country_code = ['country_code']
            options_state = ['state']

            try:
                for i in options_location_name:
                    if address.get(i):
                        boot_location_data['location_name'] = address.get(i)
                        print('location_name: OK')
                        break

                for i in options_country:
                    if address.get(i):
                        boot_location_data['country'] = address.get(i)
                        print('country: OK')
                        break

                for i in options_country_code:
                    if address.get(i):
                        boot_location_data['country_code'] = address.get(i)
                        print('country_code: OK')
                        break

                for i in options_state:
                    if address.get(i):
                        boot_location_data['state'] = address.get(i)
                        print('state: OK')
                        break
            except Exception as e:
                print('Erro ao pegar dados para a BOOT_LOCATION_DATA', e)
            
            else:
                if boot_location_data['location_name'] and boot_location_data['country'] and boot_location_data['country_code'] and boot_location_data['state']:
                    return boot_location_data
                else:
                    print('Erro os dados não estão completos em boot_location_data')
                    raise serializers.ValidationError('os dados estão incompletos em boot_location_data')
        except Exception as e:
            print(f'Erro ao buscar cidade: {e}')
            return 'Erro ao identificar local'


class CustomUserDetailsSerializer(UserDetailsSerializer):
    favorite_locations = FavoriteLocationsSerializer(many=True, read_only=True)
    boot_location = BootLocationSerializer(read_only=True)

    class Meta:
        model = get_user_model()
        fields = tuple(UserDetailsSerializer.Meta.fields + ('favorite_locations', 'boot_location'))