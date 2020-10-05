from django.db import models
from django.contrib.auth.models import User

class Transaction(models.Model):
  income = models.BooleanField()
  date = models.CharField(max_length=10)
  amount = models.DecimalField(decimal_places=2, max_digits=20)
  category = models.CharField(max_length=60)
  owner = models.ForeignKey(User, related_name="transactions", on_delete=models.CASCADE, null=True)

  def __str__(self):
    return self.category
