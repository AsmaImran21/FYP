from django.contrib import admin
from .models import Project,Language,Skill,Technology,Multimedia

# Register your models here.
admin.site.register(Project)
admin.site.register(Language)
admin.site.register(Skill)
admin.site.register(Technology)
admin.site.register(Multimedia)
