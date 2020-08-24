from django.db import models

class Transaction(models.Model):
  income = models.BooleanField()
  amount = models.DecimalField(decimal_places=2, max_digits=20)
  category = models.CharField(max_length=60)

  def __str__(self):
    return self.category
