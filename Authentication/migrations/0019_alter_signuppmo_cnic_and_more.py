# Generated by Django 5.0.2 on 2024-02-29 14:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Authentication', '0018_signuppmo_cnic_signupstudent_cnic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='signuppmo',
            name='cnic',
            field=models.CharField(max_length=13, unique=True),
        ),
        migrations.AlterField(
            model_name='signuppmo',
            name='confirm_password',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='signuppmo',
            name='password',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='signupstudent',
            name='cgpa',
            field=models.DecimalField(decimal_places=2, max_digits=4),
        ),
        migrations.AlterField(
            model_name='signupstudent',
            name='cnic',
            field=models.CharField(max_length=13, unique=True),
        ),
        migrations.AlterField(
            model_name='signupstudent',
            name='confirm_password',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='signupstudent',
            name='password',
            field=models.CharField(max_length=20),
        ),
    ]