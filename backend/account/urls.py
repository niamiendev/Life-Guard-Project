from django.urls import path
from account.views import (
    profile_list, 
    register, 
    login, logout,
    me, 
    my_profile, refresh_token
            )

urlpatterns = [
    path('profiles/', profile_list),
    path('register/', register),
    path('login/', login),
    path('me/', me),
    path('profile/', my_profile),
    path('refresh/', refresh_token),
    path('logout/', logout)
]
