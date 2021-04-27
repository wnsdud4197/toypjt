from django.urls import path
from . import views

app_name = 'choice'
urlpatterns = [
    path('', views.index, name='index'),
    path('startproject', views.startproject, name='startproject'),
]
