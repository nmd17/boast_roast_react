from django.shortcuts import render, redirect
from rest_framework import viewsets
from .serializers import PostSerializer
from .models import Post 
from django.http import JsonResponse, HttpRequest
from django.middleware.csrf import get_token


# Create your views here.


class PostView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

def delete(request, delete_magic):
    ref = Post.objects.get(magic=delete_magic)
    ref.delete()

    return redirect("http://localhost:3000/deletesuccess")
    

    




