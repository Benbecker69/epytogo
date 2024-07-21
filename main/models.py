from django.db import models

class SiteTouristique(models.Model):
    nom = models.CharField(max_length=200)
    description = models.TextField()
    adresse = models.CharField(max_length=300)
    latitude = models.FloatField()
    longitude = models.FloatField()
    type = models.CharField(max_length=100)  # Ex : Restaurant, Monument, etc.

    def __str__(self):
        return self.nom
