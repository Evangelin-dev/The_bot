import uuid
from django.contrib.auth.admin import UserAdmin

from django.contrib import admin
from .models import User, Clients

admin.site.site_header = 'The Bot Administration'
admin.site.index_title = 'The Bot Config'
admin.site.site_title = 'The Bot Administration'


admin.site.register(User)

class ClientsAdmin(admin.ModelAdmin):
    list_display = ("client_id", "name")

    def get_form(self, request, obj=None, **kwargs):
        form = super(ClientsAdmin, self).get_form(request, obj, **kwargs)
        form.base_fields['client_id'].initial = uuid.uuid4()
        form.base_fields['secret'].initial = uuid.uuid4().hex
        return form


admin.site.register(Clients, ClientsAdmin)
