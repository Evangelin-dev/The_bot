import datetime
import json
from num2words import num2words

from django.shortcuts import render, redirect, reverse
from django.http import JsonResponse

from .serializers import (
    TaxTemplateSerializers, ItemsSerializers, TermsAndConditionsSerializers, CustomerSerializers, AddressSerializers,
    QuotationSerializers, CustomerShortSerializers, ItemDetailSerializers, CustomerDetailSerializers,
    CompanyDetailSerializers, TaxTemplateItemsSerializers, InvoiceSerializers, PaymentCollectionLinksSerializers,
    ItemListSerializers
)
from utils.base_view import CustomListView, CustomUpdateView, CustomCreateView, blank_layout
from .models import (
    TaxTemplate, Items, TermsAndConditions, Customer, Address, Quotation, QuotationItems, Invoice, InvoiceItems,
    ActivityLogs, PaymentCollectionLinks, ItemImages
)
from company.models import Company, BankDetails

from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework.pagination import PageNumberPagination
from django.db.models import Q
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from utils.encryption import encrypt, decrypt
from .constants import ITEM_META_DATA


@api_view(['GET', ])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def get_address_list(request):
    paginator = PageNumberPagination()
    paginator.page_size = 10
    person_objects = Address.objects.filter(
        name__icontains=request.GET.get("search[term]"), address_type__in=request.GET.getlist("address_type[]"),
        client__in=request.session.get("client")
    ).order_by("-created_by")
    result_page = paginator.paginate_queryset(person_objects, request)
    serializer = AddressSerializers(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)


@api_view(['GET', ])
@authentication_classes([])
@permission_classes([])
def get_item_list(request, site_key):
    paginator = PageNumberPagination()
    paginator.page_size = 10
    filter_query = {"client__client_id": site_key}
    if request.GET.get("active") == "true":
        filter_query["status"] = True
    if request.GET.get("active") == "false":
        filter_query["status"] = False
    item_queryset = Items.objects.filter(**filter_query).order_by("-created_by")
    result_page = paginator.paginate_queryset(item_queryset, request)
    serializer = ItemListSerializers(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)


@api_view(['GET', ])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def get_item(request, pk):
    item_obj = Items.objects.get(id=pk)
    return JsonResponse(data=ItemDetailSerializers(item_obj).data)


@api_view(['GET', ])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def get_customer(request, pk):
    customer_obj = Customer.objects.get(id=pk)
    return JsonResponse(data=CustomerDetailSerializers(customer_obj).data)


@api_view(['GET', ])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def get_customer_list(request):
    paginator = PageNumberPagination()
    paginator.page_size = 20
    person_objects = Customer.objects.filter(
        Q(Q(name__icontains=request.GET.get("search[term]")) | Q(description__in=request.GET.getlist("search[term]"))),
        client__in=request.session.get("client")
    ).order_by("-created_by")
    result_page = paginator.paginate_queryset(person_objects, request)
    serializer = CustomerShortSerializers(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)


@api_view(['GET', ])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def get_items_list(request):
    paginator = PageNumberPagination()
    paginator.page_size = 20
    person_objects = Items.objects.filter(
        Q(Q(name__icontains=request.GET.get("search[term]")) | Q(description__in=request.GET.getlist("search[term]"))),
        client__in=request.session.get("client")
    ).order_by("-created_by")
    result_page = paginator.paginate_queryset(person_objects, request)
    serializer = ItemsSerializers(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)


@api_view(['GET', ])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def get_company(request, pk):
    company_obj = Company.objects.get(id=pk)
    return JsonResponse(data=CompanyDetailSerializers(company_obj).data)


@api_view(['GET', ])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def get_company_list(request):
    paginator = PageNumberPagination()
    paginator.page_size = 20
    person_objects = Company.objects.filter(
        Q(Q(name__icontains=request.GET.get("search[term]", "")) | Q(
            description__in=request.GET.getlist("search[term]", []))),
        client__in=request.session.get("client")
    ).order_by("-created_by")
    result_page = paginator.paginate_queryset(person_objects, request)
    serializer = CompanyDetailSerializers(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)


