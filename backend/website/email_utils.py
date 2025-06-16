import logging
import threading

from django.template import Context, Template
from .models import Emails
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.core.mail import get_connection, send_mass_mail, send_mail

logger = logging.getLogger(__name__)


def get_mail_connection(config):
    connection = get_connection(
        host=config.host, port=config.port, username=config.username,
        password=config.password, use_tls=True if config.connection_type == "TLS" else False,
        use_ssl=True if config.connection_type == "SSL" else False
    )
    return connection


def send_email(*args, **kwargs):
    email_obj = Emails.objects.get(id=args[0])
    try:
        config = email_obj.email_account
        connection = get_mail_connection(config)
        message = EmailMessage(
            email_obj.subject, email_obj.body, config.sender, [email_obj.email],
            cc=email_obj.cc.split(","), bcc=email_obj.bcc.split(","), connection=connection
        )
        for attach in email_obj.email_attachment.all():
            try:
                message.attach(attach.file.name, attach.file.read())
            except Exception as e:
                logger.error("ERROR while attaching file - {}".format(attach.file.name))

        message.content_subtype = 'html'
        message.send()

        email_obj.status = "Email Sent"
        email_obj.save()

    except Exception as e:
        email_obj.status = "Email Failed"
        email_obj.save()
        logger.error("ERROR send_email - {}".format(str(e)))