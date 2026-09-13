from rest_framework import serializers
from alert.models import Alert
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):

    first_name = serializers.CharField(source="profile.first_name")
    last_name = serializers.CharField(source="profile.last_name")
    phone_number = serializers.CharField(source="profile.phone_number")
    role = serializers.CharField(source="profile.role")
    created_at = serializers.CharField(source="profile.created_at")

    class Meta:
        model = User

        fields = [
            "id",
            "username",
            "email",
            "first_name",
            "last_name",
            "phone_number",
            "role",
            "created_at"
        ]

        read_only_fields = fields

class AlertSerializer(serializers.ModelSerializer):

    class Meta:
        
        model = Alert
        
        fields = [
            "id",
            "emergency_type",
            "status",
            "helper",
            "longitude",
            "latitude",
            "created_at",
            "updated_at",
            "resolved_at",
            "accepted_at",
        ]

        read_only_fields = [
            "id",
            "emergency_type",
            "status",
            "resolved_at",
            "accepted_at",
            "created_at",
            "updated_at"
        ]
