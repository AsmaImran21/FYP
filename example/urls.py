from django.urls import path
from example import views
# from django.conf.urls import url

urlpatterns = [
    path('signuppage/',views.signup, name='signuppage'),
    path('studentdashboard/', views.studentdashboard, name='studentdashboard'),
    path('pmodashboard/', views.pmodashboard, name='pmodashboard'),
    #path('admin/', admin.site.urls),
    #path('signup/', views.signup, name='signup'),
    path('loginpage/', views.login, name='loginpage'),
    #path('logout/', views.logout_request, name='logout'),
    #path('', include('django.contrib.auth.urls')),
]