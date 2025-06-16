from django import forms
from ckeditor.widgets import CKEditorWidget

from django.contrib import admin
from .models import *


@admin.register(Leads)
class LeadsAdmin(admin.ModelAdmin):
    list_display = ("email", "first_name", "last_name", "phone")


class PostAdminForm(forms.ModelForm):
    content = forms.CharField(widget=CKEditorWidget())

    class Meta:
        model = Blogs
        fields = '__all__'


@admin.register(Blogs)
class BlogsAdmin(admin.ModelAdmin):
    form = PostAdminForm
    list_display = ("title", "slug", "date")


class EmailTemplatesForm(forms.ModelForm):
    body = forms.CharField(widget=CKEditorWidget())
    signature = forms.CharField(widget=CKEditorWidget())

    class Meta:
        model = EmailTemplates
        fields = '__all__'


@admin.register(EmailTemplates)
class EmailTemplatesAdmin(admin.ModelAdmin):
    form = EmailTemplatesForm
    list_display = ("name", "subject")


@admin.register(EmailCampaign)
class EmailCampaignAdmin(admin.ModelAdmin):
    list_display = ("name", "created_at")


@admin.register(EmailCampaignMailList)
class LeadEmailCampaignAdmin(admin.ModelAdmin):
    list_display = ("email_list__email", "email_campaign__name")


admin.site.register(Emails)
admin.site.register(LoadLogs)
admin.site.register(EmailList)
admin.site.register(UnSubscribeEmailList)
admin.site.register(EmailCampaignFiles)
admin.site.register(EmailAccounts)
