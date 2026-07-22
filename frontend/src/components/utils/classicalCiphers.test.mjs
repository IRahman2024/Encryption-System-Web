import assert from 'node:assert/strict'
import test from 'node:test'
import {
    buildCaesarBruteForceCandidates,
    caesarCipher,
    hillCipher,
    playfairCipher,
    vigenereCipher,
} from './classicalCiphers.mjs'

test('Caesar preserves case and punctuation', () => {
    assert.equal(caesarCipher('Hello, World!', 3, 'encrypt'), 'Khoor, Zruog!')
    assert.equal(caesarCipher('Khoor, Zruog!', 3, 'decrypt'), 'Hello, World!')
})

test('Vigenere uses alphabetic key shifts', () => {
    assert.equal(vigenereCipher('ATTACKATDAWN', 'LEMON', 'encrypt'), 'LXFOPVEFRNHR')
    assert.equal(vigenereCipher('LXFOPVEFRNHR', 'LEMON', 'decrypt'), 'ATTACKATDAWN')
})

test('Playfair matches the standard MONARCHY example', () => {
    assert.equal(playfairCipher('INSTRUMENTS', 'MONARCHY', 'encrypt'), 'GATLMZCLRQXA')
    assert.equal(playfairCipher('GATLMZCLRQXA', 'MONARCHY', 'decrypt'), 'INSTRUMENTSX')
})

test('Hill supports standard 3x3 encryption and decryption', () => {
    const key = '[[6,24,1],[13,16,10],[20,17,15]]'
    assert.equal(hillCipher('ACT', key, 'encrypt'), 'POH')
    assert.equal(hillCipher('POH', key, 'decrypt'), 'ACT')
})

test('Caesar brute force returns all 26 candidates locally', () => {
    const candidates = buildCaesarBruteForceCandidates('KHOOR')
    assert.equal(candidates.length, 26)
    assert.equal(candidates[3].plaintext, 'HELLO')
})
