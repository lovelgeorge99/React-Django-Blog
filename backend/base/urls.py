from django.urls import path
from . import views

urlpatterns = [
    path('blogs',views.getBlogs,name="blogs"),
    path('blog/<str:pk>/',views.getBlog,name="blog"),
]