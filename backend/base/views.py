from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

from .models import Blog,Content 
from .serializer import BlogSerializer,ContentSerializer,UserSerializer,UserSerializerWithToken

from .utils.slug import slugify

from django.contrib.auth.models import User

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password

from rest_framework import status

#Create views for backend api

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self,attrs):
        data = super().validate(attrs)

        # data['username']=self.user.username
        # data['email']=self.user.email
        serializer=UserSerializerWithToken(self.user).data
        for k,v in serializer.items():
            data[k]=v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class=MyTokenObtainPairSerializer



@api_view(['POST'])
def registerUser(request):
    data=request.data

    try:
        user=User.objects.create(
            first_name=data['name'],
            email=data['email'],
            username=data['email'],
            password=make_password(data['password'])

        )
    except:
        message={'detail':'User with this email already exists'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)
    serializer=UserSerializerWithToken(user,many=False)


    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user,many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users=User.objects.all()
    serializer = UserSerializer(users,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getBlogs(request):
    blogs=Blog.objects.all().order_by('-createdAt')
    serializer = BlogSerializer(blogs,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getBlog(request,pk):
    
   
    # getting blog object from Blog Table  where slug matches the pk
    blogObject=Blog.objects.get(slug=pk)

    #serializing the blog object to access its attributes
    serialized_blogData=BlogSerializer(blogObject,many=False)

    #getting blog id from serialized data
    blogID=serialized_blogData.data['_id']
    
    # getting content object from Content Table  where blog id matched 
    contentObject=Content.objects.filter(blog=blogID) 
    #print(blogs)
    #serializing the content object to access its attributes
    serialized_contentData = ContentSerializer(contentObject,many=True)
    
    #print(serializer.data)
    header={
        "title":serialized_blogData.data['title'],
        "user":serialized_blogData.data['user'],
        "titleImage":serialized_blogData.data['titleImage']
        
    }
    
    # for i in blogs:
    #     if i['_id']==pk:
    #         blog=i
    #         break
    return Response(data={
        "header": header,
        "data": serialized_contentData.data
        })


@api_view(['GET'])
def test(request,pk):
    #pk=pk.replace("-"," ")
    print(pk)
    blogID=Blog.objects.get(slug=pk)# getiing id of blog from title name

    s=BlogSerializer(blogID,many=False)# serailizeg the blodid data
    print(s.data)
    bid=s.data['_id']
    
    blog=Content.objects.filter(blog=bid) #getting blog data using blodid
    #print(blogs)
    serializer = ContentSerializer(blog,many=True)
    
    #print(serializer.data)
    d={
        "title":s.data['title'],
        "user":s.data['user'],
        "Content":serializer.data
        }
    print("dsd",d)
    
    # for i in blogs:
    #     if i['_id']==pk:
    #         blog=i
    #         break
    
    
    return Response(data={"data": serializer.data, "extra_data": d})