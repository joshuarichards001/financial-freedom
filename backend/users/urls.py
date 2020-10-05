from django.urls import path, include
from users.views import GoogleLogin

urlpatterns = [
    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),
    path('', include('allauth.urls')),
    path('google/', GoogleLogin.as_view(), name='google_login'),
    path('', include('dj_rest_auth.urls'))
]
