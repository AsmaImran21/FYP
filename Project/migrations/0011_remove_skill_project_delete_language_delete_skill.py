# Generated by Django 5.0.2 on 2024-03-30 04:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Project', '0010_remove_language_proficiency'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='skill',
            name='project',
        ),
        migrations.DeleteModel(
            name='Language',
        ),
        migrations.DeleteModel(
            name='Skill',
        ),
    ]