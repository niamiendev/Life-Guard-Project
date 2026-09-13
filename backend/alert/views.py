from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from alert.serializers import AlertSerializer
from alert.models import Alert
from alert.permissions import IsHelper, IsVictim, IsAdmin
from django.db import transaction
from django.utils import timezone


class AdminAlertListView(generics.ListAPIView):
    permission_classes = [IsAdmin]
    serializer_class = AlertSerializer

    def get_queryset(self):
        return Alert.objects.all().order_by("-created_at")

    

class CancelAlertView(APIView):
    permission_classes = [IsVictim]

    @transaction.atomic
    def post(self, request, alert_id):
        try:
            alert = Alert.objects.select_for_update().get(id = alert_id)
        except Alert.DoesNotExist:
            return Response(
                {
                    "message":"Alerte introuvable"
                },
                status=status.HTTP_404_NOT_FOUND
            )
        
        if alert.status != "PENDING":
            return  Response(
                {
                    "message":"Alerte ne peut plus être annuler."
                },
                status=status.HTTP_403_FORBIDDEN
            )
        
        if alert.user != request.user :
            return  Response(
                {
                    "message":"Vous n'êtes plus autorisé à annuler cette alerte"
                },
                status=status.HTTP_403_FORBIDDEN
            )

        alert.status = "CANCELLED"
        alert.resolved_at = timezone.now()

        alert.save()

        serializer = AlertSerializer(alert)

        return Response(
            serializer.data,
            status=status.HTTP_200_OK
        )
    
class ResolveAlertView(APIView):
    permission_classes = [IsHelper]

    @transaction.atomic
    def post(self, request, alert_id):
        try:
            alert = Alert.objects.select_for_update().get(id = alert_id)
        except Alert.DoesNotExist:
            return Response(
                {
                    "message":"Alerte introuvable"
                },
                status=status.HTTP_404_NOT_FOUND
            )
        
        if alert.status != "IN_PROGRESS":
            return  Response(
                {
                    "message":"Alerte ne peut être resolue."
                },
                status=status.HTTP_403_FORBIDDEN
            )
        
        if alert.helper != request.user :
            return  Response(
                {
                    "message":"Vous n'êtes pas autorisé à resoudre cette alerte"
                },
                status=status.HTTP_403_FORBIDDEN
            )

        alert.status = "RESOLVED"
        alert.resolved_at = timezone.now()

        alert.save()

        serializer = AlertSerializer(alert)

        return Response(
            serializer.data,
            status=status.HTTP_200_OK
        )

    
class AcceptAlertView(APIView):
    permission_classes = [IsHelper]

    @transaction.atomic
    def post(self, request, alert_id):
        try:
            alert = Alert.objects.select_for_update().get(id = alert_id)
        except Alert.DoesNotExist:
            return Response(
                {
                    "message":"Alerte introuvable"
                },
                status=status.HTTP_404_NOT_FOUND
            )
        
        if alert.status != "PENDING":
            return  Response(
                {
                    "message":"Alerte existe plus."
                },
                status=status.HTTP_403_FORBIDDEN
            )
        if alert.helper is not None:
            return  Response(
                {
                    "message":"Alerte déjà prise en charge."
                },
                status=status.HTTP_403_FORBIDDEN
            )

        alert.helper = request.user
        alert.status = "IN_PROGRESS"
        alert.accepted_at = timezone.now()

        alert.save()

        serializer = AlertSerializer(alert)

        return Response(
            serializer.data,
            status=status.HTTP_200_OK
        )


class AlertAvailableListView(generics.ListAPIView):

    serializer_class = AlertSerializer
    permission_classes = [IsHelper]

    def get_queryset(self):
        return Alert.objects.filter(
            status = "PENDING",
            helper__isnull = True
        ).order_by("-created_at")


class AlertListCreateView(generics.ListCreateAPIView):

    serializer_class = AlertSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Alert.objects.filter(
            user=self.request.user
        )

    def perform_create(self, serializer):
        serializer.save(
            user=self.request.user
        )


class AlertDetailView(generics.RetrieveAPIView):

    serializer_class = AlertSerializer
    permission_classes = [IsAuthenticated]
    lookup_url_kwarg = "alert_id"

    def get_queryset(self):

        user = self.request.user

        if user.profile.role == "ADMIN":
            return Alert.objects.all()
        
        if user.profile.role == "HELPER":
            return Alert.objects.filter(
                helper= user
            )
        
        return Alert.objects.filter(
            user = self.request.user
        )