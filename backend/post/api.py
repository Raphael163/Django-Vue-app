from django.http import JsonResponse

from rest_framework.decorators import api_view, authentication_classes, permission_classes

from .models import Post
from .serializers import PostSerializers


@api_view(['GET'])
def post_list(request):
    posts = Post.objects.all()

    serializer = PostSerializers(posts, many=True)

    return JsonResponse(serializer.data, safe=False)
