from django.contrib.auth.models import Group, User
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import ToDoItem
from .serializers import ToDoItemSerializer

@api_view(['GET'])
def all_items(request):
    form_submissions = ToDoItem.objects.all()
    serializer = ToDoItemSerializer(form_submissions, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def submit_item(request):
    print(request.data)
    serializer = ToDoItemSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)