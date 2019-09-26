from django.contrib import admin
from .models import Post

# Register your models here.

class PostAdmin(admin.ModelAdmin):
    list_display = ('body', 'created_at', 'upvotes', 'downvotes', 'type_of_post')

admin.site.register(Post, PostAdmin)


