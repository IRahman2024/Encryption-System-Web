import assert from 'node:assert/strict'
import test from 'node:test'
import { processText } from './classicalCiphers.mjs'
import {
    buildCaesarVisualizationSteps,
    buildVigenereVisualizationSteps,
} from './classicalVisualization.mjs'

test('Caesar visualization output matches the final cipher output', () => {
    const text = 'Hello, World!'
    const expected = processText(text, 'caesar', '3', 'encrypt')
    const visualized = buildCaesarVisualizationSteps(text, '3', 'encrypt')
        .map(step => step.output)
        .join('')
    assert.equal(visualized, expected)
})

test('Vigenere visualization output matches the final cipher output', () => {
    const text = 'ATTACK AT DAWN!'
    const expected = processText(text, 'vigenere', 'LEMON', 'encrypt')
    const visualized = buildVigenereVisualizationSteps(text, 'LEMON', 'encrypt')
        .map(step => step.output)
        .join('')
    assert.equal(visualized, expected)
})
