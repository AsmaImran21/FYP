from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    cnic = models.CharField(max_length=15)
    role = models.CharField(max_length=20)  # Assuming role can be 'Student' or 'PMO'
#If you want to include additional fields from your login.html form,
# such as password, you don't need to include it in the model because 
#Django's built-in authentication system (AbstractUser) already provides
# a password field.