@api_view(['POST', ])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def save_quotation(request):
    try:
        client_id = request.session.get("client")[0]
        payload = request.data
        company_id = payload.get("company").get("id")
        message = "Quotation Updated"
        if payload.get("id"):
            quotation_obj = Quotation.objects.get(id=payload.get("id"))
            quotation_obj.date = payload.get("date")
            quotation_obj.terms_and_condition_id = payload.get("terms_and_condition")
            quotation_obj.bank_details_id = payload.get("bank_detail")
            quotation_obj.net_amount = payload.get("net_amount")
            quotation_obj.discount_percentage = payload.get("discount_percentage")
            quotation_obj.discount_amount = payload.get("discount_amount")
            quotation_obj.gross_amount = payload.get("gross_amount")
            quotation_obj.tax_amount = payload.get("tax_amount")
            quotation_obj.tax_data = payload.get("tax_data")
            quotation_obj.total_amount = payload.get("total_amount")
            quotation_obj.is_taxable = payload.get("is_taxable")
            quotation_obj.updated_by = request.user
            quotation_obj.save()

            QuotationItems.objects.filter(quotation=quotation_obj).delete()

        else:
            year = datetime.date.today().year
            quotation_count = Quotation.objects.filter(client_id=client_id, date__year=year).count()
            quotation_obj = Quotation.objects.create(
                date=payload.get("date"), customer_id=payload.get("customer").get("id"),
                shipping_address_id=payload.get("customer").get("shipping_address").get("id"),
                billing_address_id=payload.get("customer").get("billing_address").get("id"),
                terms_and_condition_id=payload.get("terms_and_condition"),
                bank_details_id=payload.get("bank_detail"),
                net_amount=payload.get("net_amount"),
                discount_percentage=payload.get("discount_percentage"),
                discount_amount=payload.get("discount_amount"),
                gross_amount=payload.get("gross_amount"),
                tax_amount=payload.get("tax_amount"),
                tax_data=payload.get("tax_data"),
                total_amount=payload.get("total_amount"),
                is_taxable=payload.get("is_taxable"),
                company_id=company_id,
                client_id=client_id,
                created_by=request.user,
                updated_by=request.user,
                quotation_no="QUO-{}-{}".format(year, quotation_count + 1)
            )
            message = "Quotation Created"
        for selectedItem in payload.get("selectedItems"):
            try:
                if int(selectedItem.get("qty")) > 0:
                    QuotationItems.objects.create(
                        quotation=quotation_obj, item_id=selectedItem.get("id"), company_id=company_id,
                        client_id=client_id, qty=selectedItem.get("qty"), price_in_rs=selectedItem.get("price_in_rs"),
                        discount_per=selectedItem.get("discount_per"),
                        discount_amount=selectedItem.get("discount_amount"),
                        net_amount=selectedItem.get("net_amount"), gross_amount=selectedItem.get("gross_amount"),
                        tax_amount=selectedItem.get("tax_amount"), tax_data=selectedItem.get("tax_data"),
                        created_by=request.user, updated_by=request.user,
                        price_in_dollar=selectedItem.get("price_in_dollar")
                    )
            except Exception as e:
                print(e, "error")

        quotation_link = reverse("quotation_details", kwargs={"pk": encrypt(str(quotation_obj.id))})
        ActivityLogs.objects.create(
            company_id=company_id, client_id=client_id, message=message, created_by=request.user, url=quotation_link,
            model="Quotation", model_id=quotation_obj.id
        )

        return JsonResponse(
            data={
                "msg": "Quotation Successfully Saved", "status": True,
                "link": reverse("quotation_details", kwargs={"pk": encrypt(str(quotation_obj.id))})
            },
            status=200
        )
    except Exception as e:
        return JsonResponse(data={"msg": str(e), "status": False}, status=400)


class TaxTemplateListView(CustomListView):
    model = TaxTemplate
    menu = "tax_template"
    template_name = "accounts/tax_config/list.html"
    fields = "__all__"
    parent_menu = "accounts"
    is_client_filter = False


class TaxTemplateDetailsView(CustomUpdateView):
    model = TaxTemplate
    menu = "tax_template"
    template_name = "accounts/tax_config/detail.html"
    fields = "__all__"
    parent_menu = "accounts"
    object = None

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        instance = self.model.objects.get(id=self.decrypt(kwargs.get("pk")))
        context["data"] = instance
        context["tax_items"] = instance.tax_templates.all()
        return render(request, self.template_name, context)


class ItemsListView(CustomListView):
    model = Items
    menu = "items"
    template_name = "accounts/item/list.html"
    fields = "__all__"
    parent_menu = "accounts"


