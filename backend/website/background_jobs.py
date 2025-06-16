import logging
import threading
import uuid

import base64

import pandas as pd

from django.template import Context, Template
from .models import (
    EmailCampaignMailList, Leads, EmailCampaign, BulkLeads, EmailList, UnSubscribeEmailList, EmailCampaignFiles
)
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from .email_utils import get_mail_connection
from django.core.mail import send_mass_mail, send_mail


logger = logging.getLogger(__name__)


def get_formatted_email(body, name):
    t = Template(body)
    c = Context({'full_name': name})
    return t.render(c)


def send_campaign_email(*args, **kwargs):
    try:
        un_subscribe_emails = list(
            UnSubscribeEmailList.objects.all().values_list("email", flat=True)
        )
        email_campaign_obj = EmailCampaign.objects.get(id=args[0])
        lead_ids = kwargs.get("lead_ids")
        email_template_obj = email_campaign_obj.email_template
        email_account_obj = email_campaign_obj.email_account
        email_connection = get_mail_connection(email_account_obj)
        email_sender = "{} <{}>".format(email_account_obj.sender_name, email_account_obj.sender)
        if kwargs.get("email_campaign_file"):
            email_campaign_files = EmailCampaignFiles.objects.get(id=kwargs.get("email_campaign_file"))
            dataset_df = pd.read_csv(email_campaign_files.file, dtype=str).fillna("")
            dataset_df.columns = dataset_df.columns.str.lower()
            for index, row in dataset_df.iterrows():
                try:
                    lead_campaign = {
                        "email_list_id": None,
                        "email_campaign": email_campaign_obj,
                        "status": "Draft",
                        "email": row.get("email"),
                        "first_name": row.get("first_name"),
                        "last_name": row.get("last_name"),
                        "client_id": email_campaign_obj.client_id
                    }

                    format_campaign_email(
                        email_template_obj, lead_campaign, un_subscribe_emails, email_sender,
                        email_connection
                    )

                    EmailCampaignMailList.objects.create(**lead_campaign)
                except Exception as e:
                    logger.error("ERROR while creating file campaign {}".format(str(e)))

        for lead_id in lead_ids:
            try:
                if kwargs.get("email_type") == "leads":
                    lead_obj = Leads.objects.get(id=lead_id)
                    email_list = EmailList.objects.create(
                        email=lead_obj.email, first_name=lead_obj.first_name, last_name=lead_obj.last_name,
                        status="In Progress", client_id=email_campaign_obj.client_id
                    )
                else:
                    email_list = EmailList.objects.get(id=lead_id)

                lead_campaign = {
                    "email_list_id": email_list.id,
                    "email_campaign": email_campaign_obj,
                    "status": "Draft",
                    "email": email_list.email,
                    "first_name": email_list.first_name,
                    "last_name": email_list.last_name,
                    "client_id": email_campaign_obj.client_id
                }

                format_campaign_email(
                    email_template_obj, lead_campaign, un_subscribe_emails, email_sender, email_connection
                )

                EmailCampaignMailList.objects.create(**lead_campaign)

            except Exception as e:
                logger.error("ERROR while creating lead campaign {}".format(str(e)))

        email_campaign_obj.status = "Email Sent"
        email_campaign_obj.save()

    except Exception as e:
        import os, sys
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        print(exc_type, fname, exc_tb.tb_lineno)
        logger.error("ERROR send_campaign_email - {}".format(str(e)))


def format_campaign_email(email_template_obj, lead_campaign, un_subscribe_emails, sender, connection):
    email = lead_campaign.get("email")
    first_name = lead_campaign.get("first_name")
    last_name = lead_campaign.get("last_name")
    if email not in un_subscribe_emails:
        try:
            email_unsubscribe_link = base64.b64encode(bytes(email, "utf-8")).decode('utf-8')
            full_name = "{} {}".format(first_name, last_name if last_name else "")
            msg_html = render_to_string(
                'email_campaign/dynamic_empty_layout.html', {
                    "body": get_formatted_email(email_template_obj.body, full_name),
                    "signature": email_template_obj.signature,
                    "link": email_unsubscribe_link,
                    "logo": email_template_obj.logo.url if email_template_obj.logo else None,
                    "client": str(email_template_obj.client.client_id)
                }
            )
            subject = email_template_obj.subject.replace("{{ full_name }}", full_name)

            result = send_mail(
                subject, "", sender, [email], connection=connection, html_message=msg_html
            )
            logger.info("Mail sent to {} - for campaign {}".format(email, lead_campaign.get("email_campaign")))

            lead_campaign["status"] = "Email Sent"

        except Exception as e:
            logger.error("ERROR while sending email {}".format(str(e)))
            lead_campaign["status"] = "Email Failed"
    else:
        lead_campaign["status"] = "In UnSubscribed"


def upload_leads(*args, **kwargs):
    try:
        bulk_leads_obj = BulkLeads.objects.get(id=args[0])
        dataset_df = pd.read_csv(bulk_leads_obj.file).fillna("")
        dataset_df.columns = dataset_df.columns.str.lower()
        if kwargs.get("upload_type") == "leads":
            for index, row in dataset_df.iterrows():
                Leads.objects.create(
                    email=row.get("email"), first_name=row.get("first_name"), last_name=row.get("last_name"),
                    phone=row.get("phone"), note=row.get("note", ""), source=row.get("source", ""),
                    client=bulk_leads_obj.client
                )
        else:
            for index, row in dataset_df.iterrows():
                EmailList.objects.create(
                    email=row.get("email"), first_name=row.get("first_name"), last_name=row.get("last_name"),
                    client=bulk_leads_obj.client
                )
        bulk_leads_obj.status = True
        bulk_leads_obj.save()
        logger.info("UPLOAD LEADS SUCCESSFUL")
    except Exception as e:
        logger.error("ERROR upload_leads - {}".format(str(e)))


def send_test_email(config, recipient):
    try:
        connection = get_mail_connection(config)
        mass_mail_data = tuple([("Test Email", "Test Email Body", config.sender, [recipient])])
        result = send_mass_mail(mass_mail_data, connection=connection)
        error = {"success": "Test Email Sent Successfully"}
        config.meta_data = error
        config.save()
        return result
    except Exception as e:
        error = {"error": str(e)}
        config.meta_data = error
        config.save()


def test_email_connection(config):
    connection = get_mail_connection(config)
    # mass_mail_data = tuple([("Subject here", "Here is the message", config.sender, ["sanketvyapari@gmail.com"])])
    # send_mass_mail(mass_mail_data, connection=connection)
    return connection.open()
