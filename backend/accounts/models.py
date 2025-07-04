from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class BootLocation(models.Model):
    username = models.OneToOneField('CustomUser', on_delete=models.CASCADE, related_name='boot_location')
    location_name = models.CharField(max_length=58, blank=False, null=False)
    long = models.CharField(max_length=20, blank=False, null=False)
    lat = models.CharField(max_length=20, blank=False, null=False)


class FavoriteLocations(models.Model):
    username = models.ForeignKey('CustomUser', on_delete=models.CASCADE, related_name='favorite_locations')
    location_name = models.CharField(max_length=58, blank=False, null=False)
    long = models.CharField(max_length=20, blank=False, null=False)
    lat = models.CharField(max_length=20, blank=False, null=False)
    

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)