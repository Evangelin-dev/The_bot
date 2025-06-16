import base64


def decrypt(encoded_string):
    return base64.b64decode(bytes(encoded_string, "utf-8")).decode("utf-8")


def encrypt(value):
    return base64.b64encode(bytes("{}".format(value), "utf-8")).decode('utf-8')
