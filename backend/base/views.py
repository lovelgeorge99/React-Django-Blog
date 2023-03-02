from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

from .models import Blog,Content 
from .serializer import BlogSerializer,ContentSerializer

from .utils.slug import slugify


#Create views for backend api


blogs=[{
        '_id':'1',
        'title':'Setup docker.io and docker-compose on linux afsa dasdasd',
        'image':'/images/docker.png',
        'content':[
        {
            'sub_heading':'About',
            'sub_content':'Quickly install docker on Linux and run containers for diffrent service as docker images',
            'code':'sudo apt-get update',
            'about_code':'Update command downloads the package lists from the repositories and "updates" them to get information on the newest versions of packages and their dependencies',
            'imagez':"/images/docker.png",
            
        },
        {
            'sub_heading':'i am alomost done',
            'sub_content':'fdfdfd dfd',
            'code':'this is second cdde code',
            'about_code':'about the secind <p> code code</p>',
            'imagez':"/images/docker.png",
            
        },
        {
            'sub_heading':'3rd Sub Headings',
            'sub_content':'paragaragh 2nd  lovel george',
            'imagez':"/images/docker.png",
            
        },
        {
            'sub_content':'2nd paragraph of heading 3',
            'code':'this is second cdde code',
            'about_code':'about the secind <p> code code</p>',
            'imagez':"/images/docker.png",
            
        },
       
    ],
        
    },
    {
        '_id':'2',
        'title':'Installing NPM',
        'image':'/images/docker.png',
        'content':[
            {
                'sub_heading':'About',
                'sub_content':'Quickly install docker on Linux and run containers for diffrent service as docker images',

            },
            {
                'sub_content':'this is the second para',

            },
            {
                'sub_content':'this is the second para',

            },
        ],
        

    }]


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