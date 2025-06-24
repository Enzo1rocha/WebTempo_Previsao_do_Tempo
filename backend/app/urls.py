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
from wheater.views import WeatherLocationView #, TestView
from accounts.views import UserFavoriteLocationsView, UserBootLocationView, CustomLoginView, CustomPasswordResetConfirmView, CustomPasswordResetView, CustomPasswordChangeView, CustomRegisterView, CustomTokenRefreshView, CustomTokenVerifyView, CustomUserDetailsView, CustomLogoutView

"""
Armazene o access token (com cuidado!) e o refresh token

Quando o access expirar, chame api/token/refresh/ com o refresh token para pegar um novo access

Faça logout se o refresh também expirar

"""

urlpatterns = [
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('search-city/', WeatherLocationView.as_view(), name='Search_City'),
    path('favorite_locations/', UserFavoriteLocationsView.as_view(), name='user_favorite_locations'),
    path('boot_location/', UserBootLocationView.as_view(), name='user_boot_location'),
    path('api/auth/login/', CustomLoginView.as_view(), name='rest_login'),
    path('api/auth/registration/', CustomRegisterView.as_view(), name='rest_registration'),
    path('api/auth/logout/', CustomLogoutView.as_view(), name='rest_logout'),
    path('api/auth/user', CustomUserDetailsView.as_view(), name='rest_user_details'),
    path('api/auth/password/change/', CustomPasswordChangeView.as_view(), name='rest_password_change'),
    path('api/auth/password/reset/', CustomPasswordResetView.as_view(), name='rest_password_reset'),
    path('api/auth/password/reset/confirm/', CustomPasswordResetConfirmView.as_view(), name='rest_password_reset_confirm'),
    path('api/auth//token/verify/', CustomTokenVerifyView.as_view(), name='custom_token_verify'),
    path('api/auth/token/refresh/', CustomTokenRefreshView.as_view(), name='custom_token_refresh'),
    
]

if settings.DEBUG:
    urlpatterns += [
        path('admin/', admin.site.urls),
        path('api-auth/', include('rest_framework.urls')),
        #path('test/', TestView.as_view(), name='test_view'),
    ]
 