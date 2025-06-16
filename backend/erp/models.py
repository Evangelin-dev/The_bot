import uuid

from django.db import models
from utils.base_model import BaseModel, CompanyBaseModel
from .constants import QUOTATION_STATUS_CHOICES


def items_file_upload_to(instance, filename):
    ext = filename.split('.')[-1]
    return '{}/{}/{}'.format(
        instance._meta.db_table, instance.code, "{}.{}".format(uuid.uuid4().hex, ext)
    )

def items_gallery_file_upload_to(instance, filename):
    ext = filename.split('.')[-1]
    return '{}/{}/{}'.format(
        instance._meta.db_table, instance.item.code, "{}.{}".format(uuid.uuid4().hex, ext)
    )


class ActivityLogs(CompanyBaseModel):
    model = models.CharField(max_length=250)
    model_id = models.CharField(max_length=250)
    message = models.TextField()
    url = models.TextField(null=True, blank=True)

    class Meta:
        db_table = "activity_logs"
        verbose_name_plural = "Activity Logs"


class TaxTemplate(CompanyBaseModel):
    name = models.CharField(max_length=250)
    status = models.BooleanField(default=True)

    class Meta:
        db_table = "tax_template"
        verbose_name_plural = "Tax Template"

    def __str__(self):
        return self.name


class TaxTemplateItems(CompanyBaseModel):
    name = models.CharField(max_length=250)
    tax_template = models.ForeignKey(TaxTemplate, on_delete=models.CASCADE, related_name="tax_templates")
    tax_percentage = models.FloatField(default=0.0)

    class Meta:
        db_table = "tax_template_items"
        verbose_name_plural = "Tax Template Items"

    def __str__(self):
        return "{} {}".format(self.name, self.tax_percentage)


