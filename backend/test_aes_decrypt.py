import base64
import urllib.request
import urllib.parse
from aes_cipher import FileAESCipher

c = FileAESCipher()
pt = b"Hello AES roundtrip 12345"
env, k = c.encrypt_bytes(pt)
print("env bytes:", len(env), "key:", k[:20] + "...")

b64 = base64.b64encode(env).decode()
data = urllib.parse.urlencode({
    "encrypted_file": b64,
    "encrypted_key": k,
    "filename": "test.bin",
}).encode()

req = urllib.request.Request("http://127.0.0.1:8000/aes-file-decrypt", data=data, method="POST")
try:
    with urllib.request.urlopen(req, timeout=30) as resp:
        print("status:", resp.status)
        print("body:", resp.read().decode())
except urllib.error.HTTPError as e:
    print("status:", e.code)
    print("body:", e.read().decode())