class ItemMetaDataManageClass:
    @staticmethod
    def add_or_create_metadata(instance, request):

        TEMP_ITEM_META_DATA = ITEM_META_DATA.get(request.session.get("current_client").get("key"), [])
        if request.FILES.get("image"):
            instance.image.save(request.FILES.get("image").name, request.FILES.get("image"))
        for itemImage in request.FILES.getlist("item_images"):
            ItemImages.objects.create(
                image=itemImage, item=instance, client_id=instance.client_id, company_id=instance.company_id,
                created_by_id=request.user.id
            )
        meta_data = []
        for meta_obj in TEMP_ITEM_META_DATA:
            if request.POST.get(meta_obj.get("name")):
                meta_obj["value"] = request.POST.get(meta_obj.get("name"))
                meta_data.append(meta_obj)

        instance.meta_data = meta_data


class ItemsDetailsView(CustomUpdateView, ItemMetaDataManageClass):
    model = Items
    menu = "items"
    template_name = "accounts/item/detail.html"
    fields = "__all__"
    parent_menu = "accounts"
    object = None

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        instance = self.model.objects.get(id=self.decrypt(kwargs.get("pk")))
        context["data"] = instance
        context["templates"] = TaxTemplate.objects.filter(status=True)
        context["companies"] = Company.objects.filter(client__in=self.request.session.get("client"))
        context["item_images"] = ItemImages.objects.filter(item=instance)
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        try:
            if not request.FILES.get("image"):
                request.POST._mutable = True
                del request.POST["image"]
                request.POST._mutable = False
            if not request.FILES.get("item_images"):
                request.POST._mutable = True
                del request.POST["item_images"]
                request.POST._mutable = False
            instance = self.model.objects.get(id=self.decrypt(kwargs.get("pk")))
            serializer = ItemsSerializers(data=request.POST, instance=instance)
            context = self.get_context_data(**kwargs)
            if serializer.is_valid():
                instance = serializer.save()
                self.add_or_create_metadata(instance, request)
                instance.save()
                return redirect('item_detail', pk=self.encrypt(str(instance.id)))
            else:
                context["errors"] = serializer.errors
            return redirect('item_detail', pk=self.encrypt(str(instance.id)))
        except Exception as e:
            print(e, "===")
            return redirect('item_list')


class ItemsCreateView(CustomCreateView, ItemMetaDataManageClass):
    model = Items
    menu = "items"
    template_name = "accounts/item/create.html"
    fields = "__all__"
    parent_menu = "accounts"
    object = None

    def get_context_data(self, **kwargs):
        context = self.get_context(**kwargs)
        context["templates"] = TaxTemplate.objects.filter(status=True)
        context["meta_data"] = ITEM_META_DATA.get(self.request.session.get("current_client").get("key"), [])
        context["companies"] = Company.objects.filter(client__in=self.request.session.get("client"))
        return context

    def post(self, request, *args, **kwargs):
        serializer = ItemsSerializers(data=request.POST)
        context = self.get_context_data(**kwargs)
        if serializer.is_valid():
            instance = serializer.save()
            instance.client_id = request.session.get("client")[0]
            self.add_or_create_metadata(instance, request)
            instance.save()
            return redirect('item_detail', pk=self.encrypt(str(instance.id)))
        else:
            context["errors"] = serializer.errors
        return render(request, self.template_name, context)


class TermsAndConditionsListView(CustomListView):
    model = TermsAndConditions
    menu = "terms_and_condition"
    template_name = "accounts/terms_and_condition/list.html"
    fields = "__all__"
    parent_menu = "accounts"


class TermsAndConditionsDetailsView(CustomUpdateView):
    model = TermsAndConditions
    menu = "terms_and_condition"
    template_name = "accounts/terms_and_condition/detail.html"
    fields = "__all__"
    parent_menu = "accounts"
    object = None

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        instance = self.model.objects.get(id=self.decrypt(kwargs.get("pk")))
        context["data"] = instance
        context["companies"] = Company.objects.filter(client__in=self.request.session.get("client"))
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        try:
            instance = self.model.objects.get(id=self.decrypt(kwargs.get("pk")))
            serializer = TermsAndConditionsSerializers(data=request.POST, instance=instance)
            context = self.get_context_data(**kwargs)
            if serializer.is_valid():
                instance = serializer.save()
                return redirect('terms_and_condition_details', pk=self.encrypt(str(instance.id)))
            else:
                context["errors"] = serializer.errors
            return redirect('terms_and_condition_details', pk=self.encrypt(str(instance.id)))
        except Exception as e:
            return redirect('terms_and_condition_list')


