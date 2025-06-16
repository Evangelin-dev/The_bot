from django.urls import path
from .views import AuthView, logout_view


urlpatterns = [
    path(
        "accounts/login/",
        AuthView.as_view(template_name="auth_login_basic.html"),
        name="auth-login",
    ),
    path("logout", logout_view, name="auth-logout")
]
