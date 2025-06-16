import base64
from website import TemplateLayout
from permission.is_authenticated import IsLoggedInMixin
from django.views.generic import ListView, CreateView, UpdateView, DeleteView

from django.core.paginator import Paginator
from django.core.paginator import EmptyPage
from django.core.paginator import PageNotAnInteger
from website.template_helpers.theme import TemplateHelper


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


class CustomListView(IsLoggedInMixin, ListView):
    model = None
    paginate_by = 10
    template_name = None
    parent_menu = ""
    menu = ""
    delete_status = []
    filter_col = []
    pk_filter = {}
    search = []
    static_values = {}
    order_by = ("-created_at", )
    is_client_filter = True

    def get_parent_menu(self):
        return self.parent_menu

    def get_menu(self):
        return self.menu

    def get_queryset(self):
        queryset = self.model.objects.all().order_by(*self.order_by)
        if self.is_client_filter:
            queryset = queryset.filter(client__in=self.request.session.get("client"))
        if self.pk_filter:
            for key, value in self.pk_filter.items():
                queryset = queryset.filter(
                    **{"{}".format(key): self.request.resolver_match.kwargs.get("{}".format(value))}
                )
        if self.filter_col:
            query = {}
            for col in self.filter_col:
                if self.request.GET.get(col):
                    query[col] = self.request.GET.get(col)
            queryset = queryset.filter(**query)

        search_value = self.request.GET.get("search")
        from django.db.models import Q
        if self.search and search_value:
            query = Q()
            for col in self.search:
                if search_value:
                    query |= Q(**{"{}__icontains".format(col): search_value})
            queryset = queryset.filter(query)

        return queryset

    # Predefined function
    def get_context_data(self, **kwargs):
        context = TemplateLayout.init(self, super().get_context_data(**kwargs))
        data = self.get_paginated_data()
        context['list'] = data
        context['menu'] = self.get_menu()
        context['parent_menu'] = self.get_parent_menu()
        context["DELETE_STATUS"] = self.delete_status
        context["static_values"] = self.static_values
        return context

    def get_paginated_data(self):

        paginator = Paginator(self.get_queryset(), self.paginate_by)
        page = self.request.GET.get('page')
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)
        return data


class CustomCreateView(IsLoggedInMixin, CreateView):
    model = None
    template_name = None
    parent_menu = ""
    menu = ""
    fields = "__all__"

    def get_context(self, **kwargs):
        context = TemplateLayout.init(self, super().get_context_data(**kwargs))
        context['menu'] = self.menu
        context['parent_menu'] = self.parent_menu
        return context

    def get_context_data(self, **kwargs):
        return self.get_context(**kwargs)

    @staticmethod
    def encrypt(value):
        return base64.b64encode(bytes("{}".format(value), "utf-8")).decode('utf-8')


class CustomUpdateView(IsLoggedInMixin, UpdateView):
    model = None
    template_name = None
    parent_menu = ""
    menu = ""
    fields = "__all__"

    def get_parent_menu(self):
        return self.parent_menu

    def get_menu(self):
        return self.menu

    # Predefined function
    def get_context_data(self, **kwargs):
        context = TemplateLayout.init(self, super().get_context_data(**kwargs))
        context['menu'] = self.menu
        context['parent_menu'] = self.parent_menu
        return context

    @staticmethod
    def decrypt(encoded_string):
        return base64.b64decode(bytes(encoded_string, "utf-8")).decode("utf-8")

    @staticmethod
    def encrypt(value):
        return base64.b64encode(bytes("{}".format(value), "utf-8")).decode('utf-8')


class CustomDeleteView(IsLoggedInMixin, DeleteView):
    model = None
    template_name = None
    parent_menu = ""
    menu = ""
    fields = "__all__"

    def get_parent_menu(self):
        return self.parent_menu

    def get_menu(self):
        return self.menu

    def get_context_data(self, **kwargs):
        context = TemplateLayout.init(self, super().get_context_data(**kwargs))
        context['menu'] = self.menu
        context['parent_menu'] = self.parent_menu
        return context
