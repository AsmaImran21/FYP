# Generated by Django 5.0.2 on 2024-02-29 04:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Authentication', '0011_signuppmo_cnic_signupstudent_cnic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='signuppmo',
            name='cnic',
            field=models.CharField(max_length=13),
        ),
        migrations.AlterField(
            model_name='signuppmo',
            name='country',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='signupstudent',
            name='cnic',
            field=models.CharField(max_length=13),
        ),
        migrations.AlterField(
            model_name='signupstudent',
            name='country',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='signupstudent',
            name='qualification',
            field=models.CharField(max_length=50),
        ),
    ]
