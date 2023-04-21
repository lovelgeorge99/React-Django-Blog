from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

from base.models import Blog,Content 
from base.serializer import BlogSerializer,ContentSerializer


from django.contrib.auth.models import User




from rest_framework import status




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
