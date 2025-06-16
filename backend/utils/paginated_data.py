from django.core.paginator import Paginator
from django.core.paginator import EmptyPage
from django.core.paginator import PageNotAnInteger


def get_paginated_data(context, queryset, request):
    paginator = Paginator(queryset, 15)
    page = request.GET.get('page')
    try:
        data = paginator.page(page)
    except PageNotAnInteger:
        data = paginator.page(1)
    except EmptyPage:
        data = paginator.page(paginator.num_pages)
    page_obj = paginator.get_page(page)
    context["data"] = data
    context["page_obj"] = page_obj
    context["is_paginated"] = page_obj.has_next() or page_obj.has_previous()
