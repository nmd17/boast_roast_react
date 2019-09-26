from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'body', 'created_at', 'upvotes', 'downvotes', 'type_of_post')
        

