# Generated by Django 4.1.6 on 2023-02-17 17:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_blog_image_content_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='content',
            name='_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
