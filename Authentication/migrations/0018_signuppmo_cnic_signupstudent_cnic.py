# Generated by Django 5.0.2 on 2024-02-29 08:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Authentication', '0017_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='signuppmo',
            name='cnic',
            field=models.CharField(default='1234567890123', max_length=13, unique=True),
        ),
        migrations.AddField(
            model_name='signupstudent',
            name='cnic',
            field=models.CharField(default='1234567890123', max_length=13, unique=True),
        ),
    ]
