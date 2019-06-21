from django.conf.urls import url
# from rest_framework_jwt.views import obtain_jwt_token
from signup import views

from .views import *

urlpatterns=[
    url(r'register',views.Login.as_view()),
    url(r'delete',views.R.as_view()),
    # url(r'update',views.U.as_view()),
    url(r'all',views.Retrive.as_view()),
    url(r'save',views.edit.as_view()),
    # url(r'ati',views.Valid.as_view())
    ]