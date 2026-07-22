const ALPHABET_SIZE = 26
const PLAYFAIR_ALPHABET = 'ABCDEFGHIKLMNOPQRSTUVWXYZ'

const mod = (value, divisor) => ((value % divisor) + divisor) % divisor
const isAsciiLetter = char => /[A-Za-z]/.test(char)

export function caesarCipher(text, rawShift, mode) {
    const shift = Number.parseInt(rawShift, 10)
    const signedShift = mode === 'encrypt' ? shift : -shift

    return [...text].map(char => {
        if (!isAsciiLetter(char)) return char
        const base = char <= 'Z' ? 65 : 97
        return String.fromCharCode(mod(char.charCodeAt(0) - base + signedShift, ALPHABET_SIZE) + base)
    }).join('')
}

export function vigenereCipher(text, rawKey, mode) {
    const key = [...rawKey.toUpperCase()].filter(isAsciiLetter)
    if (!key.length) return text

    let keyIndex = 0
    return [...text].map(char => {
        if (!isAsciiLetter(char)) return char

        const base = char <= 'Z' ? 65 : 97
        const shift = key[keyIndex % key.length].charCodeAt(0) - 65
        const signedShift = mode === 'encrypt' ? shift : -shift
        keyIndex += 1
        return String.fromCharCode(mod(char.charCodeAt(0) - base + signedShift, ALPHABET_SIZE) + base)
    }).join('')
}

function buildPlayfairMatrix(rawKey) {
    const key = rawKey.toUpperCase().replace(/J/g, 'I').replace(/[^A-Z]/g, '')
    const letters = []
    const seen = new Set()

    for (const char of key + PLAYFAIR_ALPHABET) {
        if (!seen.has(char)) {
            seen.add(char)
            letters.push(char)
        }
    }

    return Array.from({ length: 5 }, (_, row) => letters.slice(row * 5, row * 5 + 5))
}

function preparePlayfairText(rawText, mode) {
    const clean = [...rawText]
        .filter(isAsciiLetter)
        .join('')
        .toUpperCase()
        .replace(/J/g, 'I')

    if (mode === 'decrypt') return clean.length % 2 === 0 ? clean : `${clean}X`

    let prepared = ''
    let index = 0
    while (index < clean.length) {
        const first = clean[index]
        const second = clean[index + 1]
        if (!second || first === second) {
            prepared += `${first}X`
            index += 1
        } else {
            prepared += `${first}${second}`
            index += 2
        }
    }
    return prepared
}

function playfairPosition(matrix, char) {
    for (let row = 0; row < matrix.length; row += 1) {
        const column = matrix[row].indexOf(char)
        if (column !== -1) return [row, column]
    }
    return null
}

export function playfairCipher(text, key, mode) {
    const matrix = buildPlayfairMatrix(key)
    const prepared = preparePlayfairText(text, mode)
    const nonLetters = new Map([...text].flatMap((char, index) => isAsciiLetter(char) ? [] : [[index, char]]))
    const shift = mode === 'encrypt' ? 1 : 4
    const result = []

    for (let index = 0; index < prepared.length; index += 2) {
        const first = playfairPosition(matrix, prepared[index])
        const second = playfairPosition(matrix, prepared[index + 1])
        if (!first || !second) continue

        const [firstRow, firstColumn] = first
        const [secondRow, secondColumn] = second
        if (firstRow === secondRow) {
            result.push(matrix[firstRow][(firstColumn + shift) % 5])
            result.push(matrix[secondRow][(secondColumn + shift) % 5])
        } else if (firstColumn === secondColumn) {
            result.push(matrix[(firstRow + shift) % 5][firstColumn])
            result.push(matrix[(secondRow + shift) % 5][secondColumn])
        } else {
            result.push(matrix[firstRow][secondColumn])
            result.push(matrix[secondRow][firstColumn])
        }
    }

    for (const [index, char] of nonLetters) {
        result.splice(Math.min(index, result.length), 0, char)
    }
    return result.join('')
}

