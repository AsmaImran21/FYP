from django.shortcuts import render, redirect, get_object_or_404
from .models import Project, Language, Skill, Technology, Multimedia
from django.contrib.auth import authenticate
from Authentication.authentication_backends import CustomBackend
from django.views.decorators.clickjacking import xframe_options_exempt
from django.contrib.auth.decorators import login_required
from django.contrib import messages 



def requestedprojectlist(request):
    projects = Project.objects.all()  # Fetch all projects from the database
    return render(request, 'requested-projectslist.html', {'projects': projects})

def requestedproject_accepted(request, project_id):
    projects = Project.objects.get( id = project_id )
    projects.status = 1
    projects.save()
    return redirect('requestedproject')

def requestedproject_rejected(request, project_id):
    projects = Project.objects.get( id = project_id )
    projects.status = 2
    projects.save()
    return redirect('requestedproject')

def upload_projectform(request):
 #if 'session_key' in request.session:
    #session_continuing = "ssss"
 #else:
    #session_continuing = "sddss"
 #print("sesssion is :", session_continuing)

    if request.method == 'POST':
            title = request.POST.get('title')
            description = request.POST.get('description')
            project_type = request.POST.get('project_type')
            team_members = request.POST.get('team_members') 
            githuburl = request.POST.get('githuburl')
            resultcard = request.FILES.get('resultcard', None)
            booklet = request.FILES.get('booklet', None)
            video = request.FILES.get('video', None)
            
            project = Project.objects.create(
                title=title,
                description=description,
                project_type=project_type,
                team_members=team_members,
                githuburl=githuburl,
                resultcard=resultcard,
                booklet=booklet,
                video=video,
            )
            
            # Handling languages
            languages = request.POST.getlist('languages', [])
            for language_name in languages:
                if language_name:  # Ensure the language name is not empty
                    Language.objects.create(name=language_name, project=project)
            
            # Handling skills
            skill_names = request.POST.getlist('skill[]')
            percentages = request.POST.getlist('percentage[]')
            for skill_name, percentage in zip(skill_names, percentages):
                if skill_name and percentage:  # Ensure neither field is empty
                    Skill.objects.create(name=skill_name, percentage=percentage, project=project)
            
            # Handling technologies
            tech_names = request.POST.getlist('technology[]')
            versions = request.POST.getlist('version[]')
            for tech_name, version in zip(tech_names, versions):
                if tech_name and version:  # Ensure neither field is empty
                    Technology.objects.create(name=tech_name, version=version, project=project)

            # Handling multimedia
            multimedia_files = request.FILES.getlist('multimedia')
            for file in multimedia_files:
                Multimedia.objects.create(file=file, project=project)
            
            messages.success(request, "A new project has been uploaded successfully!")

            # Redirecting to the project view page
            return redirect('projectview', project_id=project.pk)
        # If not POST request, render the project upload form
    return render(request, "project-uploadform.html")

@xframe_options_exempt
def projectview(request, project_id):
    project = get_object_or_404(Project, pk=project_id)
    booklet_url = request.build_absolute_uri(project.booklet.url) if project.booklet else ""
    multimedia_files = []
    for file in project.multimedia_files.all():
        file_type = 'unknown'
        if str(file.file.url).lower().endswith(('.png', '.jpg', '.jpeg')):
            file_type = 'image'
        elif str(file.file.url).lower().endswith('.pdf'):
            file_type = 'pdf'
        # Add more conditions as needed for other file types
        multimedia_files.append({
            'file': file,
            'type': file_type,
        })

    context = {
        'project': project,
        'booklet_url': booklet_url,
        'skills': project.skills.all(),
        'languages': project.languages.all(),
        'technologies': project.technologies.all(),
        'multimedia_files': multimedia_files,
    }
  
    return render(request, "projectviewstudent.html", context)


@xframe_options_exempt
def requested_projectview(request, project_id):
    project = get_object_or_404(Project, pk=project_id)
    booklet_url = request.build_absolute_uri(project.booklet.url) if project.booklet else ""
    multimedia_files = []
    for file in project.multimedia_files.all():
        file_type = 'unknown'
        if str(file.file.url).lower().endswith(('.png', '.jpg', '.jpeg')):
            file_type = 'image'
        elif str(file.file.url).lower().endswith('.pdf'):
            file_type = 'pdf'
        # Add more conditions as needed for other file types
        multimedia_files.append({
            'file': file,
            'type': file_type,
        })

    context = {
        'project': project,
        'booklet_url': booklet_url,
        'skills': project.skills.all(),
        'languages': project.languages.all(),
        'technologies': project.technologies.all(),
        'multimedia_files': multimedia_files,
    }
  
    return render(request, "requestedprojectview.html", context)

