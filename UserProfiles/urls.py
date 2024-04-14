# urls.py
from django.urls import path
from .import views

urlpatterns = [
   path("studentpersonalprofile/", views.personalstudentprofile , name='studentpersonalprofile'),
]
