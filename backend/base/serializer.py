from rest_framework import serializers
from django.contrib.auth.models import User

from .models import *

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model=Blog
        fields= '__all__'

class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Content
        fields='__all__'