from django.urls import path
from .import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('signup-adminpmo/', views.signupadminpmo, name='signup-adminpmo'),
    path('signup-student/',views.signupstudent),
    path('login/',views.user_login, name='login'),
    path('studentlogout/',views.studentlogout,name="studentlogout"),
    path('pmologout/',views.pmologout,name="pmologout"),
    path('logout/',views.user_logout,name="logout"),

    path('password_reset/', auth_views.PasswordResetView.as_view(template_name='password_reset.html'), name='password_reset'),
    path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(template_name='password_reset_done.html'), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name='password_reset_confirm'), name='password_reset_confirm'),
    path('reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='password_reset_complete.html'), name='password_reset_complete'),





]