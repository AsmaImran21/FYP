from django.urls import path
from .import views

urlpatterns = [
    #path("report-problem-form/",views.reportproblemform),
    #path("report-submit/",views.reportsubmit, name="report-submit"),
    #path("problems-list/",views.problemlist),
    path("problem-view/",views.problemview),
]