class TermsAndConditionsCreateView(CustomCreateView):
    model = TermsAndConditions
    menu = "terms_and_condition"
    template_name = "accounts/terms_and_condition/create.html"
    fields = "__all__"
    parent_menu = "accounts"
    object = None

    def get_context_data(self, **kwargs):
        context = self.get_context(**kwargs)
        context["companies"] = Company.objects.filter(client__in=self.request.session.get("client"))
        return context

    def post(self, request, *args, **kwargs):
        serializer = TermsAndConditionsSerializers(data=request.POST)
        context = self.get_context_data(**kwargs)
        if serializer.is_valid():
            instance = serializer.save()
            instance.client_id = request.session.get("client")[0]
            instance.save()
            return redirect('terms_and_condition_details', pk=self.encrypt(str(instance.id)))
        else:
            context["errors"] = serializer.errors
        return render(request, self.template_name, context)


class CustomerListView(CustomListView):
    model = Customer
    menu = "customer"
    template_name = "accounts/customer/list.html"
    fields = "__all__"
    parent_menu = "accounts"


class CustomerDetailsView(CustomUpdateView):
    model = Customer
    menu = "customer"
    template_name = "accounts/customer/detail.html"
    fields = "__all__"
    parent_menu = "accounts"
    object = None

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        instance = self.model.objects.get(id=self.decrypt(kwargs.get("pk")))
        context["data"] = instance
        context["companies"] = Company.objects.filter(client__in=self.request.session.get("client"))
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        try:
            instance = self.model.objects.get(id=self.decrypt(kwargs.get("pk")))
            serializer = CustomerSerializers(data=request.POST, instance=instance)
            context = self.get_context_data(**kwargs)
            if serializer.is_valid():
                instance = serializer.save()
                return redirect('customer_details', pk=self.encrypt(str(instance.id)))
            else:
                context["errors"] = serializer.errors
            return redirect('customer_details', pk=self.encrypt(str(instance.id)))
        except Exception as e:
            return redirect('customer_list')


class CustomerCreateView(CustomCreateView):
    model = Customer
    menu = "customer"
    template_name = "accounts/customer/create.html"
    fields = "__all__"
    parent_menu = "accounts"
    object = None

    def get_context_data(self, **kwargs):
        context = self.get_context(**kwargs)
        context["companies"] = Company.objects.filter(client__in=self.request.session.get("client"))
        return context

    def post(self, request, *args, **kwargs):
        serializer = CustomerSerializers(data=request.POST)
        context = self.get_context_data(**kwargs)
        if serializer.is_valid():
            instance = serializer.save()
            instance.client_id = request.session.get("client")[0]
            instance.save()
            return redirect('customer_details', pk=self.encrypt(str(instance.id)))
        else:
            context["errors"] = serializer.errors
        return render(request, self.template_name, context)


class AddressListView(CustomListView):
    model = Address
    menu = "address"
    template_name = "accounts/address/list.html"
    fields = "__all__"
    parent_menu = "accounts"


class AddressDetailsView(CustomUpdateView):
    model = Address
    menu = "address"
    template_name = "accounts/address/detail.html"
    fields = "__all__"
    parent_menu = "accounts"
    object = None

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        instance = self.model.objects.get(id=self.decrypt(kwargs.get("pk")))
        context["data"] = instance
        context["companies"] = Company.objects.filter(client__in=self.request.session.get("client"))
        context["address_type"] = [
            ("Shipping Address", "Shipping Address"), ("Billing Address", "Billing Address"),
            ("Billing & Shipping Address", "Billing & Shipping Address")
        ]
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        try:
            instance = self.model.objects.get(id=self.decrypt(kwargs.get("pk")))
            serializer = AddressSerializers(data=request.POST, instance=instance)
            context = self.get_context_data(**kwargs)
            if serializer.is_valid():
                instance = serializer.save()
                return redirect('address_details', pk=self.encrypt(str(instance.id)))
            else:
                context["errors"] = serializer.errors
            return redirect('address_details', pk=self.encrypt(str(instance.id)))
        except Exception as e:
            return redirect('address_list')


class AddressCreateView(CustomCreateView):
    model = Address
    menu = "address"
    template_name = "accounts/address/create.html"
    fields = "__all__"
    parent_menu = "accounts"
    object = None

    def get_context_data(self, **kwargs):
        context = self.get_context(**kwargs)
        context["companies"] = Company.objects.filter(client__in=self.request.session.get("client"))
        context["address_type"] = [
            ("Shipping Address", "Shipping Address"), ("Billing Address", "Billing Address"),
            ("Billing & Shipping Address", "Billing & Shipping Address")
        ]
        return context

    def post(self, request, *args, **kwargs):
        serializer = AddressSerializers(data=request.POST)
        context = self.get_context_data(**kwargs)
        if serializer.is_valid():
            instance = serializer.save()
            instance.client_id = request.session.get("client")[0]
            instance.save()
            return redirect('address_details', pk=self.encrypt(str(instance.id)))
        else:
            context["errors"] = serializer.errors
        return render(request, self.template_name, context)


