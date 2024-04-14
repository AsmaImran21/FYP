from django.db import models

# Create your models here.
class ReportProblem(models.Model):
    CATEGORY_CHOICES = [
        ('c1', 'Performance Problem'),
        ('c2', 'Navigation Issues'),
        ('c3', 'Form and Input Issues'),
        ('c4', 'Security Concerns'),
        ('c5', 'Content-related Issues'),
        ('c6', 'Functionality Issues'),
        ('c7', 'Login and Authentication Issues'),
    ]
    category = models.CharField(max_length=2, choices=CATEGORY_CHOICES)
    PRIORITY_CHOICES = [
        ('high', 'High'),
        ('medium', 'Medium'),
        ('low', 'Low'),
    ]
    priority = models.CharField(max_length=6, choices=PRIORITY_CHOICES)
    description = models.TextField()
