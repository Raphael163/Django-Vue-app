from rest_framework import serializers

from .models import Post


class PostSerializers(serializers.ModelSerializer):
    class Meta:
        models = Post
        fields = '__all__'