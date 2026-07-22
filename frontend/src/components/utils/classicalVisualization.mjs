import { caesarCipher, vigenereCipher } from './classicalCiphers.mjs'

const mod = (value, divisor) => ((value % divisor) + divisor) % divisor
const isAsciiLetter = char => /[A-Za-z]/.test(char)

export function buildCaesarVisualizationSteps(text, rawKey, mode) {
    const shift = Number.parseInt(rawKey, 10) || 3
    const signedShift = mode === 'encrypt' ? shift : -shift

    return [...text].map((input, index) => {
        const letter = isAsciiLetter(input)
        const base = input <= 'Z' ? 65 : 97
        const sourceIndex = letter ? input.charCodeAt(0) - base : 'unchanged'
        const targetIndex = letter ? mod(sourceIndex + signedShift, 26) : 'unchanged'

        return {
            index,
            input,
            output: caesarCipher(input, shift, mode),
            sourceIndex,
            targetIndex,
            signedShift: letter ? signedShift : 0,
            explanation: letter
                ? `${mode === 'encrypt' ? 'Add' : 'Subtract'} ${Math.abs(shift)} modulo 26.`
                : 'Non-alphabetic characters pass through unchanged.',
        }
    })
}

export function buildVigenereVisualizationSteps(text, rawKey, mode) {
    const keyCharacters = [...rawKey.toUpperCase()].filter(isAsciiLetter)
    if (!keyCharacters.length) return []

    let keyIndex = 0
    return [...text].map((input, index) => {
        const letter = isAsciiLetter(input)
        const keyChar = letter ? keyCharacters[keyIndex % keyCharacters.length] : '-'
        const keyShift = letter ? keyChar.charCodeAt(0) - 65 : 0
        const signedShift = mode === 'encrypt' ? keyShift : -keyShift
        const base = input <= 'Z' ? 65 : 97
        const sourceIndex = letter ? input.charCodeAt(0) - base : 'unchanged'
        const targetIndex = letter ? mod(sourceIndex + signedShift, 26) : 'unchanged'
        const output = letter ? vigenereCipher(input, keyChar, mode) : input
        if (letter) keyIndex += 1

        return {
            index,
            input,
            output,
            keyChar,
            keyShift,
            sourceIndex,
            targetIndex,
            signedShift,
            explanation: letter
                ? `Key "${keyChar}" contributes ${keyShift}; ${mode === 'encrypt' ? 'add' : 'subtract'} it modulo 26.`
                : 'Non-alphabetic characters pass through without consuming a key letter.',
        }
    })
}
