import base64
from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.hazmat.primitives import serialization, hashes
from cryptography.fernet import Fernet

class FileRSACipher:
    def __init__(self):
        self.private_key = None
        self.public_key = None

    def generate_keys(self):
        """Generates a 2048-bit RSA key pair and returns the Private Key as a PEM string."""
        self.private_key = rsa.generate_private_key(
            public_exponent=65537,
            key_size=2048
        )
        self.public_key = self.private_key.public_key()
        
        # Serialize Private Key to PEM format for the user to download/save
        priv_pem = self.private_key.private_bytes(
            encoding=serialization.Encoding.PEM,
            format=serialization.PrivateFormat.PKCS8,
            encryption_algorithm=serialization.NoEncryption()
        )
        return priv_pem.decode('utf-8')

    def encrypt_file(self, file_bytes):
        """
        Encrypts file bytes using a hybrid approach.
        Returns: (encrypted_file_data, encrypted_aes_key)
        """
        if not self.public_key:
            raise ValueError("Keys not generated. Call generate_keys() first.")

        # 1. Generate a temporary AES key using Fernet
        aes_key = Fernet.generate_key()
        f = Fernet(aes_key)
        
        # 2. Encrypt the actual file content with AES
        encrypted_content = f.encrypt(file_bytes)
        
        # 3. Encrypt the AES key itself with the RSA Public Key (OAEP Padding)
        encrypted_aes_key = self.public_key.encrypt(
            aes_key,
            padding.OAEP(
                mgf=padding.MGF1(algorithm=hashes.SHA256()),
                algorithm=hashes.SHA256(),
                label=None
            )
        )
        
        return encrypted_content, encrypted_aes_key

    def decrypt_file(self, encrypted_content, encrypted_aes_key, private_key_pem):
        """
        Decrypts the file by first recovering the AES key with the RSA Private Key.
        """
        # 1. Load the provided private key PEM string
        priv_key = serialization.load_pem_private_key(
            private_key_pem.encode('utf-8'),
            password=None
        )
        
        # 2. Decrypt the AES key using RSA Private Key
        aes_key = priv_key.decrypt(
            encrypted_aes_key,
            padding.OAEP(
                mgf=padding.MGF1(algorithm=hashes.SHA256()),
                algorithm=hashes.SHA256(),
                label=None
            )
        )
        
        # 3. Use the recovered AES key to decrypt the actual file data
        f = Fernet(aes_key)
        return f.decrypt(encrypted_content)