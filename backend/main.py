from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import base64
from rsa_cipher import FileRSACipher

# In Python,
# function and variable names usually use snake_case (e.g., test_plain_text),
# while classes use PascalCase.

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://encryption-system-web-front.vercel.app"
        ],
    # allow_origins=["https://encryption-system-web-front.vercel.app/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

cipher = FileRSACipher()

class Caesar_Cipher_Request(BaseModel):  # only for request
    text: str
    mode: str


class Caesar_Cipher_Response(BaseModel):  # only for response
    text: str


class Text_Key_request(BaseModel):  # only for request
    text: str
    key: int
    mode: str


class Text_Response(BaseModel):  # only for response
    text: str

class Playfair_request(BaseModel):  # only for request
    text: str
    key: str
    mode: str
class Hillfair_request(BaseModel):  # only for request
    text: str
    key: List[List[int]]
    mode: str
class Hillfair_response(BaseModel):  # only for request
    message: str


class Playfair_Response(BaseModel):  # only for response
    text: str


# test_PlainText = []  # here test cases will be received from frontend
# test_CipherText: List[ Caesar_Cipher_Response ] = []  # here test cases will be sent to frontend

# Playfair Cipher algo
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
        # 1. Extract non-alphabetic characters and their original positions
        non_alpha = {i: char for i, char in enumerate(text) if not char.isalpha()}
        
        # 2. Define shift (1 for encrypt, 4 for decrypt as -1 % 5 = 4)
        shift = 1 if mode == 'encrypt' else 4
        
        # 3. Clean and pair the text
        cleaned_text = "".join(filter(str.isalpha, text))
        prepared_text = self._prepare_text(cleaned_text, mode)
        result_list = []

        # 4. Standard Playfair Rules Logic
        for i in range(0, len(prepared_text), 2):
            char1, char2 = prepared_text[i], prepared_text[i+1]
            
            pos1 = self._find_position(char1)
            pos2 = self._find_position(char2)
            
            # Safety check for characters not in matrix
            if pos1 is None or pos2 is None:
                continue
                
            r1, c1 = pos1
            r2, c2 = pos2

            if r1 == r2: # Rule: Same Row (Horizontal shift)
                result_list.append(self.matrix[r1][(c1 + shift) % 5])
                result_list.append(self.matrix[r1][(c2 + shift) % 5])
            elif c1 == c2: # Rule: Same Column (Vertical shift)
                result_list.append(self.matrix[(r1 + shift) % 5][c1])
                result_list.append(self.matrix[(r2 + shift) % 5][c2])
            else: # Rule: Rectangle (Swap columns)
                result_list.append(self.matrix[r1][c2])
                result_list.append(self.matrix[r2][c1])

        # 5. Re-insert non-alphabetic characters back into the result string
        for index in sorted(non_alpha.keys()):
            if index < len(result_list):
                result_list.insert(index, non_alpha[index])
            else:
                result_list.append(non_alpha[index])

        return "".join(result_list)

    def display_matrix(self):
        print("--- 5x5 Key Matrix ---")
        for row in self.matrix:
            print(" ".join(row))
        print("----------------------")

# Hill Cipher Algo
class HillCipher:
    def __init__(self, key_matrix):
        """
        Initialize with a square matrix (list of lists).
        Example: [[3, 3], [2, 5]]
        """
        self.key_matrix = key_matrix
        self.n = len(key_matrix)
        if any(len(row) != self.n for row in key_matrix):
            raise ValueError("Key matrix must be square.")

    def _char_to_int(self, char):
        return ord(char.upper()) - ord('A')

    def _int_to_char(self, integer):
        return chr((int(integer) % 26) + ord('A'))

    def _get_determinant(self, matrix):
        """Calculates determinant for 2x2 or 3x3 matrices."""
        if len(matrix) == 2:
            return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
        elif len(matrix) == 3:
            a, b, c = matrix[0]
            d, e, f = matrix[1]
            g, h, i = matrix[2]
            return a*(e*i - f*h) - b*(d*i - f*g) + c*(d*h - e*g)
        else:
            raise NotImplementedError("This logic currently supports 2x2 or 3x3.")

    def _mod_inverse(self, a, m):
        """Finds modular inverse of a number 'a' under modulo 'm'."""
        for x in range(1, m):
            if (a * x) % m == 1:
                return x
        raise ValueError(f"Modular inverse does not exist for determinant {a}")

    def _get_adjugate_matrix(self, matrix):
        """Calculates the adjugate matrix for 2x2 or 3x3."""
        if len(matrix) == 2:
            return [[matrix[1][1], -matrix[0][1]], 
                    [-matrix[1][0], matrix[0][0]]]
        elif len(matrix) == 3:
            # Minors and cofactors logic
            adj = [[0]*3 for _ in range(3)]
            for r in range(3):
                for c in range(3):
                    # Minor matrix
                    minor = [row[:c] + row[c+1:] for row in (matrix[:r] + matrix[r+1:])]
                    det_minor = minor[0][0] * minor[1][1] - minor[0][1] * minor[1][0]
                    adj[c][r] = ((-1)**(r+c)) * det_minor # Transpose applied here
            return adj

    def encrypt(self, text):
        # 1. Record non-alpha characters
        non_alpha = {i: char for i, char in enumerate(text) if not char.isalpha()}
        
        # 2. Clean text for processing
        clean_text = "".join(filter(str.isalpha, text.upper()))
        
        # 3. Padding
        while len(clean_text) % self.n != 0:
            clean_text += 'X'

        # 4. Standard Hill Cipher Logic
        cipher_list = []
        for i in range(0, len(clean_text), self.n):
            block = [self._char_to_int(c) for c in clean_text[i:i+self.n]]
            for row in self.key_matrix:
                dot_product = sum(row[j] * block[j] for j in range(self.n))
                cipher_list.append(self._int_to_char(dot_product % 26))
        
        # 5. Re-insert non-alpha into the result
        for index in sorted(non_alpha.keys()):
            if index < len(cipher_list):
                cipher_list.insert(index, non_alpha[index])
            else:
                cipher_list.append(non_alpha[index])
                
        return "".join(cipher_list)

    def decrypt(self, cipher_text):
        # 1. Record non-alpha characters
        non_alpha = {i: char for i, char in enumerate(cipher_text) if not char.isalpha()}
        
        # 2. Clean text
        clean_cipher = "".join(filter(str.isalpha, cipher_text.upper()))
        
        # 3. Get Inverted Matrix
        det = self._get_determinant(self.key_matrix) % 26
        det_inv = self._mod_inverse(det, 26)
        adjugate = self._get_adjugate_matrix(self.key_matrix)
        inv_key = [[(det_inv * cell) % 26 for cell in row] for row in adjugate]

        plain_list = []
        for i in range(0, len(clean_cipher), self.n):
            block = [self._char_to_int(c) for c in clean_cipher[i:i+self.n]]
            for row in inv_key:
                dot_product = sum(row[j] * block[j] for j in range(self.n))
                plain_list.append(self._int_to_char(dot_product % 26))
        
        # 5. Re-insert non-alpha
        for index in sorted(non_alpha.keys()):
            if index < len(plain_list):
                plain_list.insert(index, non_alpha[index])
            else:
                plain_list.append(non_alpha[index])
                
        return "".join(plain_list)



