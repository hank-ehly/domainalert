# Generated by Django 2.0.3 on 2018-04-01 07:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20180401_0704'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='domain',
            table='api_domains',
        ),
        migrations.AlterModelTable(
            name='user',
            table='api_users',
        ),
        migrations.AlterModelTable(
            name='watcheddomain',
            table='api_watched_domains',
        ),
    ]
