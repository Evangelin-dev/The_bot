from django.contrib import admin
from .models import *

admin.site.register(TaxTemplate)
admin.site.register(TaxTemplateItems)
admin.site.register(Items)
admin.site.register(Customer)
admin.site.register(PaymentCollectionLinks)
admin.site.register(Quotation)
admin.site.register(Invoice)