class QuotationListView(CustomListView):
    model = Quotation
    menu = "quotation"
    template_name = "accounts/quotation/list.html"
    fields = "__all__"
    parent_menu = "accounts"


class QuotationCreateView(CustomCreateView):
    model = Quotation
    menu = "quotation"
    template_name = "accounts/quotation/create.html"
    fields = "__all__"
    parent_menu = "accounts"
    object = None

    def get_context_data(self, **kwargs):
        context = self.get_context(**kwargs)
        context["companies"] = Company.objects.filter(client__in=self.request.session.get("client"))
        context["terms_and_conditions"] = TermsAndConditions.objects.filter(
            client__in=self.request.session.get("client"))
        context["bank_details"] = BankDetails.objects.filter(client__in=self.request.session.get("client"))
        return context

    def post(self, request, *args, **kwargs):
        serializer = QuotationSerializers(data=request.POST)
        context = self.get_context_data(**kwargs)
        if serializer.is_valid():
            instance = serializer.save()
            instance.client_id = request.session.get("client")[0]
            instance.save()
            return redirect('quotation_details', pk=self.encrypt(str(instance.id)))
        else:
            context["errors"] = serializer.errors
        return render(request, self.template_name, context)


class QuotationDetailsView(CustomUpdateView):
    model = Quotation
    menu = "quotation"
    template_name = "accounts/quotation/detail.html"
    fields = "__all__"
    parent_menu = "accounts"
    object = None

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        instance = self.model.objects.get(id=self.decrypt(kwargs.get("pk")))
        context["data"] = instance
        context["companies"] = Company.objects.filter(client__in=self.request.session.get("client"))
        context["terms_and_conditions"] = TermsAndConditions.objects.filter(
            client__in=self.request.session.get("client")
        )
        context["bank_details"] = BankDetails.objects.filter(client__in=self.request.session.get("client"))
        context["quotation_json"] = None
        PAYLOAD = {
            "id": instance.id,
            "customer": CustomerDetailSerializers(instance.customer).data,
            "net_amount": instance.net_amount,
            "discount_percentage": instance.discount_percentage,
            "discount_amount": instance.discount_amount,
            "gross_amount": instance.gross_amount,
            "total_amount": instance.total_amount,
            "tax_amount": instance.tax_amount,
            "tax_data": instance.tax_data,
            "is_taxable": instance.is_taxable,
            "selectedItems": [],
            "company": CompanyDetailSerializers(instance.company).data,
            "date": instance.date.isoformat()
        }

        quotationItems = QuotationItems.objects.filter(quotation=instance)
        for quotationItem in quotationItems:
            tax_template = []
            if quotationItem.item.tax_template:
                tax_template = TaxTemplateItemsSerializers(quotationItem.item.tax_template.tax_templates.all(),
                                                           many=True).data
            igst_tax_template = []
            if quotationItem.item.igst_tax_template:
                igst_tax_template = TaxTemplateItemsSerializers(
                    quotationItem.item.igst_tax_template.tax_templates.all(), many=True).data
            PAYLOAD["selectedItems"].append({
                "id": quotationItem.item.id,
                "qty": quotationItem.qty,
                "price_in_rs": quotationItem.price_in_rs,
                "price_in_dollar": quotationItem.price_in_dollar,
                "discount_per": quotationItem.discount_per,
                "discount_amount": quotationItem.discount_amount,
                "net_amount": quotationItem.net_amount,
                "gross_amount": quotationItem.gross_amount,
                "tax_amount": quotationItem.tax_amount,
                "tax_data": quotationItem.tax_data,
                "name": quotationItem.item.name,
                "description": quotationItem.item.description,
                "code": quotationItem.item.code,
                "tax_template": tax_template,
                "igst_tax_template": igst_tax_template
            })
        context["PAYLOAD"] = json.dumps(PAYLOAD)
        return render(request, self.template_name, context)


