# Generated by Django 5.0.2 on 2024-03-31 04:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Authentication', '0046_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='SignupPmo',
        ),
        migrations.DeleteModel(
            name='SignupStudent',
        ),
    ]
