import base64
import urllib.request
import urllib.parse

# Hardcode a sample envelope + key to avoid path issues.
env_b64 = ""
k = ""
if not env_b64:
    # Use a tiny AES-GCM envelope (12B nonce || ciphertext+tag)
    from cryptography.hazmat.primitives.ciphers.aead import AESGCM
    import os
    key = os.urandom(32)
    nonce = os.urandom(12)
    ciphertext_and_tag = AESGCM(key).encrypt(nonce, b"hello", None)
    env = nonce + ciphertext_and_tag
    env_b64 = base64.b64encode(env).decode()
    k = base64.b64encode(key).decode()

b64 = base64.b64encode(env).decode()
# Drop "filename" to confirm it's the missing field causing the 422.
data = urllib.parse.urlencode({
    "encrypted_file": b64,
    "encrypted_key": k,
}).encode()

req = urllib.request.Request("http://localhost:3000/api/aes-file-decrypt", data=data, method="POST")
try:
    with urllib.request.urlopen(req, timeout=30) as resp:
        print("status:", resp.status)
        print("body:", resp.read().decode())
except urllib.error.HTTPError as e:
    print("status:", e.code)
    print("body:", e.read().decode())