'use client'

import { useEffect, useMemo, useState } from 'react'
import {
    ChevronLeft,
    ChevronRight,
    CirclePause,
    CirclePlay,
    Gauge,
    Orbit,
    Route,
} from 'lucide-react'

const PRINTABLE_START = 32
const PRINTABLE_COUNT = 95
const ALPHABET = 'ABCDEFGHIKLMNOPQRSTUVWXYZ'

const mod = (value, divisor) => ((value % divisor) + divisor) % divisor
const printableLabel = (char) => char === ' ' ? 'SPACE' : char

function parseMatrix(rawKey) {
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
            const minorDet = minor[0][0] * minor[1][1] - minor[0][1] * minor[1][0]
            result[column][row] = ((row + column) % 2 === 0 ? 1 : -1) * minorDet
        }
    }
    return result
}

function inverseKeyMatrix(matrix) {
    const inverseDeterminant = modularInverse(determinant(matrix), 26)
    if (inverseDeterminant === null) return null
    return adjugate(matrix).map(row => row.map(value => mod(inverseDeterminant * value, 26)))
}

function buildPlayfairMatrix(rawKey) {
    const key = rawKey.toUpperCase().replace(/J/g, 'I').replace(/[^A-Z]/g, '')
    const seen = new Set()
    const letters = []
    for (const char of key + ALPHABET) {
        if (!seen.has(char)) {
            seen.add(char)
            letters.push(char)
        }
    }
    return Array.from({ length: 5 }, (_, row) => letters.slice(row * 5, row * 5 + 5))
}

