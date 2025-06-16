from datetime import timedelta

from django.utils.safestring import mark_safe
from django import template
from website.template_helpers.theme import TemplateHelper

register = template.Library()


# Register tags as an adapter for the Theme class usage in the HTML template


@register.simple_tag
def get_theme_variables(scope):
    return mark_safe(TemplateHelper.get_theme_variables(scope))


@register.simple_tag
def timestamp_format(value):
    ist_time = value + timedelta(hours=5, minutes=30)
    return ist_time.strftime("%d %B, %Y %H:%M %p")

