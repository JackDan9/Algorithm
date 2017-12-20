# _*_ charset:utf-8 _*_

from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index, name='index'),
]