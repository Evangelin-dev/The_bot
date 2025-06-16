from rest_framework import serializers
from .models import *
from company.models import Company


class TaxTemplateSerializers(serializers.ModelSerializer):
    class Meta:
        model = TaxTemplate
        fields = "__all__"


class ItemsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Items
        fields = "__all__"


class TermsAndConditionsSerializers(serializers.ModelSerializer):
    class Meta:
        model = TermsAndConditions
        fields = "__all__"


class CustomerSerializers(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = "__all__"


class CustomerShortSerializers(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ("id", "name")


class AddressSerializers(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = "__all__"


class QuotationSerializers(serializers.ModelSerializer):
    class Meta:
        model = Quotation
        fields = "__all__"


class TaxTemplateItemsSerializers(serializers.ModelSerializer):
    class Meta:
        model = TaxTemplateItems
        fields = "__all__"


class ItemDetailSerializers(serializers.ModelSerializer):
    tax_template = serializers.SerializerMethodField()
    igst_tax_template = serializers.SerializerMethodField()

    @staticmethod
    def get_tax_template(obj):
        if obj.tax_template:
            return TaxTemplateItemsSerializers(obj.tax_template.tax_templates.all(), many=True).data
        return []

    @staticmethod
    def get_igst_tax_template(obj):
        if obj.igst_tax_template:
            return TaxTemplateItemsSerializers(obj.igst_tax_template.tax_templates.all(), many=True).data
        return []

    class Meta:
        model = Items
        fields = "__all__"


class CustomerDetailSerializers(serializers.ModelSerializer):
    shipping_address = AddressSerializers()
    billing_address = AddressSerializers()


    class Meta:
        model = Customer
        fields = "__all__"


class CompanyDetailSerializers(serializers.ModelSerializer):

    class Meta:
        model = Company
        fields = "__all__"


class InvoiceSerializers(serializers.ModelSerializer):
    class Meta:
        model = Invoice
        fields = "__all__"


class PaymentCollectionLinksSerializers(serializers.ModelSerializer):
    class Meta:
        model = PaymentCollectionLinks
        fields = "__all__"


class ItemShortImagesSerializers(serializers.ModelSerializer):

    class Meta:
        model = ItemImages
        fields = ("image", )


class ItemListSerializers(serializers.ModelSerializer):
    gallery_images = serializers.SerializerMethodField()

    @staticmethod
    def get_gallery_images(item_obj):
        return ItemShortImagesSerializers(item_obj.item_images.all(), many=True).data

    class Meta:
        model = Items
        fields = (
            "id", "name", "description", "code", "hsn_code", "image", "price_in_rs", "price_in_dollar", "meta_data",
            "gallery_images", "status"
        )
