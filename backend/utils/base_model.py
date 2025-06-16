import base64

from django.db import models
import crypt
from backend.settings import SECRET_KEY


class BaseModel(models.Model):
    created_by = models.ForeignKey("user.User", on_delete=models.CASCADE, related_name="user_created_%(class)ss")
    updated_by = models.ForeignKey(
        "user.User", on_delete=models.CASCADE, related_name="user_updated_%(class)ss", null=True, blank=True
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class CompanyBaseModel(BaseModel):
    company = models.ForeignKey("company.Company", on_delete=models.CASCADE, related_name="company_%(class)ss")
    client = models.ForeignKey("user.Clients", null=True, blank=True, on_delete=models.CASCADE)

    class Meta:
        abstract = True

    @property
    def encrypt(self):
        return base64.b64encode(bytes("{}".format(self.id), "utf-8")).decode('utf-8')
