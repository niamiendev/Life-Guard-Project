from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.serializers import TokenRefreshSerializer
from rest_framework_simplejwt.exceptions import TokenError

from account.models import Profile
from account.serializers import (
    ProfileSerializer, 
    RegisterSerializer, 
    LoginSerializer )


@api_view(['POST'])
def refresh_token(request):
    serializer = TokenRefreshSerializer(data = request.data)

    if serializer.is_valid():

        return Response(
            data = serializer.validated_data,
            status=status.HTTP_200_OK  )
    
    return Response(
        serializer.errors,
        status= status.HTTP_401_UNAUTHORIZED
    )

@api_view(['GET','POST'])
def profile_list(request):
    if request.method == 'POST':
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                serializer.data,
                status = status.HTTP_201_CREATED
            )
        return Response(
                serializer.errors,
                status = status.HTTP_400_BAD_REQUEST
            )
    
    profile = Profile.objects.all()
    serializer = ProfileSerializer(profile, many=True)

    return Response(serializer.data)

@api_view(['GET','PATCH'])
@permission_classes([IsAuthenticated])
def my_profile(request):
    profile = request.user.profile

    if request.method == 'GET':
        serializer = ProfileSerializer(profile)

        return Response(
            serializer.data
        )
    
    serializer = ProfileSerializer(
        profile,
        data = request.data,
        partial = True
    )

    if serializer.is_valid():
        serializer.save()

        return Response(
            serializer.data,
            status=status.HTTP_200_OK
        )
    
    return Response(
        serializer.errors,
        status= status.HTTP_400_BAD_REQUEST
    )


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def me(request):

    user = request.user
    profile = request.user.profile
    return Response(
        {
            "user_id": user.id,
            "email": user.email,
            "username": user.username,
            "profile":{
                "first_name": profile.first_name,
                "last_name": profile.last_name,
                "phone_number": profile.phone_number,
                "address" : profile.address,
                "blood_type" : profile.blood_type
            }
        }
    )

@api_view(['POST'])
def register(request):
    
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response(
            {
                "message":"Utilsateur crée avec succès",
                "user_id": user.id,
                "email": user.email,
                "username":user.username
            },
            status = status.HTTP_201_CREATED
        )

    return Response(
        serializer.errors,
        status = status.HTTP_400_BAD_REQUEST
    )

@api_view(['POST'])
def login(request):
    serializer = LoginSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.validated_data["user"]

        refresh = RefreshToken.for_user(user)

        return Response(
            {
                "message":"connexion reussie",
                "user":{
                    "user_id":user.id,
                    "email":user.email,
                    "username":user.username
                },
                "access":str(refresh.access_token),
                "refresh": str(refresh)
            },
            status = status.HTTP_200_OK
        )
    
    return Response(
        serializer.errors,
        status = status.HTTP_401_UNAUTHORIZED
    )


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout(request):
    refresh_token = request.data.get("refresh")

    if not refresh_token :
        return Response(
            {
                "detail":"Refresh token requis"
            },
            status= status.HTTP_404_NOT_FOUND
        )
    try:
        token = RefreshToken(refresh_token)
        token.blacklist()

        return Response(
            {
                "message" : "Déconnexion réussie"
            },
            status= status.HTTP_200_OK
        )
    except TokenError:
        return Response(
            {
                "detail":"Refresh token invalide"
            },
            status= status.HTTP_400_BAD_REQUEST
        )