def approve_quotation(request, pk):
    quotation_obj = Quotation.objects.get(id=decrypt(pk))
    quotation_obj.status = "Approved"
    quotation_obj.approver = request.user
    quotation_obj.approved_date = datetime.datetime.now()
    quotation_obj.save()
    message = "Quotation Approved"
    quotation_link = reverse("quotation_details", kwargs={"pk": encrypt(str(quotation_obj.id))})
    ActivityLogs.objects.create(
        company_id=quotation_obj.company_id, client_id=quotation_obj.client_id, message=message,
        created_by=request.user, url=quotation_link, model="Quotation", model_id=quotation_obj.id
    )
    return redirect('quotation_details', pk=pk)


def approve_invoice(request, pk):
    invoice_obj = Invoice.objects.get(id=decrypt(pk))
    invoice_obj.status = "Approved"
    invoice_obj.approver = request.user
    invoice_obj.approved_date = datetime.datetime.now()
    invoice_obj.save()
    message = "Invoice Approved"
    invoice_link = reverse("invoice_details", kwargs={"pk": encrypt(str(invoice_obj.id))})
    ActivityLogs.objects.create(
        company_id=invoice_obj.company_id, client_id=invoice_obj.client_id, message=message,
        created_by=request.user, url=invoice_link, model="Invoice", model_id=invoice_obj.id
    )
    return redirect('invoice_details', pk=pk)


def quotation_print_template(request, pk):
    quotation_obj = Quotation.objects.get(id=decrypt(pk))
    context = blank_layout()
    context["data"] = quotation_obj
    context["amount_in_words"] = num2words(quotation_obj.net_amount, lang ='en_IN').replace("-", " ")
    return render(request, 'accounts/quotation/print.html', context)


def invoice_print_template(request, pk):
    invoice_obj = Invoice.objects.get(id=decrypt(pk))
    context = blank_layout()
    context["data"] = invoice_obj
    context["amount_in_words"] = num2words(invoice_obj.net_amount, lang ='en_IN').replace("-", " ")
    return render(request, 'accounts/invoice/print.html', context)


@api_view(['POST', ])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def save_invoice(request):
    try:
        client_id = request.session.get("client")[0]
        payload = request.data
        company_id = payload.get("company").get("id")
        message = "Invoice Updated"
        if payload.get("id"):
            invoice_obj = Invoice.objects.get(id=payload.get("id"))
            invoice_obj.date = payload.get("date")
            invoice_obj.terms_and_condition_id = payload.get("terms_and_condition")
            invoice_obj.bank_details_id = payload.get("bank_detail")
            invoice_obj.net_amount = payload.get("net_amount")
            invoice_obj.discount_percentage = payload.get("discount_percentage")
            invoice_obj.discount_amount = payload.get("discount_amount")
            invoice_obj.gross_amount = payload.get("gross_amount")
            invoice_obj.tax_amount = payload.get("tax_amount")
            invoice_obj.tax_data = payload.get("tax_data")
            invoice_obj.po_no = payload.get("po_no")
            invoice_obj.po_date = payload.get("po_date")
            invoice_obj.total_amount = payload.get("total_amount")
            invoice_obj.is_taxable = payload.get("is_taxable")
            invoice_obj.updated_by = request.user
            invoice_obj.save()

            InvoiceItems.objects.filter(invoice=invoice_obj).delete()

        else:
            year = datetime.date.today().year
            invoices_count = Invoice.objects.filter(client_id=client_id, date__year=year).count()
            invoice_obj = Invoice.objects.create(
                date=payload.get("date"), customer_id=payload.get("customer").get("id"),
                shipping_address_id=payload.get("customer").get("shipping_address").get("id"),
                billing_address_id=payload.get("customer").get("billing_address").get("id"),
                terms_and_condition_id=payload.get("terms_and_condition"),
                bank_details_id=payload.get("bank_detail"),
                net_amount=payload.get("net_amount"),
                discount_percentage=payload.get("discount_percentage"),
                discount_amount=payload.get("discount_amount"),
                gross_amount=payload.get("gross_amount"),
                tax_amount=payload.get("tax_amount"),
                tax_data=payload.get("tax_data"),
                total_amount=payload.get("total_amount"),
                company_id=company_id,
                client_id=client_id,
                created_by=request.user,
                updated_by=request.user,
                po_no=payload.get("po_no"),
                po_date=payload.get("po_date"),
                is_taxable=payload.get("is_taxable"),
                invoice_no="INV-{}-{}".format(year, invoices_count+1)
            )
            message = "Invoice Created"
        for selectedItem in payload.get("selectedItems"):
            try:
                if int(selectedItem.get("qty")) > 0:
                    InvoiceItems.objects.create(
                        invoice=invoice_obj, item_id=selectedItem.get("id"), company_id=company_id,
                        client_id=client_id, qty=selectedItem.get("qty"), price_in_rs=selectedItem.get("price_in_rs"),
                        discount_per=selectedItem.get("discount_per"),
                        discount_amount=selectedItem.get("discount_amount"),
                        net_amount=selectedItem.get("net_amount"), gross_amount=selectedItem.get("gross_amount"),
                        tax_amount=selectedItem.get("tax_amount"), tax_data=selectedItem.get("tax_data"),
                        created_by=request.user, updated_by=request.user,
                        price_in_dollar=selectedItem.get("price_in_dollar")
                    )
            except Exception as e:
                print(e, "error")

        invoice_link = reverse("invoice_details", kwargs={"pk": encrypt(str(invoice_obj.id))})
        ActivityLogs.objects.create(
            company_id=company_id, client_id=client_id, message=message, created_by=request.user, url=invoice_link,
            model="Invoice", model_id=invoice_obj.id
        )
        return JsonResponse(
            data={
                "msg": "Invoice Successfully Saved", "status": True,
                "link": invoice_link
            },
            status=200
        )
    except Exception as e:
        return JsonResponse(data={"msg": str(e), "status": False}, status=400)


