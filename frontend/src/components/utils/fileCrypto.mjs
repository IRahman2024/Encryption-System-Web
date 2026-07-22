// File Encryption/Decryption using Web Crypto API
// Modern approach: AES-256-GCM for file content, RSA-OAEP for key encryption

const RSA_KEY_SIZE = 2048
const AES_KEY_SIZE = 256
const AES_IV_SIZE = 12 // GCM standard nonce size
const CHUNK_SIZE = 1024 * 1024 // 1MB chunks for progress

// ============================================================================
// Helper Functions
// ============================================================================

export function arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer)
    let binary = ''
    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i])
    }
    return btoa(binary)
}

export function base64ToArrayBuffer(base64) {
    const binary = atob(base64)
    const bytes = new Uint8Array(binary.length)
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i)
    }
    return bytes.buffer
}

export function pemToArrayBuffer(pem) {
    const base64 = pem
        .replace(/-----BEGIN [^-]+-----/, '')
        .replace(/-----END [^-]+-----/, '')
        .replace(/\s/g, '')
    return base64ToArrayBuffer(base64)
}

export function arrayBufferToPem(buffer, type) {
    const base64 = arrayBufferToBase64(buffer)
    const lines = base64.match(/.{1,64}/g) || []
    return `-----BEGIN ${type}-----\n${lines.join('\n')}\n-----END ${type}-----`
}

// ============================================================================
// RSA Functions
// ============================================================================

export async function generateRSAKeyPair() {
    const keyPair = await crypto.subtle.generateKey(
        {
            name: 'RSA-OAEP',
            modulusLength: RSA_KEY_SIZE,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: 'SHA-256'
        },
        true,
        ['encrypt', 'decrypt']
    )
    return keyPair
}

export async function exportPrivateKeyPEM(privateKey) {
    const exported = await crypto.subtle.exportKey('pkcs8', privateKey)
    return arrayBufferToPem(exported, 'PRIVATE KEY')
}

export async function exportPublicKeyPEM(publicKey) {
    const exported = await crypto.subtle.exportKey('spki', publicKey)
    return arrayBufferToPem(exported, 'PUBLIC KEY')
}

export async function importPrivateKeyPEM(pemString) {
    const arrayBuffer = pemToArrayBuffer(pemString)
    return crypto.subtle.importKey(
        'pkcs8',
        arrayBuffer,
        { name: 'RSA-OAEP', hash: 'SHA-256' },
        false,
        ['decrypt']
    )
}

export async function importPublicKeyPEM(pemString) {
    const arrayBuffer = pemToArrayBuffer(pemString)
    return crypto.subtle.importKey(
        'spki',
        arrayBuffer,
        { name: 'RSA-OAEP', hash: 'SHA-256' },
        false,
        ['encrypt']
    )
}

// ============================================================================
// AES Functions
// ============================================================================

export async function generateAESKey() {
    return crypto.subtle.generateKey(
        { name: 'AES-GCM', length: AES_KEY_SIZE },
        true,
        ['encrypt', 'decrypt']
    )
}

export async function exportAESKey(key) {
    const exported = await crypto.subtle.exportKey('raw', key)
    return arrayBufferToBase64(exported)
}

export async function importAESKey(base64Key) {
    const arrayBuffer = base64ToArrayBuffer(base64Key)
    return crypto.subtle.importKey(
        'raw',
        arrayBuffer,
        { name: 'AES-GCM' },
        false,
        ['decrypt']
    )
}

export async function encryptAES(data, key) {
    const iv = crypto.getRandomValues(new Uint8Array(AES_IV_SIZE))
    const encrypted = await crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        key,
        data
    )
    // Envelope: nonce || ciphertext+tag
    const envelope = new Uint8Array(iv.length + encrypted.byteLength)
    envelope.set(iv, 0)
    envelope.set(new Uint8Array(encrypted), iv.length)
    return envelope
}

export async function decryptAES(envelope, key) {
    const iv = envelope.slice(0, AES_IV_SIZE)
    const ciphertext = envelope.slice(AES_IV_SIZE)
    return crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        key,
        ciphertext
    )
}

// ============================================================================
// RSA Hybrid Encryption/Decryption
// ============================================================================

export async function encryptFileRSA(fileArrayBuffer, onProgress) {
    // 1. Generate AES key
    const aesKey = await generateAESKey()
    const aesKeyBase64 = await exportAESKey(aesKey)

    // 2. Encrypt file with AES-GCM (with progress)
    const encryptedContent = await encryptWithProgress(fileArrayBuffer, aesKey, onProgress)

    // 3. Generate RSA key pair
    const keyPair = await generateRSAKeyPair()

    // 4. Encrypt AES key with RSA-OAEP
    const aesKeyBuffer = base64ToArrayBuffer(aesKeyBase64)
    const encryptedAesKey = await crypto.subtle.encrypt(
        { name: 'RSA-OAEP' },
        keyPair.publicKey,
        aesKeyBuffer
    )

    // 5. Export private key as PEM
    const privateKeyPem = await exportPrivateKeyPEM(keyPair.privateKey)

    return {
        encryptedContent: new Uint8Array(encryptedContent),
        encryptedAesKeyBase64: arrayBufferToBase64(encryptedAesKey),
        privateKeyPem
    }
}

