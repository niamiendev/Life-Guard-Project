from django.urls import path, include
from users.views import (
        PromoteToHelperView, UserListView, DemoteToVictimView, UserDetailView
    )


urlpatterns = [
    path('', UserListView.as_view(), name ="user-list"),
    path("<int:user_id>/", UserDetailView.as_view(),name="user-detail"),
    path('<int:user_id>/promote-helper/', PromoteToHelperView.as_view(), name = 'promote-helper'),
    path('<int:user_id>/demote-victim/', DemoteToVictimView.as_view(), name = 'demote-victim')
]
