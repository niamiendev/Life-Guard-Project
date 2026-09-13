from rest_framework import serializers
from account.models import Profile
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class LoginSerializer(serializers.Serializer):

    username = serializers.CharField(max_length=100)
    password = serializers.CharField(min_length=8, write_only=True)

    def validate(self, attrs):
        
        username = attrs.get('username')
        password =  attrs.get("password")
        user = authenticate(
            username = username,
            password = password
        )
        if user is None:
            raise serializers.ValidationError(
                "username ou mot de passe incorrect."
            )

        attrs["user"] = user

        return attrs

class RegisterSerializer(serializers.Serializer):

    username = serializers.CharField(max_length=100)
    password = serializers.CharField(min_length=8, write_only=True)
    email = serializers.EmailField()

    first_name = serializers.CharField(max_length=100)
    last_name = serializers.CharField(max_length=100)
    address = serializers.CharField(max_length=100)
    phone_number = serializers.CharField(max_length=100)
    blood_type = serializers.ChoiceField(
        choices = Profile.BLOOD_TYPE
    )

    def validate_username(self, value):

        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Ce username existe déjà.")
        return value

    
    def validate_email(self, value):

        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Ce email existe déjà.")
        return value.lower()

    
    def create(self, validated_data):

        user = User.objects.create_user(
            username = validated_data['username'],
            email = validated_data['email'],
            password = validated_data['password']
        )

        Profile.objects.create(
            user = user,
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
            address = validated_data['address'],
            phone_number = validated_data['phone_number'],
            blood_type = validated_data['blood_type']
        )

        return user

class ProfileSerializer(serializers.ModelSerializer):

    class Meta:

        model = Profile

        fields = [
            "id",
            "role",
            "first_name",
            "last_name",
            "phone_number",
            "address",
            "blood_type",
            "created_at",
            "updated_at"
        ]

        read_only_fields = [
            "id",
            "role",
            "created_at",
            "updated_at"
        ]
        
        def validate(self, attrs):

            if "id" in self.initial_data:
                raise serializers.ValidationError({
                    "id": "Vous n'êtes pas autorisé à modifier cet identifiant."
                })

            if "role" in self.initial_data:
                raise serializers.ValidationError({
                    "role": "Vous n'êtes pas autorisé à modifier votre rôle."
                })

            return attrs
