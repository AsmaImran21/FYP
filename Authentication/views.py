from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from .models import SignupStudent, SignupPmo, Skill
from django.contrib.auth.decorators import login_required

def user_login(request):       

    if request.method == "POST":
        cnic = request.POST.get('cnic')
        password = request.POST.get('password')
        role = request.POST.get('role')

        user = authenticate(request, cnic=cnic, password=password, role=role)
        session_data = request.session  # Access session data
        print(session_data)
     
        if user is None:
            context = {"error":"Invalid cnic or password."}
            return render(request, "Authentication/templates/login.html", context)

   
        login(request, user)  # Log in the user
        if role == "Student":

        #     # Assuming you have access to the student object
        #     student = SignupStudent.objects.get(cnic=cnic)  # Replace with your actual query
        #     request.session['student_id'] = student.id
        #     request.session['cnic'] = student.cnic
        #     request.session['password'] = student.password
        #     print(request.user.id)
        #     print(request.user.cnic)
        #     print(request.user.password)


        #     print('Cnic is: ', request.session.get('cnic'))
        #     print('password: ', request.session.get('password'))
             return redirect('homestudent')
        else:
           return redirect('homepmo')

    return render(request, "Authentication/templates/login.html")
@login_required
def user_logout(request):
    logout(request)  # Logout the user
    return redirect('homeUnReg')  # Redirect to an appropriate page after logout

def signupadminpmo(request):
    if request.method == "POST":
        profilepic = request.FILES.get('profile-input')
        firstname = request.POST.get('firstname')
        lastname = request.POST.get('lastname')
        email = request.POST.get('email')
        qualification = request.POST.get('qualification')
        description = request.POST.get('description')
        cnic = request.POST.get('cnic')
        country = request.POST.get('country')
        password = request.POST.get('password')
        confirmpassword = request.POST.get('confirmpassword')
        contactnumber = request.POST.get('contactnumber')
        gender = request.POST.get('gender')

        # Other signup logic...
        # Create the user with the generated username
        pmo = SignupPmo(
            profilepic=profilepic,
            first_name=firstname,
            last_name=lastname,
            email=email, 
            qualification=qualification,
            cnic=cnic,
            country=country,
            description=description,
            password=password,
            confirm_password=confirmpassword,
            contactnumber=contactnumber,
            gender=gender)
        # Save the user and other related data
        pmo.save()
        return render(request, "login.html")
    else: 
        return render(request, "Authentication/templates/signup-adminpmo.html")

def signupstudent(request):
    if request.method == "POST":
        profilepic = request.FILES.get('profile-input')
        firstname = request.POST.get('firstname')
        lastname = request.POST.get('lastname')
        email = request.POST.get('email')
        description=request.POST.get('description')
        institutename = request.POST.get('institutename')
        password = request.POST.get('password')
        cnic = request.POST.get('cnic')
        country = request.POST.get('country')
        qualification = request.POST.get('qualification')
        cgpa = request.POST.get('cgpa')
        contactnumber = request.POST.get('contactnumber')
        gender = request.POST.get('gender')
        student = SignupStudent(
            profilepic=profilepic,
            firstname=firstname,
            lastname=lastname,
            email=email,
            description=description,
            qualification=qualification,
            institutename=institutename,
            cnic=cnic,
            country=country,
            password=password,
            cgpa=cgpa,
            contactnumber=contactnumber,
            gender=gender, 
            )
        student.save()
        # Save the user and other related data
        #Handling skills
        skill_names = request.POST.getlist('skill[]')
        percentages = request.POST.getlist('percentage[]')
        for skill_name, percentage in zip(skill_names, percentages):
            print("Name",skill_name)
            print("Versions",percentage)

            
            if skill_name and percentage:  # Ensure neither field is empty
                Skill.objects.create(name=skill_name, percentage=percentage, student=student)
        return render(request, "login.html")
    else:
        return render(request, "Authentication/templates/signup-student.html")

def pmologout(request):
    return render(request,"Pmologout.html")

def studentlogout(request):
    return render(request,"Studentlogout.html")