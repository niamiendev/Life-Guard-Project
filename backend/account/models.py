from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):

    BLOOD_TYPE = [
        ("A+","A+"),
        ("A-","A-"),
        ("B+","B+"),
        ("B-","B-"),
        ("AB+","AB+"),
        ("AB-","AB-"),
        ("O+","O+"),
        ("O-","O-"),
    ]

    ROLE_CHOICES = [
        ("VICTIM", "Victim"),
        ("HELPER", "Helper"),
        ("ADMIN", "Admin")
    ]
    
    user = models.OneToOneField( User, on_delete=models.CASCADE, related_name="profile")
    role = models.CharField(choices=ROLE_CHOICES, default= "VICTIM", max_length=6)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.CharField(max_length=150)
    phone_number = models.CharField(max_length=100)
    blood_type = models.CharField(max_length=3, choices = BLOOD_TYPE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.first_name
    