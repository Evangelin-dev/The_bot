import re
import base64
import csv

from django.apps import apps
from django.db.models import Q
from django.shortcuts import render, redirect
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.views.generic import TemplateView
from website import TemplateLayout
from website.template_helpers.theme import TemplateHelper

from django.http import HttpResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.pagination import PageNumberPagination

from django.http import JsonResponse

from .serializers import (
    LeadsSerializers, BlogSerializers, BlogDetailSerializers, LoadLogsSerializers, EmailSerializers,
    BlogsSerializers, BulkLeadsSerializers, EmailAccountsSerializers, EmailTemplatesSerializers
)
from utils.base_view import CustomListView, CustomUpdateView, CustomCreateView, CustomDeleteView
from .models import (
    Blogs, EmailCampaign, EmailTemplates, Leads, EmailCampaignMailList, LoadLogs, Emails, EmailAttachments, BulkLeads,
    EmailList, UnSubscribeEmailList, EmailCampaignFiles, EmailAccounts
)
from django.contrib.auth.decorators import login_required
from permission.is_authenticated import IsLoggedInMixin
from .constants import LEAD_STATUS_CHOICES, EMAIL_STATUS_CHOICES, INTERESTED_IN_CHOICES
from .email_utils import send_email
from utils.paginated_data import get_paginated_data
from utils.search import get_search_query
from .tasks import process_email_campaign, process_upload_leads
from .background_jobs import test_email_connection, send_test_email


@api_view(['POST'])
@permission_classes([])
def generate_lead(request):
    from user.models import Clients
    client_obj = Clients.objects.filter(client_id=request.data.get("access_key")).first()
    if client_obj:
        lead = Leads.objects.filter(email=request.data.get("email")).first()
        if not lead:
            serializer = LeadsSerializers(data=request.data)
            if serializer.is_valid():
                instance = serializer.save()
                instance.client = client_obj
                instance.save()

                if client_obj.key == "the-bot":
                    try:
                        msg_html = render_to_string(
                            'email.html', {"name": "{} {}".format(
                                request.data.get("first_name"), request.data.get("last_name")
                            )}
                        )
                        subject = "Global Growth with Data-Driven Strategies 🚀"
                        message = EmailMessage(subject, msg_html, "harry@thebot.agency", [request.data.get("email")])
                        message.content_subtype = 'html'  # this is required because there is no plain text email version
                        message.send()

                    except Exception as e:
                        instance.email_error = str(e)
                        instance.save()

                return JsonResponse(
                    data={"msg": "Lead Successfully created", "data": {}, "success": True}, status=200
                )

            return JsonResponse(
                data={
                    "msg": "Something went wrong", "data": serializer.errors, "success": False
                }, status=400
            )
        else:
            LoadLogs.objects.create(
                message="Customer Creating Lead from website - {}".format(request.data.get("source")),
                lead=lead
            )
            return JsonResponse(
                data={
                    "msg": "You are in our list, shortly will connect with you!", "data": [], "success": False
                }, status=400
            )
    else:
        return JsonResponse(
            data={
                "msg": "You are not authorized to connect with us", "data": [], "success": False
            }, status=400
        )


def email_template(request):
    return render(request, 'email.html', {"name": "aljsldkjalskdjad", "domain": "adjlaskdjadks"})


def un_subscribe_view(request):
    context = blank_layout()
    if request.method == "GET":
        unsubscribe_email = request.GET.get("link")
        email = base64.b64decode(bytes(unsubscribe_email, "utf-8")).decode("utf-8")
        context["email"] = email
        context["uuid"] = request.GET.get("uuid")
        return render(request, 'email/unsubscribe.html', context)
    else:
        from user.models import Clients
        client = Clients.objects.get(client_id=request.POST.get("uuid"))
        if client:
            if not UnSubscribeEmailList.objects.filter(
                    email=request.POST.get("email"), client__client_id=request.POST.get("uuid")).exists():
                UnSubscribeEmailList.objects.create(email=request.POST.get("email"))
                context["msg"] = "You have been successfully unsubscribe !"
            else:
                context["msg"] = "You are already in unsubscribe list !"
        else:
            context["msg"] = "Invalid Request !"
        return render(
            request, 'email/unsubscribe-success.html', context
        )


def email_un_subscribe_success(request):
    context = blank_layout()
    return render(
        request, 'email/unsubscribe-success.html', context
    )


