# models.py
from django.db import models



class SignupPmo(models.Model):
    profilepic = models.FileField(upload_to='profile-pic-pmo/')
    first_name = models.CharField(max_length = 30) 
    last_name = models.CharField(max_length = 30) 
    email = models.EmailField()
    description = models.TextField()
    qualification = models.CharField(max_length = 50)
    cnic = models.CharField(max_length=13, unique=True)
    country = models.CharField(max_length = 30)
    password = models.CharField(max_length=100)
    confirm_password = models.CharField(max_length=20)
    contactnumber = models.CharField(max_length=15)
    gender_choices = [
        ('male','Male'),
        ('female','Female'),
        ('other' , 'Other')
    ]
    gender = models.CharField(max_length=10 , choices = gender_choices)
    joined_date = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(blank=True, null=True)

class SignupStudent(models.Model):
    profilepic = models.FileField(upload_to='profile-pic-student/')
    firstname = models.CharField(max_length = 30) 
    lastname = models.CharField(max_length = 30) 
    email = models.EmailField()
    description = models.TextField()
    institutename = models.CharField(max_length=40)
    password = models.CharField(max_length=100)
    cnic = models.CharField(max_length=13, unique=True)
    country = models.CharField(max_length = 30)
    qualification = models.CharField(max_length = 50)
    cgpa = models.DecimalField(max_digits=4 , decimal_places=2)
    contactnumber = models.CharField(max_length=15)
    gender_choices = [
        ('male','Male'),
        ('female','Female'),
        ('other' , 'Other')
    ]
    gender = models.CharField(max_length=10 , choices = gender_choices)
    joined_date = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(blank=True, null=True)

class Skill(models.Model):
    student = models.ForeignKey(SignupStudent, related_name='skills', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    percentage = models.CharField(max_length=50)

