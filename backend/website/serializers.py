from rest_framework import serializers
from .models import Leads, Blogs, LoadLogs, Emails, BulkLeads, EmailList, EmailAccounts, EmailTemplates


class LeadsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Leads
        fields = "__all__"


class BulkLeadsSerializers(serializers.ModelSerializer):
    class Meta:
        model = BulkLeads
        fields = "__all__"


class EmailListSerializers(serializers.ModelSerializer):
    class Meta:
        model = EmailList
        fields = "__all__"


class BlogSerializers(serializers.ModelSerializer):
    class Meta:
        model = Blogs
        fields = ("title", "slug", "image", "description", "date", "time_to_read", "keywords")


class BlogDetailSerializers(serializers.ModelSerializer):
    class Meta:
        model = Blogs
        fields = ("title", "slug", "image", "description", "content", "date", "time_to_read", "keywords")


class LoadLogsSerializers(serializers.ModelSerializer):
    class Meta:
        model = LoadLogs
        fields = "__all__"


class EmailSerializers(serializers.ModelSerializer):
    class Meta:
        model = Emails
        fields = "__all__"


class BlogsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Blogs
        fields = "__all__"


class EmailAccountsSerializers(serializers.ModelSerializer):
    class Meta:
        model = EmailAccounts
        fields = "__all__"


class EmailTemplatesSerializers(serializers.ModelSerializer):
    class Meta:
        model = EmailTemplates
        fields = "__all__"