def blank_layout():
    context = {}
    template_layout = TemplateLayout()
    context = template_layout.init(context)
    context.update(
        {
            "layout_path": TemplateHelper.set_layout("layout_blank.html", context),
        }
    )
    return context


@api_view(['GET', ])
@permission_classes([])
def get_blog_list(request):
    if request.GET.get("access_key"):
        paginator = PageNumberPagination()
        paginator.page_size = 50
        person_objects = Blogs.objects.filter(
            status=True, client__client_id=request.GET.get("access_key"), type=request.GET.get("type", "Blog")
        ).order_by("-date")
        result_page = paginator.paginate_queryset(person_objects, request)
        serializer = BlogSerializers(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)
    else:
        return JsonResponse(data={"msg": "You are not authorized to access"}, status=400)


@api_view(['GET', ])
@permission_classes([])
def get_blog_detail(request, slug):
    try:
        if request.GET.get("access_key"):
            blog_details_qs = Blogs.objects.get(status=True, slug=slug, client__client_id=request.GET.get("access_key"))
            serializer = BlogDetailSerializers(blog_details_qs)
            return JsonResponse(data={"data": serializer.data, "success": True}, status=200)
        return JsonResponse(data={"msg": "You are not authorized to access"}, status=400)
    except Exception as e:
        return JsonResponse(data={"data": {}, "msg": "Blog Not Exists!", "success": False}, status=403)


@login_required
def dynamic_email_template(request):
    from .models import EmailTemplates
    email_obj = EmailTemplates.objects.filter(id=36).first()
    body = email_obj.body

    from django.template import Context, Template
    t = Template(body)

    c = Context({'full_name': 'The Bot', "link": "link"})
    html = t.render(c)

    return render(request, 'email_campaign/dynamic_empty_layout.html', {
        "body": html, "signature": email_obj.signature, "link": "link", "logo": email_obj.logo.url
    })


class DashboardView(IsLoggedInMixin, TemplateView):
    template_name = "dashboard.html"
    status = ""

    def get_context_data(self, **kwargs):
        context = TemplateLayout.init(self, super().get_context_data(**kwargs))
        return context


@login_required
def email_campaign_list(request):
    context = {}
    template_layout = TemplateLayout()
    context = template_layout.init(context)
    queryset = EmailCampaign.objects.filter(
        get_search_query(request, ["name"]), client__in=request.session.get("client")).order_by("-id")
    context["menu"] = "email_campaign"
    get_paginated_data(context, queryset, request)

    return render(request, 'email-campaign.html', context)


@login_required
def new_campaign(request):
    context = {}
    template_layout = TemplateLayout()
    context = template_layout.init(context)
    context["menu"] = "email_campaign"

    if request.method == "POST":
        email_campaign = EmailCampaign.objects.create(
            name=request.POST.get("name"),
            email_template_id=request.POST.get("email_template"),
            created_by=request.user,
            email_account_id=request.POST.get("email_account"),
            client_id=request.session.get("client")[0]
        )
        return redirect("email_campaign_details", pk=email_campaign.id)

    context["templates"] = EmailTemplates.objects.filter(client__in=request.session.get("client"))
    context["email_accounts"] = EmailAccounts.objects.filter(client__in=request.session.get("client"))

    return render(request, 'new-campaign.html', context)


@login_required
def email_campaign_detail(request, pk):
    context = {"send_by_file": request.GET.get("send_by_file", False)}
    template_layout = TemplateLayout()
    context = template_layout.init(context)
    context["menu"] = "email_campaign"

    email_campaign_obj = EmailCampaign.objects.get(id=pk)
    context["leads"] = []

    if request.method == "GET":
        query = {"client__in": request.session.get("client")}
        if request.GET.get("start_date"):
            query["created_at__date__gte"] = request.GET.get("start_date")
        if request.GET.get("end_date"):
            query["created_at__date__lte"] = request.GET.get("end_date")

        if request.GET.get("contacts") == "true":
            context["leads"] = EmailList.objects.filter(**query)
            context["email_type"] = "contacts"
        else:
            if request.GET.get("interested_in"):
                query["interested_in__icontains"] = request.GET.get("interested_in")
            if query:
                context["leads"] = Leads.objects.filter(**query)
                context["email_type"] = "leads"

    if request.method == "POST":
        if request.POST.get("send_by_file") == "true":
            lead_ids = []
            email_campaign_file = EmailCampaignFiles.objects.create(
                file=request.FILES.get("file"), campaign=email_campaign_obj, created_by=request.user,
                client_id=request.session.get("client")[0]
            )

            email_campaign_obj.status = "Email Sending"
            email_campaign_obj.save()

            process_email_campaign.delay(
                email_campaign_obj.id, lead_ids=lead_ids, email_type=request.POST.get("email_type"),
                email_campaign_file=email_campaign_file.id
            )

        else:
            lead_ids = []
            for lead_id in request.POST.getlist("selected_lead"):
                if request.POST.get("select_lead_id_{}".format(lead_id)):
                    lead_ids.append(lead_id)
            if lead_ids:
                email_campaign_obj.status = "Email Sending"
                email_campaign_obj.client_id = request.session.get("client")[0]
                email_campaign_obj.save()
                process_email_campaign.delay(
                    email_campaign_obj.id, lead_ids=lead_ids, email_type=request.POST.get("email_type")
                )
            else:
                email_campaign_obj.status = "No Lead Selected"
                email_campaign_obj.save()

    context["data"] = email_campaign_obj
    return render(request, 'campaign-detail.html', context)


