import uuid
from django.db import models
from django.db.models.signals import pre_delete
from django.dispatch import receiver
from .constants import INTERESTED_IN_CHOICES, LEAD_STATUS_CHOICES, EMAIL_STATUS_CHOICES


def blog_image_upload_path(instance, filename):
    return '{2}/{0}/{1}'.format(instance.slug, filename, instance._meta.db_table)


def email_attachment_upload_path(instance, filename):
    ext = filename.split('.')[-1]
    return '{}/{}/{}'.format(
        instance._meta.db_table, instance.email.id, "{}.{}".format(uuid.uuid4().hex, ext)
    )


def leads_upload_path(instance, filename):
    ext = filename.split('.')[-1]
    return '{}/{}/{}'.format(
        instance._meta.db_table, instance.id, "{}.{}".format(uuid.uuid4().hex, ext)
    )

def upload_email_template_logo(instance, filename):
    ext = filename.split('.')[-1]
    return '{}/{}/{}'.format(
        instance._meta.db_table, instance.id, "{}.{}".format(uuid.uuid4().hex, ext)
    )


class Leads(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    email = models.EmailField("Leads Email")
    phone = models.CharField("Leads Phone Number", max_length=20, null=True, blank=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    note = models.TextField(null=True, blank=True)
    source = models.TextField(default='', null=True, blank=True)
    location = models.TextField(default='', null=True, blank=True)
    email_error = models.TextField(default="", null=True, blank=True)
    client = models.ForeignKey("user.Clients", null=True, blank=True, on_delete=models.CASCADE)
    interested_in = models.CharField(max_length=100, choices=INTERESTED_IN_CHOICES, default=INTERESTED_IN_CHOICES[0][0])
    status = models.CharField(max_length=100, choices=LEAD_STATUS_CHOICES, default=LEAD_STATUS_CHOICES[0][0])

    class Meta:
        db_table = "lead"
        verbose_name_plural = "Leads"

    @property
    def full_name(self):
        return "{} {}".format(self.first_name, self.last_name)


class Blogs(models.Model):
    title = models.TextField()
    description = models.TextField()
    content = models.TextField()
    type = models.CharField(max_length=200, choices=(("Blog", "Blog"), ("CaseStudy", "CaseStudy")), default="Blog")
    status = models.BooleanField(default=False)
    slug = models.CharField(max_length=200, null=True, blank=True)
    author = models.ForeignKey("user.User", on_delete=models.CASCADE)
    date = models.DateTimeField()
    image = models.FileField(upload_to=blog_image_upload_path, max_length=500, null=True, blank=True)
    time_to_read = models.CharField(max_length=50, default="20 min")
    keywords = models.TextField(null=True, blank=True)
    tags = models.TextField(null=True, blank=True)
    client = models.ForeignKey("user.Clients", null=True, blank=True, on_delete=models.CASCADE)

    class Meta:
        db_table = "blog"
        verbose_name_plural = "Blogs"


@receiver(pre_delete, sender=Blogs, dispatch_uid='blog_file_delete')
def blog_file_deletion(sender, instance, using, **kwargs):
    if instance.image:
        try:
            instance.image.delete(instance.image.name)
        except Exception as e:
            print("ERROR in connector_file_deletion - {}".format(str(e)))


class EmailTemplates(models.Model):
    name = models.CharField(max_length=100)
    subject = models.TextField()
    body = models.TextField()
    signature = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(
        "user.User", related_name="email_created_by", on_delete=models.SET_NULL,
        null=True, blank=True
    )
    updated_by = models.ForeignKey(
        "user.User", related_name="email_updated_by", on_delete=models.SET_NULL, null=True, blank=True
    )
    logo = models.FileField(upload_to=upload_email_template_logo, null=True, blank=True)
    client = models.ForeignKey("user.Clients", null=True, blank=True, on_delete=models.CASCADE)

    class Meta:
        db_table = "email_templates"
        verbose_name_plural = "Email Templates"


class EmailCampaign(models.Model):
    name = models.CharField(max_length=100)
    email_template = models.ForeignKey(
        EmailTemplates, related_name="email_campaign_template", on_delete=models.CASCADE
    )
    status = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(
        "user.User", related_name="created_by_%(class)ss", on_delete=models.SET_NULL,
        null=True, blank=True
    )
    updated_by = models.ForeignKey(
        "user.User", related_name="updated_by_%(class)ss", on_delete=models.SET_NULL, null=True, blank=True
    )
    email_account = models.ForeignKey("website.EmailAccounts", on_delete=models.SET_NULL, null=True, blank=True)
    client = models.ForeignKey("user.Clients", null=True, blank=True, on_delete=models.CASCADE)

    class Meta:
        db_table = "email_campaign"
        verbose_name_plural = "Email Campaign"


class EmailCampaignMailList(models.Model):
    email = models.EmailField("Leads Email", null=True, blank=True)
    first_name = models.CharField(max_length=50, null=True, blank=True)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    email_list = models.ForeignKey(
        "EmailList", on_delete=models.CASCADE, related_name="campaign_mail_list", null=True, blank=True
    )
    email_campaign = models.ForeignKey(
        EmailCampaign, on_delete=models.CASCADE, related_name="email_campaign_fk", null=True, blank=True
    )
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=100, default="Draft")
    meta_data = models.JSONField(null=True, blank=True)
    client = models.ForeignKey("user.Clients", null=True, blank=True, on_delete=models.CASCADE)

    class Meta:
        db_table = "email_campaign_list"
        verbose_name_plural = "Email Campaign Mail List"

    @property
    def full_name(self):
        return "{} {}".format(self.first_name, self.last_name if self.last_name else "")


class LoadLogs(models.Model):
    lead = models.ForeignKey(Leads, related_name="lead_logs", on_delete=models.CASCADE)
    activity_type = models.CharField(max_length=500, null=True, blank=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(
        "user.User", related_name="created_by_%(class)ss", on_delete=models.SET_NULL,
        null=True, blank=True
    )
    updated_by = models.ForeignKey(
        "user.User", related_name="updated_by_%(class)ss", on_delete=models.SET_NULL, null=True, blank=True
    )
    client = models.ForeignKey("user.Clients", null=True, blank=True, on_delete=models.CASCADE)

    class Meta:
        db_table = "lead_logs"
        verbose_name_plural = "Lead Logs"


class Emails(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    email = models.EmailField(null=True, blank=True)
    cc = models.CharField(null=True, blank=True)
    bcc = models.CharField(null=True, blank=True)
    model = models.CharField(max_length=200)
    model_id = models.PositiveBigIntegerField()
    body = models.TextField()
    subject = models.TextField()
    signature = models.TextField()
    status = models.CharField(max_length=100, choices=EMAIL_STATUS_CHOICES, default=EMAIL_STATUS_CHOICES[0][0])
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(
        "user.User", related_name="created_by_%(class)ss", on_delete=models.SET_NULL,
        null=True, blank=True
    )
    meta_data = models.JSONField(null=True, blank=True)
    email_account = models.ForeignKey("website.EmailAccounts", on_delete=models.SET_NULL, null=True, blank=True)
    client = models.ForeignKey("user.Clients", null=True, blank=True, on_delete=models.CASCADE)

    class Meta:
        db_table = "emails"
        verbose_name_plural = "Emails"


class EmailAttachments(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    file = models.FileField(upload_to=email_attachment_upload_path)
    email = models.ForeignKey(Emails, related_name="email_attachment", on_delete=models.CASCADE)
    content_type = models.CharField(max_length=100, null=True, blank=True)
    client = models.ForeignKey("user.Clients", null=True, blank=True, on_delete=models.CASCADE)

    class Meta:
        db_table = "email_attachment"
        verbose_name_plural = "Email Attachments"


class BulkLeads(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    file = models.FileField(upload_to=leads_upload_path)
    status = models.BooleanField(default=True)
    created_by = models.ForeignKey(
        "user.User", related_name="bulk_lead_created_by", on_delete=models.SET_NULL,
        null=True, blank=True
    )
    log = models.JSONField(default=None, null=True, blank=True)
    company = models.ForeignKey(
        "company.Company", related_name="bulk_leads_company", on_delete=models.CASCADE, null=True, blank=True
    )
    client = models.ForeignKey("user.Clients", null=True, blank=True, on_delete=models.CASCADE)

    class Meta:
        db_table = "bulk_leads"
        verbose_name_plural = "Bulk Leads"


class EmailList(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    email = models.EmailField("Leads Email")
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    email_error = models.TextField(default="", null=True, blank=True)
    custom_fields = models.JSONField(null=True, blank=True, default=None)
    status = models.CharField(max_length=100, choices=EMAIL_STATUS_CHOICES, default=EMAIL_STATUS_CHOICES[0][0])
    client = models.ForeignKey("user.Clients", null=True, blank=True, on_delete=models.CASCADE)

    class Meta:
        db_table = "email_list"
        verbose_name_plural = "Email List"

    @property
    def full_name(self):
        return "{} {}".format(self.first_name, self.last_name)

    def __str__(self):
        return "{}".format(self.email)


class UnSubscribeEmailList(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    email = models.EmailField("Leads Email", unique=True)
    client = models.ForeignKey("user.Clients", null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return "{}".format(self.email)


class EmailCampaignFiles(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(
        "user.User", related_name="campaign_file_created_by", on_delete=models.SET_NULL,
        null=True, blank=True
    )
    file = models.FileField(upload_to=leads_upload_path)
    campaign = models.ForeignKey(EmailCampaign, related_name="campaign_file", on_delete=models.CASCADE)
    client = models.ForeignKey("user.Clients", null=True, blank=True, on_delete=models.CASCADE)


class EmailAccounts(models.Model):
    host = models.CharField(max_length=250)
    port = models.IntegerField(default=443)
    username = models.CharField(max_length=250)
    sender_name = models.CharField(null=True, blank=True)
    sender = models.EmailField(null=True, blank=True)
    password = models.CharField(max_length=250)
    name = models.CharField(max_length=250)
    client = models.ForeignKey("user.Clients", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(
        "user.User", related_name="email_accounts_created_by", on_delete=models.SET_NULL,
        null=True, blank=True
    )
    status = models.BooleanField(default=False)
    meta_data = models.JSONField(null=True, blank=True)
    connection_type = models.CharField(max_length=50, choices=(("TLS", "TLS"), ("SSL", "SSL")), default="SSL")

    def __str__(self):
        return "{}".format(self.username)

    class Meta:
        db_table = "email_account"
        verbose_name_plural = "Email Accounts"
