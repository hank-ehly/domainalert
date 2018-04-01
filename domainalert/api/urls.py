from django.conf.urls import url
from domainalert.api import views

urlpatterns = [
    url(r'^v1/users$', views.UserList.as_view()),
    url(r'^v1/users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view())
]
