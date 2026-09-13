from rest_framework import serializers
from alert.models import Alert

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
