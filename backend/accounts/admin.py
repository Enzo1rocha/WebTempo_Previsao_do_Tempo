from django.contrib import admin
from .models import CustomUser, BootLocation, FavoriteLocations, ContactMessage
from django.contrib.auth import get_user


class BootLocationAdmin(admin.ModelAdmin):
    list_display = ('id', 'get_user','location_name','long','lat')
    search_fields = ('user_boot_location__username',)

    def get_user(self, obj):
        return getattr(obj, 'user_boot_location', None) or "-"
    get_user.short_description = 'Usuário'
    
    
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at', 'read')
    list_filter = ('read', 'created_at')
    search_fields = ('name', 'email', 'message')


class FavoriteLocationsAdmin(admin.ModelAdmin):
    list_display = ('id', 'get_user','location_name','long','lat')

    def get_user(self, obj):
        return getattr(obj, 'user_favorite_locations', None) or "-"
    get_user.short_description = 'Usuário'


admin.site.register(BootLocation, BootLocationAdmin)
admin.site.register(FavoriteLocations, FavoriteLocationsAdmin)
admin.site.register(ContactMessage, ContactMessageAdmin)



admin.site.register(CustomUser)