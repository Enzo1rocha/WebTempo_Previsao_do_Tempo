from django.db import models
from django.contrib.auth.models import AbstractUser
class BootLocation(models.Model):
    username = models.OneToOneField('CustomUser', on_delete=models.CASCADE, related_name='boot_location')
    location_name = models.CharField(max_length=58, blank=False, null=False)
    long = models.CharField(max_length=20, blank=False, null=False)
    lat = models.CharField(max_length=20, blank=False, null=False)
    country = models.CharField(max_length=80, blank=False, null=False, default='br')
    state = models.CharField(max_length=80, blank=False, null=False, default='br')
 

class FavoriteLocations(models.Model):
    username = models.ForeignKey('CustomUser', on_delete=models.CASCADE, related_name='favorite_locations')
    location_name = models.CharField(max_length=58, blank=False, null=False)
    long = models.CharField(max_length=20, blank=False, null=False)
    lat = models.CharField(max_length=20, blank=False, null=False)
    country = models.CharField(max_length=80, blank=False, null=False, default='br')
    state = models.CharField(max_length=80, blank=False, null=False, default='br')
    

class ContactMessage(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    read = models.BooleanField(default=False)
    
    def __str__(self):
        return f"Mensagem de {self.name} ({self.created_at.strftime('%d/%m/%Y')})"
    
    class Meta:
        ordering = ['-created_at']
    

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)