function preparePlayfairText(rawText, mode) {
    const clean = [...rawText]
        .filter(char => /[A-Za-z]/.test(char))
        .join('')
        .toUpperCase()
        .replace(/J/g, 'I')

    if (mode === 'decrypt') return clean

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

function positionOf(matrix, char) {
    for (let row = 0; row < matrix.length; row += 1) {
        const column = matrix[row].indexOf(char)
        if (column !== -1) return [row, column]
    }
    return null
}

function buildCaesarSteps(text, rawKey, mode) {
    const shift = Number.parseInt(rawKey, 10) || 3
    const signedShift = mode === 'encrypt' ? shift : -shift
    return [...text].map((input, index) => {
        const sourceIndex = mod(input.codePointAt(0) - PRINTABLE_START, PRINTABLE_COUNT)
        const targetIndex = mod(sourceIndex + signedShift, PRINTABLE_COUNT)
        return {
            index,
            input,
            output: String.fromCharCode(targetIndex + PRINTABLE_START),
            sourceIndex,
            targetIndex,
            signedShift,
            explanation: `${mode === 'encrypt' ? 'Add' : 'Subtract'} ${Math.abs(shift)} in the 95-character printable ring.`,
        }
    })
}

function buildVigenereSteps(text, key, mode) {
    if (!key) return []
    const keyCharacters = [...key]
    return [...text].map((input, index) => {
        const keyChar = keyCharacters[index % keyCharacters.length]
        const keyShift = keyChar.codePointAt(0) - PRINTABLE_START
        const signedShift = mode === 'encrypt' ? keyShift : -keyShift
        const sourceIndex = mod(input.codePointAt(0) - PRINTABLE_START, PRINTABLE_COUNT)
        const targetIndex = mod(sourceIndex + signedShift, PRINTABLE_COUNT)
        return {
            index,
            input,
            output: String.fromCharCode(targetIndex + PRINTABLE_START),
            keyChar,
            keyShift,
            sourceIndex,
            targetIndex,
            signedShift,
            explanation: `Key “${printableLabel(keyChar)}” contributes ${keyShift}; ${mode === 'encrypt' ? 'add' : 'subtract'} it modulo 95.`,
        }
    })
}

function buildPlayfairSteps(text, key, mode) {
    if (!key) return []
    const matrix = buildPlayfairMatrix(key)
    const prepared = preparePlayfairText(text, mode)
    const shift = mode === 'encrypt' ? 1 : 4
    const steps = []

    for (let index = 0; index + 1 < prepared.length; index += 2) {
        const inputPair = prepared.slice(index, index + 2)
        const firstPosition = positionOf(matrix, inputPair[0])
        const secondPosition = positionOf(matrix, inputPair[1])
        if (!firstPosition || !secondPosition) continue

        const [firstRow, firstColumn] = firstPosition
        const [secondRow, secondColumn] = secondPosition
        let targetPositions
        let rule
        let explanation

        if (firstRow === secondRow) {
            targetPositions = [
                [firstRow, (firstColumn + shift) % 5],
                [secondRow, (secondColumn + shift) % 5],
            ]
            rule = 'same-row'
            explanation = `Same row: shift ${mode === 'encrypt' ? 'right' : 'left'}, wrapping at the edge.`
        } else if (firstColumn === secondColumn) {
            targetPositions = [
                [(firstRow + shift) % 5, firstColumn],
                [(secondRow + shift) % 5, secondColumn],
            ]
            rule = 'same-column'
            explanation = `Same column: shift ${mode === 'encrypt' ? 'down' : 'up'}, wrapping at the edge.`
        } else {
            targetPositions = [[firstRow, secondColumn], [secondRow, firstColumn]]
            rule = 'rectangle'
            explanation = 'Rectangle: keep each row and take the opposite corner column.'
        }

        steps.push({
            index: steps.length,
            matrix,
            prepared,
            inputPair,
            outputPair: targetPositions.map(([row, column]) => matrix[row][column]).join(''),
            sourcePositions: [firstPosition, secondPosition],
            targetPositions,
            rule,
            explanation,
        })
    }
    return steps
}

function buildHillSteps(text, rawKey, mode) {
    const keyMatrix = parseMatrix(rawKey)
    if (!keyMatrix) return { steps: [], error: 'Enter a valid 2x2 or 3x3 numeric key matrix.' }

    const matrix = mode === 'decrypt' ? inverseKeyMatrix(keyMatrix) : keyMatrix
    if (!matrix) return { steps: [], error: 'This matrix has no modular inverse, so it cannot decrypt modulo 26.' }

    const size = matrix.length
    let prepared = [...text].filter(char => /[A-Za-z]/.test(char)).join('').toUpperCase()
    if (mode === 'encrypt') {
        while (prepared.length % size !== 0) prepared += 'X'
    }

    const steps = []
    for (let index = 0; index + size <= prepared.length; index += size) {
        const inputBlock = prepared.slice(index, index + size)
        const vector = [...inputBlock].map(char => char.charCodeAt(0) - 65)
        const calculations = matrix.map(row => {
            const terms = row.map((value, column) => value * vector[column])
            const sum = terms.reduce((total, value) => total + value, 0)
            return { terms, sum, result: mod(sum, 26) }
        })
        steps.push({
            index: steps.length,
            inputBlock,
            outputBlock: calculations.map(item => String.fromCharCode(item.result + 65)).join(''),
            vector,
            matrix,
            calculations,
            explanation: `${mode === 'decrypt' ? 'Inverse key' : 'Key'} matrix × ${size}-letter vector, then reduce every row modulo 26.`,
        })
    }
    return { steps, error: '' }
}

function buildVisualization(method, text, key, mode) {
    if (!text) return { steps: [], error: '' }
    if (method === 'caesar') return { steps: buildCaesarSteps(text, key, mode), error: '' }
    if (method === 'vigenere') return { steps: buildVigenereSteps(text, key, mode), error: key ? '' : 'Enter a Vigenere key to begin.' }
    if (method === 'playfair') return { steps: buildPlayfairSteps(text, key, mode), error: key ? '' : 'Enter a Playfair key to build the matrix.' }
    if (method === 'hill') return buildHillSteps(text, key, mode)
    return { steps: [], error: '' }
}

function CharacterNode({ label, char, tone = 'neutral' }) {
    const tones = {
        neutral: 'border-white/10 bg-white/[0.03] text-[var(--text-main)]',
        source: 'border-[var(--accent)]/70 bg-[var(--accent)]/10 text-[var(--accent)] shadow-[0_0_22px_var(--accent-glow)]',
        target: 'border-[var(--accent-2)]/70 bg-[var(--accent-2)]/10 text-[var(--accent-2)] shadow-[0_0_22px_rgba(182,255,92,0.14)]',
    }
    return (
        <div className={`min-w-24 rounded-lg border px-4 py-3 text-center ${tones[tone]}`}>
            <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">{label}</span>
            <strong className="mt-1 block font-mono text-2xl">{printableLabel(char)}</strong>
        </div>
    )
}

function ShiftDiagram({ step }) {
    const direction = step.signedShift >= 0 ? 'right' : 'left'
    const distance = Math.abs(step.signedShift)
    return (
        <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-center gap-3">
                <CharacterNode label="Source" char={step.input} tone="source" />
                <div className="flex min-w-40 flex-1 items-center gap-2 text-[var(--accent)]">
                    <span className="h-px flex-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] shadow-[0_0_10px_var(--accent-glow)]" />
                    <span className="whitespace-nowrap rounded-full border border-[var(--accent)]/30 bg-black/20 px-3 py-1 font-mono text-xs">
                        {direction} {distance}
                    </span>
                    <ChevronRight className={`h-5 w-5 ${direction === 'left' ? 'rotate-180' : ''}`} />
                </div>
                <CharacterNode label="Result" char={step.output} tone="target" />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Metric label="Source index" value={step.sourceIndex} />
                {'keyChar' in step && <Metric label="Key character" value={printableLabel(step.keyChar)} />}
                {'keyShift' in step && <Metric label="Key shift" value={step.keyShift} />}
                <Metric label="Target index" value={step.targetIndex} />
            </div>
        </div>
    )
}

function Metric({ label, value }) {
    return (
        <div className="border-l border-[var(--panel-border)] pl-3">
            <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">{label}</span>
            <strong className="mt-1 block font-mono text-lg text-[var(--text-main)]">{value}</strong>
        </div>
    )
}

function VigenereAlignment({ steps, currentIndex }) {
    const start = Math.max(0, currentIndex - 5)
    const visible = steps.slice(start, start + 11)
    const row = (label, getValue, tone) => (
        <div className="grid grid-cols-[4.5rem_repeat(var(--visible),minmax(2rem,1fr))] gap-1" style={{ '--visible': visible.length }}>
            <span className="self-center text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">{label}</span>
            {visible.map(item => (
                <span
                    key={`${label}-${item.index}`}
                    className={`flex aspect-square min-h-8 items-center justify-center rounded border font-mono text-xs transition-all ${item.index === currentIndex ? tone : 'border-white/10 bg-white/[0.02] text-[var(--text-muted)]'}`}
                >
                    {printableLabel(getValue(item))}
                </span>
            ))}
        </div>
    )
    return (
        <div className="space-y-2 overflow-hidden">
            {row('Input', item => item.input, 'border-[var(--accent)] bg-[var(--accent)]/15 text-[var(--accent)]')}
            {row('Key', item => item.keyChar, 'border-[var(--accent-3)] bg-[var(--accent-3)]/15 text-[var(--accent-3)]')}
            {row('Output', item => item.index <= currentIndex ? item.output : '·', 'border-[var(--accent-2)] bg-[var(--accent-2)]/15 text-[var(--accent-2)]')}
        </div>
    )
}

function PlayfairDiagram({ step }) {
    const samePosition = (position, target) => position[0] === target[0] && position[1] === target[1]
    const isSource = position => step.sourcePositions.some(target => samePosition(position, target))
    const isTarget = position => step.targetPositions.some(target => samePosition(position, target))
    const isRuleArea = ([row, column]) => {
        if (step.rule === 'same-row') return row === step.sourcePositions[0][0]
        if (step.rule === 'same-column') return column === step.sourcePositions[0][1]
        return [step.sourcePositions[0][0], step.sourcePositions[1][0]].includes(row)
            && [step.sourcePositions[0][1], step.sourcePositions[1][1]].includes(column)
    }

    return (
        <div className="grid gap-5 md:grid-cols-[minmax(15rem,21rem)_1fr] md:items-center">
            <div className="grid grid-cols-5 gap-1.5">
                {step.matrix.flatMap((row, rowIndex) => row.map((letter, columnIndex) => {
                    const position = [rowIndex, columnIndex]
                    const source = isSource(position)
                    const target = isTarget(position)
                    return (
                        <div
                            key={`${rowIndex}-${columnIndex}`}
                            className={`flex aspect-square items-center justify-center rounded-md border font-mono text-sm font-bold transition-all duration-300 ${target ? 'border-[var(--accent-2)] bg-[var(--accent-2)]/20 text-[var(--accent-2)] shadow-[0_0_18px_rgba(182,255,92,0.18)]' : source ? 'border-[var(--accent)] bg-[var(--accent)]/20 text-[var(--accent)] shadow-[0_0_18px_var(--accent-glow)]' : isRuleArea(position) ? 'border-[var(--accent-3)]/40 bg-[var(--accent-3)]/10 text-[var(--text-main)]' : 'border-white/10 bg-white/[0.02] text-[var(--text-muted)]'}`}
                        >
                            {letter}
                        </div>
                    )
                }))}
            </div>
            <div className="flex items-center justify-center gap-3">
                <CharacterNode label="Pair" char={step.inputPair} tone="source" />
                <Route className="h-6 w-6 text-[var(--accent-3)]" />
                <CharacterNode label="Mapped" char={step.outputPair} tone="target" />
            </div>
        </div>
    )
}

function MatrixGrid({ matrix }) {
    return (
        <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${matrix.length}, minmax(2.5rem, 1fr))` }}>
            {matrix.flat().map((value, index) => (
                <span key={index} className="flex h-10 items-center justify-center border border-[var(--accent)]/25 bg-[var(--accent)]/[0.06] font-mono text-sm text-[var(--accent)]">
                    {value}
                </span>
            ))}
        </div>
    )
}

function VectorGrid({ values, tone = 'source' }) {
    const toneClass = tone === 'target'
        ? 'border-[var(--accent-2)]/35 bg-[var(--accent-2)]/[0.07] text-[var(--accent-2)]'
        : 'border-[var(--accent-3)]/35 bg-[var(--accent-3)]/[0.07] text-[var(--accent-3)]'
    return (
        <div className="grid gap-1">
            {values.map((value, index) => (
                <span key={index} className={`flex h-10 min-w-12 items-center justify-center border font-mono text-sm ${toneClass}`}>{value}</span>
            ))}
        </div>
    )
}

function HillDiagram({ step }) {
    return (
        <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-center gap-4">
                <MatrixGrid matrix={step.matrix} />
                <span className="font-mono text-xl text-[var(--text-muted)]">×</span>
                <VectorGrid values={step.vector} />
                <span className="font-mono text-xl text-[var(--text-muted)]">≡</span>
                <VectorGrid values={step.calculations.map(item => item.result)} tone="target" />
                <span className="font-mono text-xs text-[var(--text-muted)]">mod 26</span>
            </div>
            <div className="grid gap-2 md:grid-cols-3">
                {step.calculations.map((calculation, index) => (
                    <div key={index} className="rounded-md border border-white/10 bg-black/20 px-3 py-2 font-mono text-xs text-[var(--text-muted)]">
                        row {index + 1}: {calculation.terms.join(' + ')} = {calculation.sum} → <span className="text-[var(--accent-2)]">{calculation.result}</span>
                    </div>
                ))}
            </div>
            <p className="text-center font-mono text-sm text-[var(--text-main)]">
                {step.inputBlock} → <span className="text-[var(--accent-2)]">{step.outputBlock}</span>
            </p>
        </div>
    )
}

export function CipherVisualizer({ method, text, output, keyValue, mode }) {
    const { steps, error } = useMemo(
        () => buildVisualization(method, text, keyValue, mode),
        [method, text, keyValue, mode],
    )
    const [stepIndex, setStepIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [speed, setSpeed] = useState(900)
    const currentStep = steps[Math.min(stepIndex, Math.max(0, steps.length - 1))]

    useEffect(() => {
        if (!isPlaying || steps.length < 2) return undefined
        const timer = window.setInterval(() => {
            setStepIndex(current => {
                if (current >= steps.length - 1) {
                    setIsPlaying(false)
                    return current
                }
                return current + 1
            })
        }, speed)
        return () => window.clearInterval(timer)
    }, [isPlaying, speed, steps.length])

    if (!['caesar', 'vigenere', 'playfair', 'hill'].includes(method)) return null

    const previous = () => {
        setIsPlaying(false)
        setStepIndex(current => Math.max(0, current - 1))
    }
    const next = () => {
        setIsPlaying(false)
        setStepIndex(current => Math.min(steps.length - 1, current + 1))
    }
    const togglePlay = () => {
        if (stepIndex >= steps.length - 1) setStepIndex(0)
        setIsPlaying(current => !current)
    }

    return (
        <section className="mt-5 overflow-hidden rounded-lg border border-[var(--panel-border)] bg-[var(--panel-bg)] shadow-[0_0_50px_rgba(0,229,204,0.06)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 border-b border-[var(--panel-border)] px-4 py-4 sm:px-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3">
                    <div className="hex-icon flex h-10 w-10 items-center justify-center bg-[var(--accent)]/15 text-[var(--accent)]">
                        <Orbit className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Live transformation trace</p>
                        <h2 className="font-mono text-base font-bold capitalize text-[var(--text-main)]">{method} visual lab</h2>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <button type="button" onClick={previous} disabled={!currentStep || stepIndex === 0} className="visual-control" title="Previous step" aria-label="Previous step">
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button type="button" onClick={togglePlay} disabled={steps.length < 2} className="visual-control visual-control-primary" title={isPlaying ? 'Pause autoplay' : 'Start autoplay'} aria-label={isPlaying ? 'Pause autoplay' : 'Start autoplay'}>
                        {isPlaying ? <CirclePause className="h-4 w-4" /> : <CirclePlay className="h-4 w-4" />}
                        <span>{isPlaying ? 'Pause' : 'Auto play'}</span>
                    </button>
                    <button type="button" onClick={next} disabled={!currentStep || stepIndex >= steps.length - 1} className="visual-control" title="Next step" aria-label="Next step">
                        <ChevronRight className="h-4 w-4" />
                    </button>
                    <label className="ml-1 flex items-center gap-2 text-xs text-[var(--text-muted)]">
                        <Gauge className="h-4 w-4 text-[var(--accent-3)]" />
                        <span className="sr-only">Autoplay speed</span>
                        <input
                            type="range"
                            min="300"
                            max="1800"
                            step="150"
                            value={2100 - speed}
                            onChange={event => setSpeed(2100 - Number(event.target.value))}
                            className="visual-speed"
                            aria-label="Autoplay speed"
                        />
                    </label>
                </div>
            </div>

            <div className="p-4 sm:p-6">
                {!text && (
                    <div className="py-9 text-center">
                        <p className="font-mono text-sm text-[var(--text-main)]">Enter text to generate the trace.</p>
                        <p className="mt-2 text-xs text-[var(--text-muted)]">The final result still comes from the existing cipher endpoint.</p>
                    </div>
                )}

                {text && error && (
                    <div className="rounded-md border border-[var(--error)]/35 bg-[var(--error)]/10 px-4 py-3 text-sm text-[var(--error)]">{error}</div>
                )}

                {currentStep && (
                    <div className="space-y-5">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <p className="text-sm text-[var(--text-main)]">{currentStep.explanation}</p>
                            <span className="rounded-full border border-[var(--panel-border)] bg-black/20 px-3 py-1 font-mono text-xs text-[var(--text-muted)]">
                                Step {Math.min(stepIndex + 1, steps.length)} / {steps.length}
                            </span>
                        </div>

                        {(method === 'caesar' || method === 'vigenere') && <ShiftDiagram step={currentStep} />}
                        {method === 'vigenere' && <VigenereAlignment steps={steps} currentIndex={stepIndex} />}
                        {method === 'playfair' && <PlayfairDiagram step={currentStep} />}
                        {method === 'hill' && <HillDiagram step={currentStep} />}

                        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--panel-border)] pt-4 text-xs">
                            <span className="text-[var(--text-muted)]">Server output remains authoritative</span>
                            <code className="max-w-full break-all text-[var(--accent-2)]">{output || 'processing…'}</code>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

