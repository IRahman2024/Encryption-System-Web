// Helper: Modulo that works correctly with negative numbers
const mod = (n, m) => ((n % m) + m) % m

export const caesarCipher = (
    text,
    shift,
    mode
) => {
    const actualShift = mode === 'encrypt' ? shift : -shift
    return text.replace(/[a-zA-Z]/g, (char) => {
        const base = char <= 'Z' ? 65 : 97
        return String.fromCharCode(
            mod(char.charCodeAt(0) - base + actualShift, 26) + base,
        )
    })
}

export const rot13 = (text) => {
    return caesarCipher(text, 13, 'encrypt') // ROT13 is symmetric
}

export const base64Cipher = (text, mode) => {
    try {
        if (mode === 'encrypt') {
            // Encode to base64, handling unicode characters properly
            return btoa(
                encodeURIComponent(text).replace(/%([0-9A-F]{2})/g, (match, p1) =>
                    String.fromCharCode(('0x' + p1)),
                ),
            )
        } else {
            // Decode from base64
            if (!text.trim()) return ''
            return decodeURIComponent(
                Array.prototype.map
                    .call(
                        atob(text),
                        (c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2),
                    )
                    .join(''),
            )
        }
    } catch (e) {
        return 'Error: Invalid Base64 input'
    }
}

export const vigenereCipher = (
    tex,
    key,
    mod,
) => {
    if (!key) return text
    const cleanKey = key.replace(/[^a-zA-Z]/g, '').toUpperCase()
    if (!cleanKey) return text

    let keyIndex = 0
    return text.replace(/[a-zA-Z]/g, (char) => {
        const isUpper = char <= 'Z'
        const base = isUpper ? 65 : 97
        const charCode = char.charCodeAt(0) - base
        const shift = cleanKey.charCodeAt(keyIndex % cleanKey.length) - 65

        const actualShift = mode === 'encrypt' ? shift : -shift
        keyIndex++

        return String.fromCharCode(mod(charCode + actualShift, 26) + base)
    })
}

export const xorCipher = (
    text,
    key,
    mode,
) => {
    if (!key) return text

    try {
        let processText = text

        // If decrypting, we expect the input to be base64 encoded (from our encryptor)
        if (mode === 'decrypt') {
            try {
                processText = atob(text)
            } catch {
                return 'Error: Invalid XOR input (expected Base64)'
            }
        }

        let result = ''
        for (let i = 0; i < processText.length; i++) {
            result += String.fromCharCode(
                processText.charCodeAt(i) ^ key.charCodeAt(i % key.length),
            )
        }

        // If encrypting, encode to base64 to ensure printable characters
        if (mode === 'encrypt') {
            return btoa(result)
        }

        return result
    } catch (e) {
        return 'Error processing XOR cipher'
    }
}

export const processText = (
    text,
    method,
    key,
    mode,
) => {
    if (!text) return ''

    switch (method) {
        case 'caesar':
            const shift = parseInt(key, 10)
            return caesarCipher(text, isNaN(shift) ? 0 : shift, mode)
        case 'rot13':
            return rot13(text)
        case 'base64':
            return base64Cipher(text, mode)
        case 'vigenere':
            return vigenereCipher(text, key, mode)
        case 'xor':
            return xorCipher(text, key, mode)
        default:
            return text
    }
}

export const requiresKey = (method) => {
    return ['caesar', 'vigenere', 'xor'].includes(method)
}

export const getKeyPlaceholder = (method) => {
    switch (method) {
        case 'caesar':
            return 'Enter shift number (e.g., 3)'
        case 'vigenere':
            return 'Enter text key (e.g., SECRET)'
        case 'xor':
            return 'Enter encryption key'
        default:
            return ''
    }
}
