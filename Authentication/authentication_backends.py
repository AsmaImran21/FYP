from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.base_user import AbstractBaseUser
from .models import SignupStudent, SignupPmo

class CustomBackend(ModelBackend):
    def authenticate(self, request, cnic=None, password=None, role=None):
        if role == 'Student':
            user = SignupStudent.objects.filter(cnic=cnic).first()
        elif role == 'PMO':
            user = SignupPmo.objects.filter(cnic=cnic).first()
        if user and user.password == password:
            user.backend = 'django.contrib.auth.backends.ModelBackend'  # Set backend attribute
            return user
        return None
    #def get_user(self, user_id):
        #try:
           #user_std = SignupStudent.objects.get(pk=user_id)
           #return user_std
        #except SignupStudent.DoesNotExist:
            #try:
               #user_pmo = SignupPmo.objects.get(pk=user_id)
               #return user_pmo
            #except SignupPmo.DoesNotExist:
               #return None