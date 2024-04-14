"""
URL configuration for FYP project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from FYP import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.homePageUnreg),
    path('Authentication/',include('Authentication.urls')),
    path('Events/',include('Events.urls')),
    path('Problem/',include('Problem.urls')),
    path('Project/',include('Project.urls')),
    path('example/',include('example.urls')),

    path('homePageUnreg/', views.homePageUnreg, name="homeUnReg"),
    path('aboutUs/',views.aboutUs),
    path('aboutUsAdmin/',views.aboutusadmin),
    path('event/',views.event),
    path('app-categories/',views.appcategories),
   
   
    path('rnd-categories/',views.rndcategories),
    path('hardware-categories/',views.hardwarecategories),
   # path('projects/',views.projects),
    path('projectView/',views.projectview),
    path('login/',views.login),
    path('homeStudent/',views.homestudent,name="homestudent"),
  
    #path('uploadProject/',views.uploadproject),
    #path('uploadProjectContinue/',views.uploadproject2),
    #path('projectViewReg/',views.projectviewregistered),
    path('aboutUsReg/',views.aboutusreg),
    path('reportProblem/',views.reportproblemform),
    path('homePmo/',views.homepmo,name="homepmo"),
    path('changePassword1/',views.changepassword1),
    path('changePassword2/',views.changepassword2),
    path('changePassword3/',views.changepassword3),
    path('homeAdmin/',views.homeadmin),
    path('requestedProjectsList/',views.requestedprojectslist),
    path('problemsList/',views.problemslist),
    path('problemView/',views.problemview),
   
    path('adminProjectView/',views.adminprojectview),
    path('reportSubmit/',views.reportsubmit),
    path('hiddenProjectsList/',views.hiddenprojectlist),
  
    path('appCategoryUnreg/',views.appcategoriesunreg),
    path('rndCategoryUnreg/',views.rndunregis),
    path('hardwareCategoryUnreg/',views.hardwarecategoriesunreg),
   
    path('appCategoryPmo/',views.appcategoriespmo),
    path('userProfileUnreg/',views.userprofileunreg),
    path('userProfilePmo/',views.userprofilepmo),
    path('userProfileStudent/',views.userprofilestudent),
    path('userProfileAdmin/',views.userprofileadmin),
    path('userProfile/',views.userprofile),
    path('userHisprofilepmo/', views.userhisprofilepmo),
    path('eventReg/',views.eventreg),
    path('projectsReg/',views.projectsreg),

    path('webCategoryUnreg/',views.webcategoryunreg),
    path('webCategoryPmo/',views.webcategorypmo),
    path('webCategoryAdmin/',views.webcategoryadmin),
     path('web-category/',views.webcategory),

     #logout
     path('logoutStudent/',views.logoutstudent),
     path('logoutAdmin/',views.logoutadmin),
     path('logoutPmo/',views.logoutpmo),



     path('adminprojectView/',views.adminprojectview),
     #signup
     path('adminPmoSignup/',views.adminpmosignupform),
     path('studentSignup/',views.studentsignupform),


     #adduser
     path('addUser/',views.adduser),
     path('addUserPmo/',views.adduserpmo),
     path('addUserStd/',views.adduserStd),




     #admin user list
     path('adminUserList/',views.adminuserlist),
     path('appCategoriesPmo/', views.appcategoriespmo),
     path('randdCategoriesPmo/', views.randdcategoriespmo),
     path('hardwareCategoriesPmo/', views.hardwarecategoriespmo),

     path('eventPmo/', views.eventPmo),
     path('aboutUsPmo/', views.aboutUsPmo, name='PMOABOUT'),
     path('userProfilePmo/', views.userprofilepmo),
     path('projectsRegPmo/', views.projectsregPmo),
     path('pmoProjectView/',views.pmoprojectview),
    
     path('menubar/',views.menubar),
    
]

if settings.DEBUG:
    urlpatterns+=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
   