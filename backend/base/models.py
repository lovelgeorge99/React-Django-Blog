from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Blog(models.Model):
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    title=models.CharField(max_length=200,null=False,blank=False)
    image=models.ImageField(null=True,blank=True)
    category=models.CharField(max_length=200,null=True,blank=True)
    createdAt=models.DateTimeField(auto_now_add=True)
    _id=models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return self.title


class Content(models.Model):
    blog=models.ForeignKey(Blog,on_delete=models.CASCADE,null=True) #deltes content if blog is delted
    title=models.CharField(max_length=200,null=True,blank=True)
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    sub_heading=models.CharField(max_length=200,null=True,blank=True)
    sub_content=models.TextField(null=True,blank=True)
    code=models.TextField(null=True,blank=True)
    about_code=models.TextField(null=True,blank=True)
    image=models.ImageField(null=True,blank=True)
    _id=models.AutoField(primary_key=True,editable=True)
   

    def save(self, *args, **kwargs):
        if self.blog:
            self.title = self.blog.title
        super().save(*args, **kwargs)

    def __str__(self):
        return self.blog.title
