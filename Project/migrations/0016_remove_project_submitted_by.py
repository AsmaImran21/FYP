# Generated by Django 5.0.2 on 2024-04-01 10:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Project', '0015_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='submitted_by',
        ),
    ]