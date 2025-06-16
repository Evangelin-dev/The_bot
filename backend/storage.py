from django.conf import settings

from tempfile import SpooledTemporaryFile
from io import BytesIO
from shutil import copyfileobj

from django.core.files.storage import Storage
from supabase import create_client


class SupabaseStorage(Storage):
    def __init__(self, bucket_name="the-bot-s3-bucket", **kwargs):
        self.bucket_name = bucket_name

        self.supabase = create_client("https://egycraushoegeublvtjf.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVneWNyYXVzaG9lZ2V1Ymx2dGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1MTU0ODMsImV4cCI6MjA1NDA5MTQ4M30.PRgPip0NKwrbAHvCgNxUBpDnQazbuAM6xTeUAlHpA6k")
        self.storage_client = self.supabase.storage.from_(self.bucket_name)

    def _open(self, name, mode="rb"):
        self._file = SpooledTemporaryFile()
        response = self.supabase.storage.from_(self.bucket_name).download(name)
        with BytesIO(response) as file_content:
            copyfileobj(file_content, self._file)
        self._file.seek(0)
        return self._file

    def _save(self, name, content):
        # Implement the method to save a file to Supabase
        content_file = content.file
        content_file.seek(0)  # Move the file pointer to the beginning
        content_bytes = content_file.read()
        data = self.supabase.storage.from_(self.bucket_name).upload(
            name, content_bytes, {"content-type": content.content_type, "upsert": "true"}
        )
        return name

    def delete(self, name):
        data = self.supabase.storage.from_(self.bucket_name).remove(name)
        print(data, "data")


    def exists(self, name):
        # Implement the method to check if a file exists in Supabase
        pass

    def url(self, name):
        # Implement the method to return the URL for a file in Supabase
        response = self.supabase.storage.from_(self.bucket_name).get_public_url(name)
        return response
