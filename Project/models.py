from django.db import models
from django.conf import settings

class Notification(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    message = models.CharField(max_length=255)
    project_id = models.IntegerField()  # Assuming this refers to a Project model id
    viewed = models.BooleanField(default=False)

    def __str__(self):
        return self.message

class Project(models.Model):
    title = models.CharField(max_length=40)
    description = models.TextField()
    PROJECT_TYPES = [
        ('web', 'Web Development'),
        ('app', 'App Development'),
        ('hardware', 'Hardware Development'),
        ('rnd', 'Research and Development'),
    ]
    project_type = models.CharField(max_length=20, choices=PROJECT_TYPES)
    team_members = models.TextField()
    resultcard = models.FileField(upload_to='resultcard/')
    booklet = models.FileField(upload_to='booklet/')
    githuburl = models.URLField()
    video = models.FileField(upload_to='videos/')
    upload_date = models.DateTimeField(auto_now_add=True)
    status=models.SmallIntegerField(default=0)
    visiblity=models.SmallIntegerField(default=1) #UNHIDE

class Language(models.Model): 
    project = models.ForeignKey(Project, related_name='languages', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)

class Skill(models.Model):
    project = models.ForeignKey(Project, related_name='skills', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    percentage = models.CharField(max_length=50)

class Technology(models.Model):
    project = models.ForeignKey(Project, related_name='technologies', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    version = models.CharField(max_length=50)

class Multimedia(models.Model):
    project = models.ForeignKey(Project, related_name='multimedia_files', on_delete=models.CASCADE)
    file = models.FileField(upload_to='multimedia/')