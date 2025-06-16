import uuid
from django.db import models
from utils.base_model import BaseModel, CompanyBaseModel


def company_logo_upload_to(instance, filename):
    ext = filename.split('.')[-1]
    return '{}/{}'.format(
        instance._meta.db_table, "{}.{}".format(uuid.uuid4().hex, ext)
    )


class Company(BaseModel):
    name = models.CharField(max_length=200)
    short_name = models.CharField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    logo = models.FileField(upload_to=company_logo_upload_to)
    address = models.TextField()
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    website = models.URLField(null=True, blank=True)
    gst_no = models.CharField(max_length=15)
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    client = models.ForeignKey("user.Clients", null=True, blank=True, on_delete=models.CASCADE)

    class Meta:
        db_table = "company"
        verbose_name_plural = "Company"

    def __str__(self):
        return self.name


class BankDetails(CompanyBaseModel):
    bank_name = models.CharField(max_length=250)
    account_number = models.CharField(max_length=100)
    account_name = models.CharField(max_length=250, null=True, blank=True)
    ifsc = models.CharField(max_length=100)
    swift_code = models.CharField(max_length=100, null=True, blank=True)
    branch = models.CharField(max_length=250)
    address = models.TextField()

    class Meta:
        db_table = "bank_details"
        verbose_name_plural = "Bank Details"
