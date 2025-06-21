from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50,unique=True)
    message = models.CharField(max_length=255)

    def __str__(self):
        return f'Name: {self.name}  -  Email: {self.email}'