function parseHillMatrix(rawKey) {
    try {
        const matrix = JSON.parse(rawKey)
        const valid = Array.isArray(matrix)
            && [2, 3].includes(matrix.length)
            && matrix.every(row => Array.isArray(row)
                && row.length === matrix.length
                && row.every(Number.isFinite))
        return valid ? matrix : null
    } catch {
        return null
    }
}

function determinant(matrix) {
    if (matrix.length === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
    }
    const [[a, b, c], [d, e, f], [g, h, i]] = matrix
    return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g)
}

function modularInverse(value, modulus) {
    const normalized = mod(value, modulus)
    for (let candidate = 1; candidate < modulus; candidate += 1) {
        if ((normalized * candidate) % modulus === 1) return candidate
    }
    return null
}

function adjugate(matrix) {
    if (matrix.length === 2) {
        return [[matrix[1][1], -matrix[0][1]], [-matrix[1][0], matrix[0][0]]]
    }

    const result = Array.from({ length: 3 }, () => Array(3).fill(0))
    for (let row = 0; row < 3; row += 1) {
        for (let column = 0; column < 3; column += 1) {
            const minor = matrix
                .filter((_, rowIndex) => rowIndex !== row)
                .map(matrixRow => matrixRow.filter((_, columnIndex) => columnIndex !== column))
            const minorDeterminant = minor[0][0] * minor[1][1] - minor[0][1] * minor[1][0]
            result[column][row] = ((row + column) % 2 === 0 ? 1 : -1) * minorDeterminant
        }
    }
    return result
}

function inverseHillMatrix(matrix) {
    const inverseDeterminant = modularInverse(determinant(matrix), ALPHABET_SIZE)
    if (inverseDeterminant === null) return null
    return adjugate(matrix).map(row => row.map(value => mod(value * inverseDeterminant, ALPHABET_SIZE)))
}

export function hillCipher(text, rawKey, mode) {
    const keyMatrix = parseHillMatrix(rawKey)
    if (!keyMatrix) return 'Error: Enter a valid 2x2 or 3x3 numeric key matrix.'

    const matrix = mode === 'decrypt' ? inverseHillMatrix(keyMatrix) : keyMatrix
    if (!matrix) return 'Error: This matrix cannot decrypt because it has no inverse modulo 26.'

    const nonLetters = new Map([...text].flatMap((char, index) => isAsciiLetter(char) ? [] : [[index, char]]))
    const size = matrix.length
    let prepared = [...text].filter(isAsciiLetter).join('').toUpperCase()
    while (prepared.length % size !== 0) prepared += 'X'

    const result = []
    for (let index = 0; index < prepared.length; index += size) {
        const vector = [...prepared.slice(index, index + size)].map(char => char.charCodeAt(0) - 65)
        for (const row of matrix) {
            const sum = row.reduce((total, value, column) => total + value * vector[column], 0)
            result.push(String.fromCharCode(mod(sum, ALPHABET_SIZE) + 65))
        }
    }

    for (const [index, char] of nonLetters) {
        result.splice(Math.min(index, result.length), 0, char)
    }
    return result.join('')
}

export function processText(text, method, key, mode) {
    if (!text) return ''
    if (method === 'caesar') return caesarCipher(text, Number.parseInt(key, 10) || 3, mode)
    if (method === 'vigenere') return vigenereCipher(text, key, mode)
    if (method === 'playfair') return playfairCipher(text, key, mode)
    if (method === 'hill') return hillCipher(text, key, mode)
    return text
}

export function buildCaesarBruteForceCandidates(ciphertext) {
    return Array.from({ length: ALPHABET_SIZE }, (_, shift) => ({
        shift,
        plaintext: caesarCipher(ciphertext, shift, 'decrypt'),
    }))
}
