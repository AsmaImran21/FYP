from django.shortcuts import render, redirect
from .models import ReportProblem

def reportproblemform(request):
    if request.method == "POST":
        category = request.POST.get('category')
        priority = request.POST.get('priority')
        description = request.POST.get('description')
        print(category, priority, description)
        data = ReportProblem(
            category=category,
            priority=priority,
            description=description
        )
        data.save()
        print('Data has been written to the database')
        return redirect('report-submit')  # Redirect to a success page
    return render(request, "reportproblem-form.html")

def reportsubmit(request):
    return render(request, "reportsubmit.html")

def problemlist(request):
    return render(request,"problems-list.html")

def problemview(request):
    return render(request,"problem-view.html")