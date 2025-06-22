from dj_rest_auth.serializers import UserDetailsSerializer
from rest_framework import serializers
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import FavoriteLocations, BootLocation
from dj_rest_auth.registration.serializers import RegisterSerializer
from dj_rest_auth.serializers import LoginSerializer
import re


class CustomLoginSerializer(LoginSerializer):
    username = None
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True, trim_whitespace=False)


class CustomRegisterSerializer(RegisterSerializer):
    favorite_location_name = serializers.CharField(required=False)
    lat_favorite_location = serializers.CharField(required=False)
    long_favorite_location = serializers.CharField(required=False)

    boot_location_name = serializers.CharField(required=False)
    lat_boot_location = serializers.CharField(required=False)
    long_boot_location = serializers.CharField(required=False)

    def get_cleaned_data(self):
        data = super().get_cleaned_data()

        data['favorite_location_name'] = self.validated_data.get('favorite_location_name')
        data['favorite_location_lat'] = self.validated_data.get('lat_favorite_location')
        data['favorite_location_long'] = self.validated_data.get('long_favorite_location')
        data['boot_location_name'] = self.validated_data.get('boot_location_name')
        data['boot_location_lat'] = self.validated_data.get('lat_boot_location')
        data['boot_location_long'] = self.validated_data.get('long_boot_location')

        return data
    
    
    def save(self, request):
        user = super().save(request)

        favorite_location_location_name = self.validated_data.get('favorite_location_name')
        favorite_location_lat = self.validated_data.get('lat_favorite_location')
        favorite_location_long = self.validated_data.get('long_favorite_location')
        boot_location_location_name = self.validated_data.get('boot_location_name')
        boot_location_lat = self.validated_data.get('lat_boot_location')
        boot_location_long = self.validated_data.get('long_boot_location')

        if favorite_location_location_name and favorite_location_lat and favorite_location_long:
            from .models import FavoriteLocations
            favorite_location = FavoriteLocations.objects.create(
                username=user,
                location_name=favorite_location_location_name,
                lat=favorite_location_lat,
                long=favorite_location_long,
            )
        
        if boot_location_location_name and boot_location_lat and boot_location_long:
            from .models import BootLocation
            boot_locationOBJ = BootLocation.objects.create(
                username=user,
                location_name=boot_location_location_name,
                lat=boot_location_lat,
                long=boot_location_long,
            ) 


        user.save()
        return user
    


# o que fazer amanhã ver como vai reagir ao criar o get e verificar por que não esta sendo salvo no banco de dados tudo isso a url do stackoverflou é essa: https://stackoverflow.com/questions/64498554/how-to-add-custom-user-fields-of-dj-rest-auth-package



class FavoriteLocationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteLocations
        fields = ['id', 'location_name', 'lat', 'long']

    
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
        return FavoriteLocations.objects.create(username=user, **validated_data)


class BootLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = BootLocation
        fields = ['location_name', 'lat', 'long']


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
            raise serializers.ValidationError('long must be a rational number')
        return value
        
    
    def create(self, validated_data):
        user = self.context['request'].user
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