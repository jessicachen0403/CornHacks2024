from django.db import models
from django.contrib.auth.models import User

class ToDoItem(models.Model):
    class Meta:
        app_label = 'studyBuddy'

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    completed = models.BooleanField(default=False)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.title