from rest_framework.permissions import BasePermission


class IsHelper(BasePermission):

    def has_permission(self, request, view):
        return (
            request.user.is_authenticated
            and request.user.profile.role == "HELPER"
        )


class IsAdmin(BasePermission):

    def has_permission(self, request, view):
        return (
            request.user.is_authenticated
            and request.user.profile.role == "ADMIN"
        )


class IsVictim(BasePermission):

    def has_permission(self, request, view):
        return (
            request.user.is_authenticated
            and request.user.profile.role == "VICTIM"
        )