@login_required
def campaign_lead_details(request, pk):
    context = {}
    template_layout = TemplateLayout()
    context = template_layout.init(context)
    context["menu"] = "email_campaign"

    email_campaign_obj = EmailCampaign.objects.get(id=pk)
    context["detail"] = email_campaign_obj
    query = Q()
    if request.GET.get("search", ""):
        query = Q(
            Q(email__icontains=request.GET.get("search", ""))
            | Q(first_name__icontains=request.GET.get("search", ""))
            | Q(last_name__icontains=request.GET.get("search", ""))
        )
    queryset = EmailCampaignMailList.objects.filter(
        Q(email_campaign=email_campaign_obj), query
    )

    get_paginated_data(context, queryset, request)
    return render(request, 'campaign-lead-details.html', context)


class LeadListView(CustomListView):
    model = Leads
    menu = "leads"
    template_name = "lead/list.html"
    fields = "__all__"
    search = ["first_name", "last_name", "email", "phone", "status", "interested_in"]
    filter_col = ("created_at__gte", "created_at__lte", "interested_in")
    static_values = {"interested_in": INTERESTED_IN_CHOICES}


class LeadCreateView(CustomCreateView):
    model = Leads
    menu = "leads"
    template_name = "lead/create.html"
    fields = "__all__"
    object = None

    def get_context_data(self, **kwargs):
        context = self.get_context(**kwargs)
        context["status"] = LEAD_STATUS_CHOICES
        context["interested_in"] = INTERESTED_IN_CHOICES
        return context

    def post(self, request, *args, **kwargs):
        serializer = LeadsSerializers(data=request.POST)
        context = self.get_context_data(**kwargs)
        if serializer.is_valid():
            instance = serializer.save()
            instance.client_id = request.session.get("client")[0]
            instance.save()
            return redirect('leads_details', pk=instance.id)
        else:
            context["errors"] = serializer.errors

        return render(request, self.template_name, context)


class LeadDetailsView(CustomUpdateView):
    model = Leads
    menu = "leads"
    template_name = "lead/details.html"
    fields = "__all__"
    object = None

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        instance = Leads.objects.get(id=kwargs.get("pk"))
        context["data"] = instance
        context["status"] = LEAD_STATUS_CHOICES
        context["interested_in"] = INTERESTED_IN_CHOICES
        context["activities"] = LoadLogs.objects.filter(lead=instance).order_by("-id")[:5]
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        try:
            instance = Leads.objects.get(id=kwargs.get("pk"))
            serializer = LeadsSerializers(data=request.POST, instance=instance)
            context = self.get_context_data(**kwargs)
            if serializer.is_valid():
                instance = serializer.save()
                return redirect('leads_details', pk=instance.id)
            else:
                context["errors"] = serializer.errors
            return redirect('leads_details', pk=instance.id)
        except Exception as e:
            return redirect('leads')


class LeadActivityView(CustomCreateView):
    model = LoadLogs
    menu = "leads"
    template_name = "lead/details.html"
    fields = "__all__"
    object = None

    def post(self, request, *args, **kwargs):
        serializer = LoadLogsSerializers(data=request.POST)
        context = self.get_context_data(**kwargs)
        if serializer.is_valid():
            instance = serializer.save()
            instance.save()
        else:
            context["errors"] = serializer.errors

        return redirect('leads_activity_list', pk=request.POST.get("lead"))


