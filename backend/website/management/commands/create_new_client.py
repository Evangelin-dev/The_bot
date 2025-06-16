from django.core.management.base import BaseCommand
from user.models import User, Clients
import uuid


class Command(BaseCommand):
    help = "Setup New Client with admin user"

    def add_arguments(self, parser):
        parser.add_argument("client_name", type=str)
        parser.add_argument("email", type=str)

    def handle(self, *args, **options):
        client_name = options.get("client_name")
        client_key = client_name.lower().replace(" ", "-")
        client_obj, _ = Clients.objects.get_or_create(
            name=client_name, key=client_key, defaults={"client_id": uuid.uuid4(), "secret":uuid.uuid4().hex}
        )
        if client_obj:
            user_obj, _ = User.objects.get_or_create(email=options.get("email"))
            if user_obj:
                TEMP_PASSWORD = uuid.uuid4().hex
                user_obj.is_admin = False
                user_obj.is_staff = False
                user_obj.set_password(TEMP_PASSWORD)
                user_obj.save()

                client_obj.user.add(user_obj)

                self.stdout.write(
                    self.style.SUCCESS(TEMP_PASSWORD)
                )

        self.stdout.write(
            self.style.SUCCESS('Client Created Successfully')
        )