class InvoiceListView(CustomListView):
    model = Invoice
    menu = "invoice"
    template_name = "accounts/invoice/list.html"
    fields = "__all__"
    parent_menu = "accounts"


class InvoiceCreateView(CustomCreateView):
    model = Invoice
    menu = "invoice"
    template_name = "accounts/invoice/create.html"
    fields = "__all__"
    parent_menu = "accounts"
    object = None

    def get_context_data(self, **kwargs):
        context = self.get_context(**kwargs)
        context["companies"] = Company.objects.filter(client__in=self.request.session.get("client"))
        context["terms_and_conditions"] = TermsAndConditions.objects.filter(
            client__in=self.request.session.get("client"))
        context["bank_details"] = BankDetails.objects.filter(client__in=self.request.session.get("client"))
        return context

    def post(self, request, *args, **kwargs):
        serializer = InvoiceSerializers(data=request.POST)
        context = self.get_context_data(**kwargs)
        if serializer.is_valid():
            instance = serializer.save()
            instance.client_id = request.session.get("client")[0]
            instance.save()
            return redirect('quotation_details', pk=self.encrypt(str(instance.id)))
        else:
            context["errors"] = serializer.errors
        return render(request, self.template_name, context)


class InvoiceDetailsView(CustomUpdateView):
    model = Invoice
    menu = "invoice"
    template_name = "accounts/invoice/detail.html"
    fields = "__all__"
    parent_menu = "accounts"
    object = None

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        instance = self.model.objects.get(id=self.decrypt(kwargs.get("pk")))
        context["data"] = instance
        context["companies"] = Company.objects.filter(client__in=self.request.session.get("client"))
        context["terms_and_conditions"] = TermsAndConditions.objects.filter(
            client__in=self.request.session.get("client")
        )
        context["bank_details"] = BankDetails.objects.filter(client__in=self.request.session.get("client"))
        context["quotation_json"] = None
        PAYLOAD = {
            "id": instance.id,
            "customer": CustomerDetailSerializers(instance.customer).data,
            "net_amount": instance.net_amount,
            "discount_percentage": instance.discount_percentage,
            "discount_amount": instance.discount_amount,
            "gross_amount": instance.gross_amount,
            "tax_amount": instance.tax_amount,
            "tax_data": instance.tax_data,
            "total_amount": instance.total_amount,
            "selectedItems": [],
            "company": CompanyDetailSerializers(instance.company).data,
            "date": instance.date.isoformat(),
            "po_no": instance.po_no,
            "is_taxable": instance.is_taxable,
            "po_date": instance.po_date.isoformat() if instance.po_date else None,
        }

        quotationItems = InvoiceItems.objects.filter(invoice=instance)
        for quotationItem in quotationItems:
            tax_template = []
            if quotationItem.item.tax_template:
                tax_template = TaxTemplateItemsSerializers(quotationItem.item.tax_template.tax_templates.all(),
                                                           many=True).data
            igst_tax_template = []
            if quotationItem.item.igst_tax_template:
                igst_tax_template = TaxTemplateItemsSerializers(
                    quotationItem.item.igst_tax_template.tax_templates.all(), many=True).data
            PAYLOAD["selectedItems"].append({
                "id": quotationItem.item.id,
                "qty": quotationItem.qty,
                "price_in_rs": quotationItem.price_in_rs,
                "price_in_dollar": quotationItem.price_in_dollar,
                "discount_per": quotationItem.discount_per,
                "discount_amount": quotationItem.discount_amount,
                "net_amount": quotationItem.net_amount,
                "gross_amount": quotationItem.gross_amount,
                "tax_amount": quotationItem.tax_amount,
                "tax_data": quotationItem.tax_data,
                "name": quotationItem.item.name,
                "description": quotationItem.item.description,
                "code": quotationItem.item.code,
                "tax_template": tax_template,
                "igst_tax_template": igst_tax_template
            })
        context["PAYLOAD"] = json.dumps(PAYLOAD)
        context["activities"] = ActivityLogs.objects.filter(model="Invoice", model_id=instance.id)
        return render(request, self.template_name, context)


