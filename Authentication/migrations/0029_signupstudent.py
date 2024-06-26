# Generated by Django 5.0.2 on 2024-03-04 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Authentication', '0028_delete_signupstudent'),
    ]

    operations = [
        migrations.CreateModel(
            name='SignupStudent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=254)),
                ('institutename', models.CharField(max_length=40)),
                ('password', models.CharField(max_length=20)),
                ('cnic', models.CharField(max_length=13, unique=True)),
                ('country', models.CharField(max_length=30)),
                ('qualification', models.CharField(max_length=50)),
                ('cgpa', models.DecimalField(decimal_places=2, max_digits=4)),
                ('resultcard', models.FileField(upload_to='media/result-card')),
                ('gender', models.CharField(choices=[('male', 'Male'), ('female', 'Female'), ('other', 'Other')], max_length=10)),
            ],
        ),
    ]