class LeadActivityListView(CustomListView):
    model = LoadLogs
    menu = "leads"
    template_name = "lead/activity.html"
    fields = "__all__"
    filter_col = ["lead"]
    object_list = []
    paginate_by = 5
    pk_filter = {"lead": "pk"}

    # def get(self, request, *args, **kwargs):
    #     context = self.get_context_data(**kwargs)
    #     context["data"] = Leads.objects.get(id=kwargs.get("pk"))
    #     return render(request, self.template_name, context)


class EmailListView(CustomListView):
    model = Emails
    menu = "email"
    template_name = "email/list.html"
    fields = "__all__"


class SendEmailFormView(CustomCreateView):
    template_name = "email/send_email.html"
    menu = "email"
    model = Emails
    fields = "__all__"
    object = None

    def get_context_data(self, **kwargs):
        context = self.get_context(**kwargs)
        model = self.request.resolver_match.kwargs.get("model")
        pk = self.request.resolver_match.kwargs.get("pk")
        if model != 'new':
            model_class = apps.get_model("website", model)
            try:
                model_obj = model_class.objects.get(id=pk)
                context["model"] = model
                context["model_id"] = model_obj.id
                context["email"] = model_obj.email
            except Exception as e:
                context["error"] = "Invalid Content Given"
        else:
            context["model"] = model
            context["model_id"] = 0
        context["email_accounts"] = EmailAccounts.objects.filter(client__in=self.request.user.clients)
        return context

    def post(self, request, *args, **kwargs):
        serializer = EmailSerializers(data=request.POST)
        context = self.get_context_data(**kwargs)
        if serializer.is_valid():
            instance = serializer.save()
            instance.client_id = request.session.get("client")[0]
            instance.save()

            for file in request.FILES.getlist("file"):
                try:
                    content_type = file.content_type
                    EmailAttachments.objects.create(file=file, email=instance, content_type=content_type)
                except Exception as e:
                    print("ERROR While Attaching resources - {}".format(str(e)))
            send_email(instance.id)
            return redirect('email_list')
        else:
            context["errors"] = serializer.errors

        return render(request, self.template_name, context)


class EmailDetailsView(CustomUpdateView):
    model = Emails
    menu = "email"
    template_name = "email/detail.html"
    fields = "__all__"
    object = None

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        instance = Emails.objects.get(id=kwargs.get("pk"))
        context["data"] = instance
        attachments = instance.email_attachment.all()
        context["attachments"] = attachments
        if request.GET.get("attachment"):
            context["fileUrl"] = instance.email_attachment.get(id=request.GET.get("attachment")).file.url
        return render(request, self.template_name, context)


class BlogsListView(CustomListView):
    order_by = ("-date",)
    model = Blogs
    menu = "blog"
    template_name = "blogs/list.html"
    fields = "__all__"
    search = ["title", "description"]


class BlogsCreateView(CustomCreateView):
    model = Blogs
    menu = "blog"
    template_name = "blogs/create.html"
    fields = "__all__"
    object = None

    def post(self, request, *args, **kwargs):
        serializer = BlogsSerializers(data=request.POST)
        context = self.get_context_data(**kwargs)
        if serializer.is_valid():
            instance = serializer.save()
            instance.client_id = request.session.get("client")[0]
            instance.slug = re.sub(r'\W+', '-', instance.title).strip('-').lower()
            instance.image.save(request.FILES.get("image").name, request.FILES.get("image"))
            instance.save()
            return redirect('blog_detail', pk=instance.id)
        else:
            context["errors"] = serializer.errors
        print(serializer.errors, "serializer.errors")
        return render(request, self.template_name, context)


class BlogsDetailsView(CustomUpdateView):
    model = Blogs
    menu = "blog"
    template_name = "blogs/detail.html"
    fields = "__all__"
    object = None

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        instance = Blogs.objects.get(id=kwargs.get("pk"))
        context["data"] = instance
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        try:
            instance = Blogs.objects.get(id=kwargs.get("pk"))

            if not request.FILES.get("image"):
                request.POST._mutable = True
                del request.POST["image"]
                request.POST._mutable = False

            serializer = BlogsSerializers(data=request.POST, instance=instance)
            context = self.get_context_data(**kwargs)
            if serializer.is_valid():
                instance = serializer.save()
                instance.slug = re.sub(r'\W+', '-', instance.title).strip('-').lower()
                if request.FILES.get("image"):
                    instance.image.save(request.FILES.get("image").name, request.FILES.get("image"))
                instance.save()
                return redirect('blog_detail', pk=instance.id)
            else:
                context["errors"] = serializer.errors
            return redirect('blog_detail', pk=instance.id)
        except Exception as e:
            return redirect('blog_list')


