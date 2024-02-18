from django.urls import path
from .quickstart.views import all_items, submit_item, user_items

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('all_items/', all_items, name='all_items'),
    path('user_items/', user_items, name='user_items'),
    path('submit_item/', submit_item, name='submit_item'),
]