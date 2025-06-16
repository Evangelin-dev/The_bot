import uuid

from rest_framework.decorators import api_view, permission_classes
from django.views.generic import TemplateView, FormView
from django.http import JsonResponse

from website.template_helpers.theme import TemplateHelper
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect, reverse
from user.models import User, Clients
from django.contrib import messages


class AuthView(TemplateView):
    template_name = "auth_login_basic.html"

    # Predefined function
    def get_context_data(self, **kwargs):
        context = super(AuthView, self).get_context_data(**kwargs)

        # Update the context
        context.update(
            {
                "layout_path": TemplateHelper.set_layout("layout_blank.html", context),
            }
        )
        return context

    def post(self, request, *args, **kwargs):
        username = request.POST.get('email')
        password = request.POST.get('password')

        if not User.objects.filter(email=username).exists():
            messages.error(request, 'User Name and Password not matching')
            return redirect('auth-login')

        # Authenticate the user with the provided username and password
        user = authenticate(email=username, password=password)

        if user is None:
            messages.error(request, 'User Name and Password not matching')
            return redirect('auth-login')
        else:
            login(request, user)
            request.session['client'] = list(user.clients.all().values_list("id", flat=True))
            current_client = user.clients.all().first()
            request.session['current_client'] = {
                "id": current_client.id, "key": current_client.key, "client_id": str(current_client.client_id),
                "secret": str(current_client.secret)
            }
            return redirect("/")


def logout_view(request):
    logout(request)
    return redirect('auth-login')


@api_view(['POST'])
def register_new_client(request):
    try:
        client = Clients.objects.create(
            name=request.data.get("name"), client_id=uuid.uuid4(), secret=uuid.uuid4().hex
        )
        return JsonResponse(
            data={
                "msg": "Client Successfully created",
                "data": {
                    "client": client.client_id
                },
                "success": True
            }, status=200
        )
    except Exception as e:
        return JsonResponse(
            data={"msg": str(e), "data": {}, "success": False}, status=400
        )


@api_view(['POST'])
def register_user_to_client(request):
    try:
        user = User.objects.get(email=request.data.get("email"))
        client = Clients.objects.get(client_id=request.data.get("client_id"))
        if not client.user.filter(user=user).exists():
            client.user.add(user)
            return JsonResponse(
                data={
                    "msg": "Client Successfully created",
                    "data": {
                        "client": client.client_id
                    },
                    "success": True
                }, status=200
            )
        raise Exception("User Already Exist")
    except Exception as e:
        return JsonResponse(
            data={"msg": str(e), "data": {}, "success": False}, status=400
        )