class BlogsDeleteView(CustomDeleteView):
    model = Blogs
    menu = "blog"
    template_name = "blogs/delete.html"
    fields = "__all__"
    object = None

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        instance = Blogs.objects.get(id=kwargs.get("pk"))
        context["data"] = instance
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        try:

            instance = Blogs.objects.get(id=kwargs.get("pk"))
            instance.delete()

            return redirect('blog_list')
        except Exception as e:
            return redirect('blog_list')


@login_required
def export_lead_csv(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="leads.csv"'

    writer = csv.writer(response)
    writer.writerow(["Email", "Phone", "Date", "Source", "First Name", "Last Name", "Status", "Note"])

    leads_data = Leads.objects.filter(client__in=request.session.get("client")).values_list(
        "email", "phone", "created_at", "source", "first_name", "last_name", "status", "note"
    )
    for user in leads_data:
        writer.writerow(user)

    return response


@login_required
def export_campaign_mail_delivery_csv(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="campaign-mail-delivery.csv"'

    writer = csv.writer(response)
    writer.writerow(["Email", "Date", "Status"])

    mailing_list = EmailCampaignMailList.objects.filter(
        email_campaign=request.GET.get("email_campaign"), client__in=request.session.get("client")
    ).values_list("email", "created_at", "status")
    for mailing in mailing_list:
        writer.writerow(mailing)

    return response


class LeadBulkUploadView(CustomCreateView):
    model = BulkLeads
    menu = "leads"
    template_name = "lead/upload-lead.html"
    fields = "__all__"
    object = None

    def post(self, request, *args, **kwargs):
        upload_type = "leads" if request.POST.get("upload_type") == "lead" else "email_contact_list"
        data = {'file': request.FILES.get("file"), 'created_by': request.user.id}
        serializer = BulkLeadsSerializers(data=data)
        context = self.get_context_data(**kwargs)
        if serializer.is_valid():
            instance = serializer.save()
            instance.client_id = request.session.get("client")[0]
            instance.save()
            process_upload_leads.delay(instance.id, upload_type=upload_type)
            return redirect(upload_type)
        else:
            context["errors"] = serializer.errors

        return render(request, self.template_name, context)


class LeadDeleteView(CustomDeleteView):
    model = Leads
    menu = "leads"
    template_name = "lead/delete.html"
    fields = "__all__"
    object = None

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        instance = Leads.objects.get(id=kwargs.get("pk"))
        context["data"] = instance
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        try:
            instance = Leads.objects.get(id=kwargs.get("pk"))
            instance.delete()
            return redirect('leads')
        except Exception as e:
            return redirect('leads')


class EmailContactListView(CustomListView):
    model = EmailList
    menu = "email_campaign"
    template_name = "email_campaign/contacts.html"
    fields = "__all__"
    is_client_filter = True


class EmailCampaignContactDeleteView(CustomDeleteView):
    model = EmailList
    menu = "email_campaign"
    template_name = "email_campaign/contact_delete.html"
    fields = "__all__"
    object = None

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        if request.GET.get("id"):
            instance = self.model.objects.get(id=request.GET.get("id"))
            context["data"] = instance
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        try:
            if request.POST.get("id"):
                instance = self.model.objects.get(id=request.POST.get("id"))
                instance.delete()
            else:
                self.model.objects.all().delete()
            return redirect('email_contact_list')
        except Exception as e:
            return redirect('email_contact_list')


class EmailAccountsContactListView(CustomListView):
    model = EmailAccounts
    menu = "email_accounts"
    template_name = "settings/email_accounts/list.html"
    fields = "__all__"
    parent_menu = "settings"


class EmailAccountsCreateView(CustomCreateView):
    model = EmailAccounts
    menu = "email_accounts"
    template_name = "settings/email_accounts/create.html"
    fields = "__all__"
    parent_menu = "settings"
    object = None

    def post(self, request, *args, **kwargs):
        serializer = EmailAccountsSerializers(data=request.POST)
        context = self.get_context_data(**kwargs)
        if serializer.is_valid():
            instance = serializer.save()
            instance.client_id = request.session.get("client")[0]
            instance.save()
            return redirect('email_account_details', pk=instance.id)
        else:
            context["errors"] = serializer.errors
        return render(request, self.template_name, context)


class EmailAccountsDetailsView(CustomUpdateView):
    model = EmailAccounts
    menu = "email_accounts"
    template_name = "settings/email_accounts/detail.html"
    fields = "__all__"
    parent_menu = "settings"
    object = None

    def post(self, request, *args, **kwargs):
        try:
            instance = EmailAccounts.objects.get(id=kwargs.get("pk"))
            serializer = EmailAccountsSerializers(data=request.POST, instance=instance)
            context = self.get_context_data(**kwargs)
            if serializer.is_valid():
                instance = serializer.save()
                instance.client_id = request.session.get("client")[0]
                instance.save()
                return redirect('email_account_details', pk=instance.id)
            else:
                context["errors"] = serializer.errors
            return redirect('email_account_details', pk=instance.id)
        except Exception as e:
            return redirect('email_contact_list')

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        instance = self.model.objects.get(id=kwargs.get("pk"))
        context["data"] = instance

        if request.GET.get("test_connection") == "true":
            context["test_connection"] = True
            try:
                response = test_email_connection(config=instance)
                context["is_success"] = response
                instance.status = response
                instance.meta_data = {}
                instance.save()
                return redirect("email_account_details", pk=instance.id)
            except Exception as e:
                instance.meta_data = {"error": str(e)}
                instance.status = False
                instance.save()
                return redirect("email_account_details", pk=instance.id)
        return render(request, self.template_name, context)


class DeleteView(CustomDeleteView):
    menu = "email_accounts"
    template_name = "delete.html"
    fields = "__all__"
    parent_menu = "settings"
    object = None

    def get(self, request, *args, **kwargs):
        from django.apps import apps
        model = apps.get_model(kwargs.get("app_name"), kwargs.get("model_name"))
        context = self.get_context_data(**kwargs)
        if request.GET.get("id"):
            instance = model.objects.get(id=request.GET.get("id"))
            context["data"] = instance
        context["app_name"] = kwargs.get("app_name")
        context["model_name"] = kwargs.get("model_name")
        context["redirect"] = request.GET.get("redirect")
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        try:
            model = apps.get_model(kwargs.get("app_name"), kwargs.get("model_name"))
            if request.POST.get("id"):
                instance = model.objects.get(id=request.POST.get("id"))
                instance.delete()
            return redirect(request.POST.get("redirect"))
        except Exception as e:
            return redirect(request.POST.get("redirect"))


@login_required
def send_test_email_view(request):
    if request.method == "POST":
        recipient = request.POST.get("recipient")
        email_account = request.POST.get("email_account")
        email_account_obj = EmailAccounts.objects.get(id=email_account)
        result = send_test_email(email_account_obj, recipient)
        return redirect("email_account_details", pk=email_account)


class EmailTemplateListView(CustomListView):
    model = EmailTemplates
    menu = "email_template"
    template_name = "email_template/list.html"
    fields = "__all__"
    parent_menu = "email_template"


class EmailTemplateCreateView(CustomCreateView):
    model = EmailTemplates
    menu = "email_template"
    template_name = "email_template/create.html"
    fields = "__all__"
    parent_menu = "email_template"
    object = None

    def post(self, request, *args, **kwargs):
        serializer = EmailTemplatesSerializers(data=request.POST)
        context = self.get_context_data(**kwargs)
        if serializer.is_valid():
            instance = serializer.save()
            instance.client_id = request.session.get("client")[0]
            instance.save()
            return redirect('email_template_details', pk=instance.id)
        else:
            context["errors"] = serializer.errors
        return render(request, self.template_name, context)


class EmailTemplateDetailsView(CustomUpdateView):
    model = EmailTemplates
    menu = "email_template"
    template_name = "email_template/detail.html"
    fields = "__all__"
    parent_menu = "email_template"
    object = None

    def post(self, request, *args, **kwargs):
        try:
            instance = EmailTemplates.objects.get(id=kwargs.get("pk"))
            serializer = EmailTemplatesSerializers(data=request.POST, instance=instance)
            context = self.get_context_data(**kwargs)
            if serializer.is_valid():
                instance = serializer.save()
                return redirect('email_template_details', pk=instance.id)
            else:
                context["errors"] = serializer.errors
            return redirect('email_template_details', pk=instance.id)
        except Exception as e:
            return redirect('email_template_list')

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        instance = self.model.objects.get(id=kwargs.get("pk"))
        context["data"] = instance
        return render(request, self.template_name, context)
