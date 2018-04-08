from rest_framework import serializers
from domainalert.api.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'created_at', 'fb_user_id')

    def create(self, validated_data):
        return User.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.email = validated_data.get('email', instance.email)
        instance.fb_user_id = validated_data.get('fb_user_id', instance.fb_user_id)
        instance.save()
        return instance