class PaymentCollectionLinksView(CustomCreateView):
    model = PaymentCollectionLinks
    menu = "customer"
    template_name = "accounts/payments/generate_payment_link.html"
    fields = "__all__"
    parent_menu = "accounts"
    object = None

    def get_context_data(self, **kwargs):
        context = self.get_context(**kwargs)
        context["companies"] = Company.objects.filter(client__in=self.request.session.get("client"))
        return context

    def post(self, request, *args, **kwargs):
        serializer = PaymentCollectionLinksSerializers(data=request.POST)
        context = self.get_context_data(**kwargs)
        if serializer.is_valid():
            instance = serializer.save()
            instance.client_id = request.session.get("client")[0]
            instance.customer_id = decrypt(request.GET.get("customer")) if request.GET.get("customer") else None
            instance.invoice_id = decrypt(request.GET.get("invoice")) if request.GET.get("invoice") else None
            instance.save()

            import requests
            from django.conf import settings

            url = "https://api.razorpay.com/v1/payment_links"

            payload = {
                "amount": int(instance.amount) * 100,
                "currency": instance.currency,
                "accept_partial": True,
                "first_min_partial_amount": 100,
                "description": "Payment For {}".format(instance.company.name),
                "customer": {
                    "name": instance.customer.name,
                    "email": instance.customer.email,
                    "contact": instance.customer.phone
                },
                "notify":{
                    "sms": True,
                    "email": True
                },
                "reminder_enable": True,
                "notes": {
                    "policy_name": "Payment For {}".format(instance.company.name)
                },
                "callback_url": "http://portal.botdigitalsolutions.com/link-payment-success?link-uuid={}".format(
                    instance.id
                ),
                "callback_method": "get"
            }
            res = requests.post(url, json=payload, auth=(settings.RAZOR_PAY_ID, settings.RAZOR_PAY_KEY))
            response_data = res.json()
            instance.payload = payload
            instance.response = response_data
            if res.status_code == 200:
                context["success_url"] = res.json()["short_url"]
                instance.status = "Generated"
            else:
                context["errors"] = ["Payment Link No Generated"]
                instance.status = "Failed"
            instance.save()
        else:
            context["errors"] = serializer.errors
        return render(request, self.template_name, context)


class PaymentCollectionLinksListView(CustomListView):
    model = PaymentCollectionLinks
    menu = "payment_links"
    template_name = "accounts/payments/list.html"
    fields = "__all__"
    parent_menu = "accounts"


class PaymentCollectionLinksDetailsView(CustomUpdateView):
    model = PaymentCollectionLinks
    menu = "payment_links"
    template_name = "accounts/payments/detail.html"
    fields = "__all__"
    parent_menu = "accounts"
    object = None

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        instance = self.model.objects.get(id=self.decrypt(kwargs.get("pk")))
        context["data"] = instance
        if instance.response and instance.response.get("id"):
            if not instance.response.get("payments"):
                import requests
                from django.conf import settings
                url = "https://api.razorpay.com/v1/payment_links/{}".format(instance.response.get("id"))
                res = requests.get(url, auth=(settings.RAZOR_PAY_ID, settings.RAZOR_PAY_KEY))
                if res.status_code == 200:
                    response_data = res.json()
                    if response_data.get("payments"):
                        instance.response = response_data
                        instance.status = "Paid"
                        instance.save()
                    else:
                        context["status"] = "Payment Not Done"
            else:
                context["payments"] = instance.response.get("payments")
        else:
            context["status"] = "Something Went Wrong"
        return render(request, self.template_name, context)
