from django.db import models
import random
from practiceproject import settings
# Create your models here.
from django.db import DataError

class MemberProfile(models.Model):
	firstname = models.CharField(max_length=100,null=True, blank=True)
	lastname = models.CharField(max_length=100,null=True, blank=True)
	email = models.CharField(max_length=100,null=True, blank=True)
	password = models.CharField(max_length=100,null=True, blank=True)
	gender = models.CharField('Gender', max_length=10, null=True, blank=True)
	mob_number = models.BigIntegerField(unique=True)


