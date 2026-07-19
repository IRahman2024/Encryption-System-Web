import os
import base64
from cryptography.hazmat.primitives.ciphers.aead import AESGCM


class FileAESCipher:
    """
    AES-256-GCM file cipher.

    The output of encrypt_bytes() is laid out as:
        [12-byte nonce][ciphertext + 16-byte GCM tag]
    The base64_key returned alongside it is the 32-byte AES key, base64-encoded.

    decrypt_bytes() reverses the process: it splits the envelope into
    nonce + ciphertext, decodes the key, and feeds both to AESGCM.decrypt.
    """

    KEY_BYTES = 32          # AES-256
    NONCE_BYTES = 12        # GCM standard nonce size
    TAG_BYTES = 16          # GCM auth tag, appended automatically by AESGCM

    def __init__(self):
        # No persistent state — keys are generated per file inside encrypt_bytes().
        pass

    def encrypt_bytes(self, file_bytes: bytes):
        """
        Encrypts raw file bytes with a freshly generated AES-256 key.

        Returns:
            (envelope, key_b64)
            envelope  = nonce (12B) || ciphertext+tag
            key_b64   = base64-encoded 32-byte AES key (give this to the user
                        so they can decrypt later)
        """
        if not isinstance(file_bytes, (bytes, bytearray, memoryview)):
            raise TypeError("file_bytes must be a bytes-like object")
        if len(file_bytes) == 0:
            raise ValueError("Cannot encrypt an empty file")

        key = os.urandom(self.KEY_BYTES)
        nonce = os.urandom(self.NONCE_BYTES)

        aesgcm = AESGCM(key)
        ciphertext_and_tag = aesgcm.encrypt(nonce, bytes(file_bytes), associated_data=None)

        envelope = nonce + ciphertext_and_tag
        key_b64 = base64.b64encode(key).decode("utf-8")
        return envelope, key_b64

    def decrypt_bytes(self, envelope: bytes, key_b64: str) -> bytes:
        """
        Decrypts an envelope produced by encrypt_bytes() using the base64 key.

        Args:
            envelope: nonce (12B) || ciphertext+tag produced by encrypt_bytes().
            key_b64:  the base64-encoded AES key returned alongside the envelope.

        Returns:
            The original plaintext bytes.
        """
        if not isinstance(envelope, (bytes, bytearray, memoryview)):
            raise TypeError("envelope must be a bytes-like object")
        if not isinstance(key_b64, str):
            raise TypeError("key_b64 must be a base64 string")

        envelope = bytes(envelope)
        if len(envelope) < self.NONCE_BYTES + self.TAG_BYTES:
            raise ValueError("Envelope is too short to be a valid AES-GCM blob")

        try:
            key = base64.b64decode(key_b64, validate=True)
        except Exception as exc:
            raise ValueError(f"Invalid base64 key: {exc}") from exc

        if len(key) != self.KEY_BYTES:
            raise ValueError(
                f"AES key must be {self.KEY_BYTES} bytes, got {len(key)}"
            )

        nonce = envelope[: self.NONCE_BYTES]
        ciphertext_and_tag = envelope[self.NONCE_BYTES:]

        aesgcm = AESGCM(key)
        try:
            plaintext = aesgcm.decrypt(nonce, ciphertext_and_tag, associated_data=None)
        except Exception as exc:
            # AESGCM raises InvalidTag on auth failure — surface a clear error.
            raise ValueError(f"Decryption failed (bad key or corrupted data): {exc}") from exc

        return plaintext