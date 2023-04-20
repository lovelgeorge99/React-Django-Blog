from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import *

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model=Blog
        fields= '__all__'

class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Content
        fields='__all__'

class UserSerializer(serializers.ModelSerializer):

    name=serializers.SerializerMethodField(read_only=True)
    _id=serializers.SerializerMethodField(read_only=True)
    isAdmin=serializers.SerializerMethodField(read_only=True)
    class Meta:
        model=User
        fields=['id','_id','username','email','name','isAdmin']
    
    def get_isAdmin(self,obj):   
        return obj.is_staff
    
    def get__id(self,obj):
        return obj.id

    def get_name(self,obj):
        name=obj.first_name
        if name=="":
            name=obj.email
        return name

class UserSerializerWithToken(UserSerializer):
    token=serializers.SerializerMethodField(read_only=True)
    class Meta:
        model= User
        fields=['id','_id','username','email','name','isAdmin','token']

    def get_token(self,obj):
        token=RefreshToken.for_user(obj)
        return str(token.access_token)