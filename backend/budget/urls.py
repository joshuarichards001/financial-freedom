from django.urls import include, path
from rest_framework import routers
from .views import TransactionViewSet


router = routers.DefaultRouter()
router.register(r'transactions', TransactionViewSet, basename='Transaction')
urlpatterns = [
    path('', include(router.urls)),
]
