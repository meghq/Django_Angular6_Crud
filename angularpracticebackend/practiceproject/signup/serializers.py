from rest_framework import serializers
from .models import MemberProfile

class UpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemberProfile
        fields = "__all__"