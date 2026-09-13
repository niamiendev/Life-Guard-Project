from django.db import models
from django.contrib.auth.models import User

class Alert(models.Model):

    STATUS_CHOICES  = [
        ('PENDING','Pending'),
        ('IN_PROGRESS','In progress'),
        ('CANCELLED','Cancelled'),
        ('RESOLVED','Resolved')
    ]

    EMERGENCY_TYPE = [
        ('ACCIDENT','Accident'),
        ('MEDICAL','Medical'),
        ('FIRE','Fire'),
        ('POLICE','Police'),
        ('OTHER','Other')
    ]

    user = models.ForeignKey(User, on_delete = models.CASCADE, related_name="alerts")
    helper = models.ForeignKey(User, on_delete = models.SET_NULL, related_name="handled_alerts", null = True, blank=True)
    emergency_type =  models.CharField(choices = EMERGENCY_TYPE, max_length = 15, default = 'Other')
    status =  models.CharField(choices = STATUS_CHOICES, max_length = 15, default='PENDING')
    longitude = models.FloatField()
    latitude = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    accepted_at = models.DateTimeField(null= True, blank = True)
    resolved_at = models.DateTimeField(null= True, blank = True)

    def __str__(self):
        return f"{self.user.username} - {self.emergency}"