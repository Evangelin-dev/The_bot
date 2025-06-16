from django.contrib import admin
from django.urls import path, include

from . import settings
from django.conf.urls.static import static

from website.views import (
    generate_lead, get_blog_list, get_blog_detail, dynamic_email_template, email_campaign_list,
    DashboardView, new_campaign, email_campaign_detail, campaign_lead_details, LeadListView, LeadDetailsView,
    LeadCreateView, LeadActivityView, LeadActivityListView, EmailListView, SendEmailFormView,
    EmailDetailsView, BlogsListView, BlogsCreateView, BlogsDetailsView, BlogsDeleteView, export_lead_csv,
    LeadBulkUploadView, LeadDeleteView, EmailContactListView, un_subscribe_view, email_un_subscribe_success,
    EmailCampaignContactDeleteView, EmailAccountsContactListView, EmailAccountsDetailsView, EmailAccountsCreateView,
    DeleteView, send_test_email_view, export_campaign_mail_delivery_csv, EmailTemplateCreateView,
    EmailTemplateDetailsView, EmailTemplateListView
)
from user.views import register_new_client, register_user_to_client



urlpatterns = [
    path('', DashboardView.as_view(), name='index'),
    path('api/lead-generate/', generate_lead, name='generate_lead'),
    path('email/unsubscribe/', un_subscribe_view, name='unsubscribe'),
    path('email/email_un_subscribe_success/', email_un_subscribe_success, name='email_un_subscribe_success'),
    path('api/register-new-client/', register_new_client, name='register_new_client'),
    path('api/register-user-to-client/', register_user_to_client, name='register_user_to_client'),
    path('export/lead/', export_lead_csv, name='export_lead'),
    path('export/campaign_mail_delivery/', export_campaign_mail_delivery_csv, name='export_campaign_mail_delivery'),
    path('api/blogs/', get_blog_list, name='get_blogs'),
    path('api/blogs/<slug:slug>', get_blog_detail, name='get_blog_detail'),
    path('dynamic_email_template', dynamic_email_template, name='dynamic_email_template'),
    path('campaign/list', email_campaign_list, name='email_campaign'),
    path('campaign/new', new_campaign, name='new_email_campaign'),
    path('camapign/contacts', EmailContactListView.as_view(), name='email_contact_list'),
    path('campaign/details/<int:pk>', email_campaign_detail, name='email_campaign_details'),
    path('campaign/mail/list/<int:pk>', campaign_lead_details, name='campaign_lead_details'),
    path('leads/', LeadListView.as_view(), name='leads'),
    path('leads/new', LeadCreateView.as_view(), name='leads_new'),
    path('leads/<int:pk>', LeadDetailsView.as_view(), name='leads_details'),
    path('lead/delete/<int:pk>', LeadDeleteView.as_view(), name='lead_delete'),
    path('lead-activity', LeadActivityView.as_view(), name='leads_activity'),
    path('lead/activity/<int:pk>/', LeadActivityListView.as_view(), name='leads_activity_list'),
    path('email/send/<str:model>/<str:pk>', SendEmailFormView.as_view(), name='send_email'),
    path('email/<uuid:pk>', EmailDetailsView.as_view(), name='email_detail'),
    path('email/', EmailListView.as_view(), name='email_list'),
    path('blog-case-study/', BlogsListView.as_view(), name='blog_list'),
    path('blog-case-study/new', BlogsCreateView.as_view(), name='blog_create'),
    path('blog-case-study/<int:pk>', BlogsDetailsView.as_view(), name='blog_detail'),
    path('blog-case-study/delete/<int:pk>', BlogsDeleteView.as_view(), name='blog_delete'),
    path('lead/upload-lead', LeadBulkUploadView.as_view(), name='upload_lead'),
    path('camapign/contacts/delete', EmailCampaignContactDeleteView.as_view(), name='delete_email_campaign_contact'),
    path('settings/email/accounts', EmailAccountsContactListView.as_view(), name='email_account_list'),
    path('settings/email/accounts/<int:pk>', EmailAccountsDetailsView.as_view(), name='email_account_details'),
    path('settings/email/accounts/create', EmailAccountsCreateView.as_view(), name='email_account_create'),
    path('create/<str:app_name>/<str:model_name>', DeleteView.as_view(), name='delete'),
    path('send_test_email_view', send_test_email_view, name='send_test_email'),
    path('email/templates', EmailTemplateListView.as_view(), name='email_template_list'),
    path('email/templates/create', EmailTemplateCreateView.as_view(), name='email_template_create'),
    path('email/templates/<int:pk>', EmailTemplateDetailsView.as_view(), name='email_template_details'),
    path("", include("user.urls")),
    path("", include("website.urls")),
    path("", include("erp.urls")),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += path('admin/', admin.site.urls),
