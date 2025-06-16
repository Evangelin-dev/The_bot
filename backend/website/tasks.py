from celery import shared_task
import logging

from .background_jobs import send_campaign_email, upload_leads


@shared_task(bind=True)
def process_email_campaign(self, *args, **kwargs):
    try:
        logging.info("Email Process Has been started - {} {}".format(args, kwargs))
        send_campaign_email(*args, **kwargs)
        logging.info("Email Sending Process completed - {} {}".format(args, kwargs))
    except Exception as e:
        logging.error("Error in processing sending emails - {}".format(str(e)))


@shared_task(bind=True)
def process_upload_leads(self, *args, **kwargs):
    try:
        logging.info("Upload Lead Process Has been started - {} {}".format(args, kwargs))
        upload_leads(*args, **kwargs)
        logging.info("Upload Lead Process completed - {} {}".format(args, kwargs))
    except Exception as e:
        logging.error("Error in processing import files - {}".format(str(e)))
