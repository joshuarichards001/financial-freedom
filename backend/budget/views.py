from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import TransactionSerializer
from .models import Transaction

class TransactionViewSet(viewsets.ModelViewSet):
  queryset = Transaction.objects.all()
  serializer_class = TransactionSerializer
  permission_classes = [permissions.IsAuthenticated]

  def get_queryset(self):
      queryset = Transaction.objects.filter(owner=self.request.user)
      return queryset

  def perform_create(self, serializer):  # added
        serializer.save(owner=self.request.user)
