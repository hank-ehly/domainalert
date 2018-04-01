from django.db import models


class User(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    email = models.EmailField()

    class Meta:
        ordering = ('created_at',)
        db_table = 'api_users'


class Domain(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=255, unique=True)

    class Meta:
        ordering = ('created_at',)
        db_table = 'api_domains'


class WatchedDomain(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    domain = models.ForeignKey('Domain', on_delete=models.CASCADE)

    class Meta:
        ordering = ('created_at',)
        db_table = 'api_watched_domains'
