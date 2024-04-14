# Generated by Django 5.0.2 on 2024-04-13 11:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Project', '0020_notification'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='multimedia',
            name='project',
        ),
        migrations.RemoveField(
            model_name='skill',
            name='project',
        ),
        migrations.RemoveField(
            model_name='technology',
            name='project',
        ),
        migrations.DeleteModel(
            name='Language',
        ),
        migrations.DeleteModel(
            name='Multimedia',
        ),
        migrations.DeleteModel(
            name='Skill',
        ),
        migrations.DeleteModel(
            name='Project',
        ),
        migrations.DeleteModel(
            name='Technology',
        ),
    ]
