from django.db import models


class User(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    email = models.EmailField()


class Domain(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=255)

    class Meta:
        ordering = ('created_at',)
