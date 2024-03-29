from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Blog,Content 
from base.serializer import BlogSerializer,ContentSerializer,UserSerializer,UserSerializerWithToken


from django.contrib.auth.models import User

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password

from rest_framework import status



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


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializerWithToken(user,many=False)
    data =  request.data
    user.first_name=data['name']
    user.email=data['email']
    user.username=data['email']

    if(data['password'] != ''):
        user.password=make_password(data['password'])
    user.save()
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


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteUser(request,pk):
    userForDeltion=User.objects.get(id=pk)
    userForDeltion.delete()
    return Response("User Deleted")
