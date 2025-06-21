from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ContactSerializer
from .models import Contact
from rest_framework import status

# Create your views here.
@api_view(['POST'])
def contact(request):
    if request.method == 'POST':
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message":"Your message has been sent."},status=status.HTTP_200_OK)
    return Response({'message':"Invalid request made."},status=status.HTTP_400_BAD_REQUEST)    
    

