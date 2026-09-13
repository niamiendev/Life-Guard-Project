from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from alert.permissions import IsAdmin
from django.contrib.auth.models import User
from users.serializers import UserSerializer

class UserDetailView(generics.RetrieveAPIView):

    serializer_class = UserSerializer
    permission_classes = [IsAdmin]

    lookup_url_kwarg = "user_id"

    def get_queryset(self):
        return User.objects.select_related(
            "profile"
        )

class UserListView(generics.ListAPIView):

    serializer_class = UserSerializer
    permission_classes = [IsAdmin]

    def get_queryset(self):
        return User.objects.select_related(
            "profile"
        ).order_by("-date_joined")


class DemoteToVictimView(APIView):

    permission_classes = [IsAdmin]
    
    def post(self, request, user_id):

        try:
            user = User.objects.get(id = user_id)
        except User.DoesNotExist:
            return Response(
                {"message": "Cet utilisateur n'existe pas"},
                status= status.HTTP_404_NOT_FOUND
            )

        profile = user.profile

        if profile.role == "ADMIN":
            return Response(
                {"message": "Impossible de modifier le rôle de l'administrateur."},
                status= status.HTTP_404_NOT_FOUND
            )

        if profile.role == "VICTIM":
            return Response(
                {"message": "Cet utilsateur est déjà une victim"},
                status= status.HTTP_403_FORBIDDEN
            )
        
        profile.role = "VICTIM"
        profile.save()

        return Response(
            {
                "message": "Utilisateur promu helper avec succès.",
                "user_id": user.id,
                "username": user.username,
                "role": profile.role
            },
            status=status.HTTP_200_OK
        )

class PromoteToHelperView(APIView):

    permission_classes = [IsAdmin]
    
    def post(self, request, user_id):

        try:
            user = User.objects.get(id = user_id)
        except User.DoesNotExist:
            return Response(
                {"message": "Cet utilisateur n'existe pas"},
                status= status.HTTP_404_NOT_FOUND
            )

        profile = user.profile

        if profile.role == "ADMIN":
            return Response(
                {"message": "Un administrateur ne peut pas être Helper"},
                status= status.HTTP_404_NOT_FOUND
            )

        if profile.role == "HELPER":
            return Response(
                {"message": "Cet utilsateur est déjà helper"},
                status= status.HTTP_403_FORBIDDEN
            )
        
        profile.role = "HELPER"
        profile.save()

        return Response(
            {
                "message": "Utilisateur promu helper avec succès.",
                "user_id": user.id,
                "username": user.username,
                "role": profile.role
            },
            status=status.HTTP_200_OK
        )