export async function decryptFileRSA(encryptedContent, encryptedAesKeyBase64, privateKeyPem, onProgress) {
    // 1. Import private key from PEM
    const privateKey = await importPrivateKeyPEM(privateKeyPem)

    // 2. Decrypt AES key with RSA-OAEP
    const encryptedAesKeyBuffer = base64ToArrayBuffer(encryptedAesKeyBase64)
    const aesKeyBuffer = await crypto.subtle.decrypt(
        { name: 'RSA-OAEP' },
        privateKey,
        encryptedAesKeyBuffer
    )

    // 3. Import AES key
    const aesKey = await crypto.subtle.importKey(
        'raw',
        aesKeyBuffer,
        { name: 'AES-GCM' },
        false,
        ['decrypt']
    )

    // 4. Decrypt file with AES-GCM (with progress)
    return decryptWithProgress(encryptedContent, aesKey, onProgress)
}

// ============================================================================
// AES Encryption/Decryption
// ============================================================================

export async function encryptFileAES(fileArrayBuffer, onProgress) {
    // 1. Generate AES key
    const aesKey = await generateAESKey()
    const aesKeyBase64 = await exportAESKey(aesKey)

    // 2. Encrypt file with AES-GCM (with progress)
    const envelope = await encryptWithProgress(fileArrayBuffer, aesKey, onProgress)

    return {
        encryptedContent: new Uint8Array(envelope),
        keyBase64: aesKeyBase64
    }
}

export async function decryptFileAES(envelopeArrayBuffer, keyBase64, onProgress) {
    // 1. Import AES key
    const aesKey = await importAESKey(keyBase64)

    // 2. Decrypt file with AES-GCM (with progress)
    return decryptWithProgress(envelopeArrayBuffer, aesKey, onProgress)
}

// ============================================================================
// Progress-aware encryption/decryption
// ============================================================================

async function encryptWithProgress(data, key, onProgress) {
    const totalSize = data.byteLength

    // For small files (< 5MB), process in one shot
    if (totalSize < CHUNK_SIZE * 5) {
        const result = await encryptAES(data, key)
        if (onProgress) onProgress(100)
        return result
    }

    // For large files, process in chunks
    const chunks = Math.ceil(totalSize / CHUNK_SIZE)
    const encryptedChunks = []

    for (let i = 0; i < chunks; i++) {
        const start = i * CHUNK_SIZE
        const end = Math.min(start + CHUNK_SIZE, totalSize)
        const chunk = data.slice(start, end)

        const encryptedChunk = await encryptAES(chunk, key)
        encryptedChunks.push(encryptedChunk)

        if (onProgress) {
            onProgress(Math.round(((i + 1) / chunks) * 100))
        }

        // Yield to UI thread
        await new Promise(resolve => setTimeout(resolve, 0))
    }

    // Concatenate all encrypted chunks
    const totalLength = encryptedChunks.reduce((sum, chunk) => sum + chunk.byteLength, 0)
    const result = new Uint8Array(totalLength)
    let offset = 0
    for (const chunk of encryptedChunks) {
        result.set(chunk, offset)
        offset += chunk.byteLength
    }

    return result
}

async function decryptWithProgress(data, key, onProgress) {
    const totalSize = data.byteLength

    // For small files (< 5MB), process in one shot
    if (totalSize < CHUNK_SIZE * 5) {
        const result = await decryptAES(new Uint8Array(data), key)
        if (onProgress) onProgress(100)
        return result
    }

    // For large files, process in chunks
    // Each chunk has: 12-byte IV + ciphertext + 16-byte tag
    const chunkOverhead = AES_IV_SIZE + 16 // IV + GCM tag
    const minChunkSize = CHUNK_SIZE + chunkOverhead

    const chunks = Math.ceil(totalSize / minChunkSize)
    const decryptedChunks = []

    for (let i = 0; i < chunks; i++) {
        const start = i * minChunkSize
        const end = Math.min(start + minChunkSize, totalSize)
        const chunk = data.slice(start, end)

        const decryptedChunk = await decryptAES(new Uint8Array(chunk), key)
        decryptedChunks.push(decryptedChunk)

        if (onProgress) {
            onProgress(Math.round(((i + 1) / chunks) * 100))
        }

        // Yield to UI thread
        await new Promise(resolve => setTimeout(resolve, 0))
    }

    // Concatenate all decrypted chunks
    const totalLength = decryptedChunks.reduce((sum, chunk) => sum + chunk.byteLength, 0)
    const result = new Uint8Array(totalLength)
    let offset = 0
    for (const chunk of decryptedChunks) {
        result.set(new Uint8Array(chunk), offset)
        offset += chunk.byteLength
    }

    return result
}
