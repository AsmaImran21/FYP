from django import template
import json

register = template.Library()

@register.filter(name='json_decode')
def json_decode(value):
    return json.loads(value)