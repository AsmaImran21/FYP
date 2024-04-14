# Generated by Django 5.0.2 on 2024-03-05 14:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Authentication', '0032_delete_signupstudent'),
    ]

    operations = [
        migrations.CreateModel(
            name='SignupStudent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=254)),
                ('institute_name', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=20)),
                ('cnic', models.CharField(max_length=14)),
                ('country', models.CharField(max_length=20)),
                ('qualification', models.CharField(max_length=20)),
                ('cgpa', models.FloatField()),
                ('result_card', models.FileField(upload_to='result_cards/')),
                ('gender', models.CharField(choices=[('male', 'Male'), ('female', 'Female'), ('other', 'Other')], max_length=10)),
            ],
        ),
    ]