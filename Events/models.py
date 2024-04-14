from django.db import models

# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length = 30)
    description = models.TextField()
    date  = models.DateField()
    time = models.TimeField()
    location = models.CharField(max_length = 30)
    url = models.CharField(max_length = 200)
    image =models.FileField(upload_to='events-images/') 
