from django.shortcuts import render
from django.conf import settings
from django.shortcuts import render
import requests
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class UserFavoriteLocationsView(APIView):
    def get(self, req):
        ...
    

    def post(self, req):
        ...


    def delete(self, req):
        ...



class UserBootLocationView(APIView):
    def get(self, req):
        ...
    

    def post(self, req):
        ...

    
    def delete(self, req):
        ...