@app.get("/")
def read_root():
    return {"Hello": "World"}


# caesar-cipher
@app.post("/caesar", response_model=Caesar_Cipher_Response)
def caesar_encrypt(payLoad: Caesar_Cipher_Request):
    text = payLoad.text
    shift = 3
    mode = payLoad.mode
    cipherText = ""
    decryptedText = ""

    if mode == 'encrypt':
        for char in text:
            cipherText += chr((ord(char) - 32 + shift) % 95 + 32)
        return {"text": cipherText}    
    else:
        for char in text:
            decryptedText += chr((ord(char) - 32 - shift) % 95 + 32)
        return {"text": decryptedText}    

# vigenère-cipher
@app.post("/vigenere", response_model=Text_Response)
def vigenere_encrypt(payLoad: Text_Key_request):
    text = payLoad.text
    shift = payLoad.key
    mode = payLoad.mode
    cipherText = ""
    decryptedText = ""

    if mode == 'encrypt':
        for char in text:
            cipherText += chr((ord(char) - 32 + shift) % 95 + 32)
        return {"text": cipherText}
    else:
        for char in text:
            decryptedText += chr((ord(char) - 32 - shift) % 95 + 32)
        return {"text": decryptedText}

# playfair-cipher
@app.post("/playfair-cipher")
def playfair_cipher(payload: Playfair_request):
    plaintext = payload.text
    key = payload.key
    mode = payload.mode

    # print(mode)
    
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

# hillfair-cipher api
@app.post("/hillfair-cipher", response_model=Hillfair_response)
def hillfair_cipher(payload: Hillfair_request):
    plaintext = payload.text
    key = payload.key
    mode = payload.mode

    # print(plaintext)
    # print(key)
    # print(mode)
    
    cipher = HillCipher(key)
    
    # cipher.display_matrix()
    
    # msg = "INSTRUMENTS"
    # encrypted =g

    if mode == "encrypt":
        print('this is encryption request')
        encrypted = cipher.encrypt(plaintext)
        return {"message": mode + ": " + encrypted}
    else:
        print('this is decryption request')
        decrypted = cipher.decrypt(plaintext)
        return {"message": mode + ": " + decrypted}

@app.post("/rsa-file-encrypt")
async def encrypt_api(file: UploadFile = File(...)):
    # Read the raw file
    file_data = await file.read()
    
    # Server-side size limit: 100MB
    if len(file_data) > 100 * 1024 * 1024:
        raise HTTPException(status_code=413, detail="File exceeds the 100MB size limit.")
    
    # Generate keys and encrypt
    private_key = cipher.generate_keys()
    enc_content, enc_aes_key = cipher.encrypt_file(file_data)
    
    # Return everything needed to the user
    return {
        "filename": file.filename,
        "private_key": private_key,
        "encrypted_aes_key": base64.b64encode(enc_aes_key).decode('utf-8'),
        "encrypted_file": base64.b64encode(enc_content).decode('utf-8')
    }

@app.post("/rsa-file-decrypt")
async def decrypt_api(
    encrypted_file: UploadFile = File(...), 
    encrypted_aes_key: str = Form(...), 
    private_key: str = Form(...)
):
    try:
        # Read the raw binary file directly
        file_bytes = await encrypted_file.read()
        
        # Server-side size limit: 100MB
        if len(file_bytes) > 100 * 1024 * 1024:
            raise HTTPException(status_code=413, detail="File exceeds the 100MB size limit.")
        
        aes_key_bytes = base64.b64decode(encrypted_aes_key)
        
        # Decrypt
        decrypted_data = cipher.decrypt_file(file_bytes, aes_key_bytes, private_key)
        
        return {
            "message": "File decrypted successfully", 
            "size": len(decrypted_data),
            "decrypted_file": base64.b64encode(decrypted_data).decode('utf-8')
        }
    except Exception as e:
        return {"error": str(e)}