class Items(CompanyBaseModel):
    name = models.CharField(max_length=250)
    code = models.CharField(max_length=250)
    hsn_code = models.CharField(max_length=250, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    image = models.FileField(upload_to=items_file_upload_to, null=True, blank=True)
    tax_template = models.ForeignKey(
        TaxTemplate, related_name="item_tax_template", on_delete=models.CASCADE, null=True, blank=True
    )
    igst_tax_template = models.ForeignKey(
        TaxTemplate, related_name="igst_tax_template", on_delete=models.CASCADE, null=True, blank=True
    )
    price_in_rs = models.FloatField(default=0.0)
    price_in_dollar = models.FloatField(default=0.0)
    meta_data = models.JSONField(default=dict, null=True, blank=True)
    status = models.BooleanField(default=False)

    class Meta:
        db_table = "items"
        verbose_name_plural = "Items"


class ItemImages(CompanyBaseModel):
    item = models.ForeignKey(Items, related_name="item_images", on_delete=models.CASCADE)
    image = models.FileField("Item Image", upload_to=items_gallery_file_upload_to)

    class Meta:
        db_table = "item_images"
        verbose_name_plural = "Item Images"


class Address(CompanyBaseModel):
    name = models.CharField(max_length=250)
    address = models.TextField()
    phone = models.CharField(max_length=20, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    address_type = models.CharField(
        max_length=100, choices=(
            ("Shipping Address", "Shipping Address"), ("Billing Address", "Billing Address"),
            ("Billing & Shipping Address", "Billing & Shipping Address")
        )
    )
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    gst_no = models.CharField(max_length=100, null=True, blank=True)

    class Meta:
        db_table = "address"
        verbose_name_plural = "Address"


class TermsAndConditions(CompanyBaseModel):
    name = models.CharField(max_length=200)
    description = models.TextField()

    class Meta:
        db_table = "terms_and_conditions"
        verbose_name_plural = "Terms And Conditions"


class Customer(CompanyBaseModel):
    name = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    shipping_address = models.ForeignKey(Address, related_name="shipping_address", on_delete=models.CASCADE, null=True,
                                         blank=True)
    billing_address = models.ForeignKey(Address, related_name="billing_address", on_delete=models.CASCADE, null=True,
                                        blank=True)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    website = models.URLField(null=True, blank=True)
    gst_no = models.CharField(max_length=15, null=True, blank=True)
    status = models.BooleanField(default=True)
    currency = models.CharField(max_length=100, choices=(("INR", "INR"), ("DOLLAR", "DOLLAR")), default="INR")

    class Meta:
        db_table = "customer"
        verbose_name_plural = "Customer"


class Quotation(CompanyBaseModel):
    date = models.DateField()
    customer = models.ForeignKey(Customer, related_name="quotation_customer", on_delete=models.CASCADE)
    shipping_address = models.ForeignKey(Address, related_name="quotation_shipping_address", on_delete=models.CASCADE)
    billing_address = models.ForeignKey(Address, related_name="quotation_billing_address", on_delete=models.CASCADE)
    status = models.CharField(max_length=50, choices=QUOTATION_STATUS_CHOICES, default="Draft")
    terms_and_condition = models.ForeignKey(
        TermsAndConditions, related_name="quotation_terms_and_condition", on_delete=models.CASCADE
    )
    bank_details = models.ForeignKey(
        "company.BankDetails", related_name="quotation_bank_details", on_delete=models.CASCADE
    )
    net_amount = models.FloatField(default=0.0)
    discount_percentage = models.FloatField(default=0.0)
    discount_amount = models.FloatField(default=0.0)
    gross_amount = models.FloatField(default=0.0)
    total_amount = models.FloatField(default=0.0)
    tax_amount = models.FloatField(default=0.0)
    tax_data = models.JSONField(default=None)
    approver = models.ForeignKey("user.User", null=True, blank=True, on_delete=models.SET_NULL)
    approved_date = models.DateTimeField(blank=True, null=True)
    quotation_no = models.CharField(null=True, blank=True)
    is_taxable = models.BooleanField(default=True)

    class Meta:
        db_table = "quotation"
        verbose_name_plural = "Quotation"


class QuotationItems(CompanyBaseModel):
    quotation = models.ForeignKey(Quotation, related_name="quotation_item_fk", on_delete=models.CASCADE)
    item = models.ForeignKey(Items, related_name="quotation_item", on_delete=models.CASCADE)
    qty = models.FloatField(default=0.0)
    price_in_rs = models.FloatField(default=0.0)
    price_in_dollar = models.FloatField(default=0.0)
    discount_per = models.FloatField(default=0.0)
    discount_amount = models.FloatField(default=0.0)
    net_amount = models.FloatField(default=0.0)
    gross_amount = models.FloatField(default=0.0)
    tax_amount = models.FloatField(default=0.0)
    tax_data = models.JSONField(default=None)

    class Meta:
        db_table = "quotation_items"
        verbose_name_plural = "Quotation Items"


class Invoice(CompanyBaseModel):
    date = models.DateField()
    invoice_no = models.CharField(null=True, blank=True)
    po_no = models.CharField(max_length=100, null=True, blank=True)
    po_date = models.DateField(null=True, blank=True)
    customer = models.ForeignKey(Customer, related_name="invoice_customer", on_delete=models.CASCADE)
    shipping_address = models.ForeignKey(Address, related_name="invoice_shipping_address", on_delete=models.CASCADE)
    billing_address = models.ForeignKey(Address, related_name="invoice_billing_address", on_delete=models.CASCADE)
    status = models.CharField(max_length=50, choices=QUOTATION_STATUS_CHOICES, default="Draft")
    terms_and_condition = models.ForeignKey(
        TermsAndConditions, related_name="invoice_terms_and_condition", on_delete=models.CASCADE
    )
    bank_details = models.ForeignKey(
        "company.BankDetails", related_name="invoice_bank_details", on_delete=models.CASCADE
    )
    net_amount = models.FloatField(default=0.0)
    total_amount = models.FloatField(default=0.0)
    discount_percentage = models.FloatField(default=0.0)
    discount_amount = models.FloatField(default=0.0)
    gross_amount = models.FloatField(default=0.0)
    tax_amount = models.FloatField(default=0.0)
    tax_data = models.JSONField(default=None)
    approver = models.ForeignKey("user.User", null=True, blank=True, on_delete=models.SET_NULL)
    approved_date = models.DateTimeField(blank=True, null=True)
    is_taxable = models.BooleanField(default=True)

    class Meta:
        db_table = "invoice"
        verbose_name_plural = "Invoice"


class InvoiceItems(CompanyBaseModel):
    invoice = models.ForeignKey(Invoice, related_name="invoice_item_fk", on_delete=models.CASCADE)
    item = models.ForeignKey(Items, related_name="invoice_item", on_delete=models.CASCADE)
    qty = models.FloatField(default=0.0)
    price_in_rs = models.FloatField(default=0.0)
    price_in_dollar = models.FloatField(default=0.0)
    discount_per = models.FloatField(default=0.0)
    discount_amount = models.FloatField(default=0.0)
    net_amount = models.FloatField(default=0.0)
    gross_amount = models.FloatField(default=0.0)
    tax_amount = models.FloatField(default=0.0)
    tax_data = models.JSONField(default=None)

    class Meta:
        db_table = "invoice_items"
        verbose_name_plural = "Invoice Items"


class PaymentCollectionLinks(CompanyBaseModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True, blank=True)
    invoice = models.ForeignKey(Invoice, on_delete=models.SET_NULL, null=True, blank=True)
    amount = models.FloatField(default=0)
    status = models.CharField(
        max_length=100, choices=(
            ("Failed", "Failed"), ("Generated", "Generated"), ("Paid", "Paid"), ("Draft", "Draft")
        )
    )
    currency = models.CharField(max_length=100, choices=(("INR", "INR"), ("DOLLAR", "DOLLAR")), default="INR")
    payload = models.JSONField(null=True, blank=True)
    response = models.JSONField(null=True, blank=True)

    class Meta:
        db_table = "payment_collection_links"
        verbose_name_plural = "Payment Collection Links"
