# Generated by Django 5.0.2 on 2024-03-16 08:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=40)),
                ('description', models.TextField()),
                ('language', models.CharField(max_length=100)),
                ('skillname', models.CharField(max_length=100)),
                ('skillpercent', models.IntegerField()),
                ('team_members', models.TextField()),
                ('project_type', models.CharField(choices=[('web', 'Web Development'), ('app', 'App Development'), ('hardware', 'Hardware Development'), ('rnd', 'Research and Development')], max_length=20)),
                ('technology', models.TextField()),
                ('version', models.DecimalField(decimal_places=4, max_digits=10)),
                ('booklet', models.FileField(upload_to='booklet/')),
                ('githuburl', models.URLField()),
                ('video', models.FileField(upload_to='videos/')),
                ('multimedia', models.FileField(upload_to='multimedia/')),
            ],
        ),
    ]