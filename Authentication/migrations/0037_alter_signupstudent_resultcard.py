# Generated by Django 5.0.2 on 2024-03-05 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Authentication', '0036_alter_signupstudent_resultcard'),
    ]

    operations = [
        migrations.AlterField(
            model_name='signupstudent',
            name='resultcard',
            field=models.FileField(upload_to='media\result-card'),
        ),
    ]
