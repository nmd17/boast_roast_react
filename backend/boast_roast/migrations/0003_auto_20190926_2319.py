# Generated by Django 2.2.5 on 2019-09-26 23:19

import boast_roast.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boast_roast', '0002_post_magic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='magic',
            field=models.CharField(default=boast_roast.models.magicWord, editable=False, max_length=6),
        ),
    ]