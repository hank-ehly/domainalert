# Generated by Django 2.0.3 on 2018-04-01 07:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='WatchedDomain',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ('created_at',),
            },
        ),
        migrations.AlterField(
            model_name='domain',
            name='name',
            field=models.CharField(max_length=255, unique=True),
        ),
        migrations.AddField(
            model_name='watcheddomain',
            name='domain',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Domain'),
        ),
        migrations.AddField(
            model_name='watcheddomain',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.User'),
        ),
    ]