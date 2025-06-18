"""
URL configuration for app project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from wheater.views import WeatherLocationView
from accounts.views import UserFavoriteLocationsView, UserBootLocationView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
    TokenVerifyView,
)

"""
Armazene o access token (com cuidado!) e o refresh token

Quando o access expirar, chame api/token/refresh/ com o refresh token para pegar um novo access

Faça logout se o refresh também expirar

"""

urlpatterns = [
    path('admin/', admin.site.urls),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('accounts/', include('allauth.urls')),
    path('search-city/', WeatherLocationView.as_view(), name='Search_City'),
    path('favorite_locations/', UserFavoriteLocationsView.as_view(), name='user_favorite_locations'),
    path('boot_location/', UserBootLocationView.as_view(), name='user_boot_location'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
 