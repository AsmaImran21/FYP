from django.shortcuts import render, redirect
from .models import Event

# Function to handle the upload event form submission
def uploadevent(request):
    if request.method == "POST":
        title = request.POST.get('title')
        description = request.POST.get('description')
        date = request.POST.get('date')
        time = request.POST.get('time')
        location = request.POST.get('location')
        url = request.POST.get('url')
        image = request.FILES.get('image') 
        print(title, description, date, time, location, url, image)
        
        # Creating a new Event object with the submitted details
        data = Event(
            title=title,
            description=description,
            date=date,
            time=time,
            location=location,
            url=url,
            image=image,
        )
        data.save()
        print('Data has been written to the database')
        # Redirect to a new URL after posting data:
        return redirect('events')  # Make sure you have a URL named 'events' in your urls.py
        
    # If not POST, render the form page
    return render(request, "Events/templates/upload-eventform.html")

def get_events():
    return Event.objects.all()

# Function to display the events on the events page for unregistered users
def eventview_unregistered(request):
    events = get_events()
    context = {'events': events}
    return render(request, "eventviewunregistered.html", context)

# Function to display the events on the events page for registered users
def eventview_student(request):
    events = get_events()
    context = {'events': events}
    return render(request, "eventviewstudent.html", context)

def eventview_pmo(request):
    events = get_events()
    context = {'events': events}
    return render(request,"eventviewpmo.html", context)