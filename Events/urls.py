from django.urls import path
from . import views

urlpatterns =[
    path('upload-event/',views.uploadevent, name='upload-event'),
    path('event-unregistered/',views.eventview_unregistered),
    path('event-student/',views.eventview_student),
    path('event-pmo/',views.eventview_pmo),

]