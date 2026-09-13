
from django.urls import path, include
from alert.views import (

    AlertDetailView, 
    AlertListCreateView, 
    AlertAvailableListView,
    AcceptAlertView,
    ResolveAlertView,
    CancelAlertView,
    AdminAlertListView

    )

urlpatterns = [
    path("", AlertListCreateView.as_view(), name='alert-list'),
    path('available/', AlertAvailableListView.as_view(), name='available'),
    path('<int:alert_id>/', AlertDetailView.as_view(), name='alert-detail'),
    path('<int:alert_id>/accepted/', AcceptAlertView.as_view(), name='alert-accepted'),
    path('<int:alert_id>/resolved/', ResolveAlertView.as_view(), name='alert-resolved'),
    path('<int:alert_id>/cancelled/', CancelAlertView.as_view(), name='alert-cancelled'),
    path('admin/', AdminAlertListView.as_view(), name='admin-alert-list')
]
