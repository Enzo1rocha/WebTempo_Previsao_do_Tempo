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
import requests


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
    lat_boot_location = serializers.CharField(required=False)
    long_boot_location = serializers.CharField(required=False)


    def validate_email(self, value):
        value = super().validate_email(value)
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Esse email já esta em uso.")
        return value


    def get_cleaned_data(self):
        data = super().get_cleaned_data()

        data['boot_location_lat'] = self.validated_data.get('lat_boot_location')
        data['boot_location_long'] = self.validated_data.get('long_boot_location')

        return data
    
    
    def get_data_of_boot_location(self, lat, lon):
        try:
            response = requests.get('http://api.geonames.org/findNearbyJSON?', params={
                "lat": lat,
                "lng": lon,
                "username": config('GEONAMES_USERNAME')
            })
            data = response.json()['geonames'][0]
            
            return {
                "location_name": data['name'],
                "country": data['countryName'],
                "state": data['adminName1']
            }
            
        except Exception as e:
            print("Erro ao pegar os dados da boot location: ", e)
            raise serializers.ValidationError('Erro ao pegar os dados da boot location ')
            
    

    def save(self, request):
        user = super().save(request)

        boot_location_lat = self.validated_data.get('lat_boot_location')
        boot_location_long = self.validated_data.get('long_boot_location')
        boot_location_data = self.get_data_of_boot_location(lat=boot_location_lat, lon=boot_location_long)
        
        if boot_location_lat and boot_location_long:
            serializer = BootLocationSerializer(data={
                'location_name': boot_location_data['location_name'],
                'lat': boot_location_lat,
                'long': boot_location_long,
                'state': boot_location_data['state'],
                'country': boot_location_data['country']
            }, context={'request': request, 'user': user})
            serializer.is_valid(raise_exception=True)
            serializer.save()


        user.save()
        return user
    


# o que fazer amanhã ver como vai reagir ao criar o get e verificar por que não esta sendo salvo no banco de dados tudo isso a url do stackoverflou é essa: https://stackoverflow.com/questions/64498554/how-to-add-custom-user-fields-of-dj-rest-auth-package



class FavoriteLocationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteLocations
        fields = ['id', 'location_name', 'lat', 'long', 'country', 'state']
        
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
        return FavoriteLocations.objects.create(username=user, **validated_data)
    

class BootLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = BootLocation
        fields = ['location_name', 'lat', 'long', 'country', 'state']

    
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
        user = self.context.get('user') or self.context.get('request').user
        if not user or user.is_anonymous:
            print(user)
            raise serializers.ValidationError('usuário inválido')
        instance, created = BootLocation.objects.update_or_create(
            username=user,
            defaults=validated_data
        )
        return instance


class CustomUserDetailsSerializer(UserDetailsSerializer):
    favorite_locations = FavoriteLocationsSerializer(many=True, read_only=True)
    boot_location = BootLocationSerializer(read_only=True)

    class Meta:
        model = get_user_model()
        fields = tuple(UserDetailsSerializer.Meta.fields + ('favorite_locations', 'boot_location'))