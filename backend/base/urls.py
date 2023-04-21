from django.urls import path
from . import views


urlpatterns = [
    path('users/login',views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/',views.registerUser, name='register'),
    path('blogs',views.getBlogs,name="blogs"),

    path('users/profile',views.getUserProfile,name="user-profile"),
     path('users/',views.getUsers,name="users"),

    path('blog/<str:pk>/',views.getBlog,name="blog"),
    path('test/<str:pk>/',views.test,name="test"),
]