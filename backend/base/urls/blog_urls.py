from django.urls import path
from base.views import blog_views


urlpatterns = [
    path('',blog_views.getBlogs,name="blogs"),
    path('<str:pk>/',blog_views.getBlog,name="blog"),
   # path('test/<str:pk>/',blog_views.,name="test"),
]