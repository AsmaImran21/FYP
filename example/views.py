#from django.contrib.auth import authenticate, login, logout
#from django.contrib.auth.forms import AuthenticationForm
#from django.shortcuts import render, redirect
#from django.urls import reverse
##from django.contrib import messages
#from django.views.decorators.csrf import csrf_exempt
#from example.forms import LoginForm
#from .models import CustomUser
from django.shortcuts import render
#@csrf_exempt

# views.py

from django.shortcuts import render, redirect


def signup(request):    
    return render(request, 'example/templates/signupform.html')

def login(request):
    return render(request, 'example/templates/login.html')

def studentdashboard(request):
     return render(request, 'example/templates/studentdashboard.html')

def pmodashboard(request):
     return render(request, 'example/templates/pmodashboard.html')