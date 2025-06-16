from django.db.models import Q


def get_search_query(request, search_cols=None):
    search_value = request.GET.get("search")
    query = Q()
    if search_cols and search_value:
        for col in search_cols:
            if search_value:
                query |= Q(**{"{}__icontains".format(col): search_value})

    return query
