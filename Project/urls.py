# urls.py
from django.urls import path
from .import views

urlpatterns = [
  path("upload-projectform/", views.upload_projectform, name='upload_project'),
  path("project-view/<int:project_id>/", views.projectview, name='projectview'), 
  path("requestedprojectview/<int:project_id>/", views.requested_projectview, name='requestedprojectview'), # Updated line
  
  path("requested-projects/", views.requestedprojectlist, name='requestedproject'),
  path("requested-projects/accepted/<int:project_id>/", views.requestedproject_accepted, name='requestedproject_accepted'),
  path("requested-projects/rejected/<int:project_id>/", views.requestedproject_rejected, name='requestedproject_rejected'),
  #path('projects/visibility/', views.project_visibility, name='project_visibility_list'),
  #path('projects/hide/<int:project_id>/', views.project_visibility_hide, name='project_visibility_hide'),
  #path('projects/unhide/<int:project_id>/', views.project_visibility_unhide, name='project_visibility_unhide'),
  #path("projectvisiblity-list", views.project_visibility, name='projectvisiblitylist'),
  #path("projectvisiblity-list/hide/<int:project_id>/", views.project_visibility_hide, name='projectvisiblityhide'),
  #path("projectvisiblity-list/unhide/<int:project_id>/", views.project_visibility_unhide, name='projectvisiblityunhide'),
]
