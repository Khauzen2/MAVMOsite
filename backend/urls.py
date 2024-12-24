# backend/urls.py
from django.urls import path
from products.views import ProductList

urlpatterns = [
    path('api/products/', ProductList.as_view(), name='product-list'),
]
