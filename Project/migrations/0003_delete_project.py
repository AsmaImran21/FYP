# Generated by Django 5.0.2 on 2024-03-25 00:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Project', '0002_skill_technology_remove_project_skillname_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Project',
        ),
    ]