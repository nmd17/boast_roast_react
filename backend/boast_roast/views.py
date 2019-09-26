from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PostSerializer
from .models import Post 
from django.http import JsonResponse
from django.middleware.csrf import get_token

# Create your views here.


class PostView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()


def delete(request, magic_string):
    print('fired')
    pass




