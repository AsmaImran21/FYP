# Generated by Django 5.0.2 on 2024-03-04 06:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Authentication', '0023_alter_signupstudent_result_card'),
    ]

    operations = [
        migrations.AlterField(
            model_name='signupstudent',
            name='result_card',
            field=models.FileField(default=None, max_length=250, upload_to='FYP/media/result-card/'),
        ),
    ]