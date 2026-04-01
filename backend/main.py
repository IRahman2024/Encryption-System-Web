from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

# In Python,
# function and variable names usually use snake_case (e.g., test_plain_text),
# while classes use PascalCase.

app = FastAPI()


class Caesar_Cipher_Request(BaseModel):  # only for request
    text: str


class Caesar_Cipher_Response(BaseModel):  # only for response
    text: str


class Text_Key_request(BaseModel):  # only for request
    text: str
    key: int


class Text_Response(BaseModel):  # only for response
    text: str

class Playfair_request(BaseModel):  # only for request
    text: str
    key: str
    mode: str


class Playfair_Response(BaseModel):  # only for response
    text: str


# test_PlainText = []  # here test cases will be received from frontend
# test_CipherText: List[ Caesar_Cipher_Response ] = []  # here test cases will be sent to frontend

class PlayfairCipher:
    def __init__(self, key):
        self.matrix = self._generate_matrix(key)

    def _generate_matrix(self, key):
        """Creates the 5x5 matrix treating I and J as the same character."""
        key = key.upper().replace('J', 'I')
        alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ"
        
        # Combine key and alphabet, maintaining order and removing duplicates
        combined = []
        for char in (key + alphabet):
            if char not in combined and char.isalpha():
                combined.append(char)
        
        # Slice the 25 characters into five rows of five
        return [combined[i:i+5] for i in range(0, 25, 5)]

    def _prepare_text(self, text, mode):
        """Cleans text, handles J->I, and creates digraphs with padding."""
        text = text.upper().replace('J', 'I').replace(" ", "")
        if mode == 'decrypt':
            return text # Decryption assumes text is already in pairs

        prepared = ""
        i = 0
        while i < len(text):
            char1 = text[i]
            # Look ahead for second char; if at end or same as char1, use 'X'
            if i + 1 < len(text):
                char2 = text[i+1]
                if char1 == char2:
                    prepared += char1 + 'X'
                    i += 1
                else:
                    prepared += char1 + char2
                    i += 2
            else:
                prepared += char1 + 'X'
                i += 1
        return prepared

    def _find_position(self, char):
        for r, row in enumerate(self.matrix):
            if char in row:
                return r, row.index(char)
        return None

    def transform(self, text, mode='encrypt'):
        """Main logic for both encryption and decryption."""
        shift = 1 if mode == 'encrypt' else -1
        prepared_text = self._prepare_text(text, mode)
        result = []

        for i in range(0, len(prepared_text), 2):
            char1, char2 = prepared_text[i], prepared_text[i+1]
            r1, c1 = self._find_position(char1)
            r2, c2 = self._find_position(char2)

            if r1 == r2: # Rule 1: Same Row (Horizontal shift)
                result.append(self.matrix[r1][(c1 + shift) % 5])
                result.append(self.matrix[r2][(c2 + shift) % 5])
            elif c1 == c2: # Rule 2: Same Column (Vertical shift)
                result.append(self.matrix[(r1 + shift) % 5][c1])
                result.append(self.matrix[(r2 + shift) % 5][c2])
            else: # Rule 3: Rectangle (Swap columns)
                result.append(self.matrix[r1][c2])
                result.append(self.matrix[r2][c1])

        return "".join(result)

    def display_matrix(self):
        print("--- 5x5 Key Matrix ---")
        for row in self.matrix:
            print(" ".join(row))
        print("----------------------")


@app.get("/")
def read_root():
    return {"Hello": "World"}


# caesar-cipher
# caesar-cipher encryption (plain-text)
@app.post("/caesar-encrypt", response_model=Caesar_Cipher_Response)
def caesar_encrypt(payLoad: Caesar_Cipher_Request):
    plaintext = payLoad.text
    shift = 3
    cipherText = ""

    for char in plaintext:
        cipherText += chr((ord(char) - 32 + shift) % 95 + 32)

    # test_PlainText.append(payLoad.text)
    # print(payLoad)
    test_CipherText = cipherText
    print(f"this is the plain-Text: {plaintext}")
    print(f"this is the chipher-Text: {cipherText}")
    return {"text": cipherText}

# caesar-cipher decryption (plain-text)
@app.post("/caesar-decrypt", response_model=Caesar_Cipher_Response)
def caesar_decrypt(payLoad: Caesar_Cipher_Request):
    cipherText = payLoad.text
    shift = 3
    plainText = ""

    for char in cipherText:
        plainText += chr((ord(char) - 32 - shift) % 95 + 32)

    # test_PlainText.append(payLoad.text)
    # print(payLoad)
    test_PlainText = plainText
    print(f"this is the plain-Text: {cipherText}")
    print(f"this is the chipher-Text: {plainText}")
    return {"text": plainText}


# vigenère-cipher
# vigenère-cipher encryption (plain-text)
@app.post("/vigenere-encrypt", response_model=Text_Response)
def vigenere_encrypt(payLoad: Text_Key_request):
    plaintext = payLoad.text
    shift = payLoad.key
    cipherText = ""

    for char in plaintext:
        cipherText += chr((ord(char) - 32 + shift) % 95 + 32)

    # test_PlainText.append(payLoad.text)
    print(payLoad)
    test_CipherText = cipherText
    return {"text": cipherText}

# vigenère-cipher decryption (plain-text)
@app.post("/vigenere-decrypt", response_model=Text_Response)
def vigenere_decrypt(payLoad: Text_Key_request):
    cipherText = payLoad.text
    shift = payLoad.key
    plainText = ""

    for char in cipherText:
        plainText += chr((ord(char) - 32 - shift) % 95 + 32)

    # test_PlainText.append(payLoad.text)
    # print(payLoad)
    test_PlainText = plainText
    return {"text": plainText}

# playfair-cipher
# playfair-cipher encryption
@app.post("/playfair-cipher")
def playfair_cipher(payload: Playfair_request):
    plaintext = payload.text
    key = payload.key
    mode = payload.mode

    print(mode)
    
    cipher = PlayfairCipher(key)
    
    # cipher.display_matrix()
    
    # msg = "INSTRUMENTS"
    # encrypted =g

    if mode == "encrypt":
        print('this is encryption request')
        encrypted = cipher.transform(plaintext, mode='encrypt')
        return {"message": mode + ": " + encrypted}
    else:
        print('this is decryption request')
        decrypted = cipher.transform(plaintext, mode='decrypt')
        return {"message": mode + ": " + decrypted}

   

# playfair-cipher decryption
