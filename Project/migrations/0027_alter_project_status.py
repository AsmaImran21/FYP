# Generated by Django 5.0.2 on 2024-04-14 07:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Project', '0026_alter_project_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='status',
            field=models.SmallIntegerField(default=0),
        ),
    ]