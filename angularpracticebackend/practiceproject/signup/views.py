from django.shortcuts import render
from django.contrib.auth import logout
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.views import APIView
from signup.models import MemberProfile
from .serializers import *

# Create your views here.
class Login(APIView):
    def post(self, request):
        obj = MemberProfile()
        obj.firstname = request.data['firstname']
        obj.lastname = request.data['lastname']
        obj.email = request.data['email']
        obj.password = request.data['password']
        obj.mob_number = request.data['mob_number']
        # obj.gender = request.data['gender']
        obj.save()
        return Response("success")


class R(APIView):
    def post(self, request):
        print("hiiii",request.data);
        mobile = request.data['id']
        data = MemberProfile.objects.filter(id=mobile).delete()        
        return Response("deleted successfully")




# class U(APIView):
#     def post(self, request):
#         # id = request.data['id']
#         data = MemberProfile.objects.filter(firstname=request.data['firstname']).update(email='loki.3245')
#         return Response(data)

class Retrive(APIView):
    def get(self, request):
        print("ret")
        # id = request.data['id']
        data = MemberProfile.objects.values()
        return Response(data)
        print("hgdgu")

class edit(APIView):
    def post(self,request):
        print("555555555",request.data)
        id=request.data['id']
        data=MemberProfile.objects.get(id=id)
        serializer = UpdateSerializer(data, request.data)
        # serializer = UpdateSerializer(data)
        if serializer.is_valid():
            serializer.save()
            return Response("Details Updated", status=status.HTTP_200_OK)
        else:
            return Response("Details Update failed", status=status.HTTP_200_OK)

# class Valid(APIView):
#     def at(request):
#         mobile=request.data['mobile']
#         full_name=request.data['name']
#         password=request.data['address']
#         try:
#             user=User.objects.get(username=mobile)
#             if user:
#                 return Response("User already exists", status=status.HTTP_400_BAD_REQUEST)
#         except User.DoesNotExist:
#             try:
#                 user1=User.objects.get(username=mobile_number)
#                 if user1:
#                     user1.username = mobile
#                     user1.password = encrypt_password(password)
#                     user1.last_name = ""
#                     user1.first_name = full_name
#                     user1.is_active = True
#                     user1.save()
#                     userid = User.objects.get(id=user1.id)
#                     print ("mobile",userid)
#                     profile = MemberProfile()
#                     profile.user = userid
#                     profile.firstname = name
#                     profile.mob_number = mobile
#                     profile.save()
#                 return Response("Registration success")
#             except Exception as e:
#                 print(e)
#                 return Response("Registration failed", status=status.HTTP_400_BAD_REQUEST)

