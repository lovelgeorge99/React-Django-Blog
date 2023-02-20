from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response

from .models import Blog,Content 
from .serializer import BlogSerializer,ContentSerializer


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
    blogs=Blog.objects.all()
    serializer = BlogSerializer(blogs,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getBlog(request,pk):
    pk=pk.replace("_"," ")
    print(pk)
    blog=Content.objects.filter(title=pk)
    print(blog)
    serializer = ContentSerializer(blog,many=True)
    print("this is a cha gere")
    print(serializer.data)
    
    # for i in blogs:
    #     if i['_id']==pk:
    #         blog=i
    #         break
    return Response(serializer.data)