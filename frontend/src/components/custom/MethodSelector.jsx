'use client'
import React, { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ArrowRight,
    Grid3X3,
    KeyRound,
    KeySquare,
    LockKeyhole,
    RefreshCw,
    Repeat2,
    RotateCcw,
    Sigma,
} from 'lucide-react'

const METHODS = [
    { id: 'caesar', label: 'Caesar', type: 'text', icon: RotateCcw, description: 'Printable shift ring' },
    { id: 'vigenere', label: 'Vigenere', type: 'text', icon: Repeat2, description: 'Repeating key stream' },
    { id: 'playfair', label: 'Playfair', type: 'text', icon: Grid3X3, description: 'Digraph grid cipher' },
    { id: 'hill', label: 'Hill', type: 'text', icon: Sigma, description: 'Matrix block cipher' },
    { id: 'rsa', label: 'RSA', type: 'file', icon: KeySquare, description: 'Asymmetric file lock' },
    { id: 'aes', label: 'AES', type: 'file', icon: LockKeyhole, description: 'Symmetric file lock' },
]

function buildPlayfairGrid(rawKey) {
    const keyLetters = rawKey
        .toUpperCase()
        .replace(/[^A-Z]/g, '')
        .replace(/J/g, 'I')

    const seen = new Set()
    const grid = []
    for (const ch of keyLetters) {
        if (!seen.has(ch)) { seen.add(ch); grid.push(ch) }
    }
    for (let c = 65; c <= 90; c++) {
        const ch = String.fromCharCode(c)
        if (ch === 'J') continue
        if (!seen.has(ch)) { seen.add(ch); grid.push(ch) }
    }
    return { grid, keySet: new Set(keyLetters) }
}

const inputBase =
    'w-full rounded-xl border border-[var(--panel-border)] bg-black/20 py-2.5 pl-10 pr-4 ' +
    'text-sm font-semibold text-[var(--panel-text)] placeholder:text-[var(--panel-text-muted)]/60 ' +
    'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]'

function KeyInput({ label, value, onChange, type = 'text', placeholder }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="w-full"
        >
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                {label}
            </label>
            <div className="relative">
                <KeyRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--accent)]" />
                <input
                    type={type}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    placeholder={placeholder}
                    className={inputBase}
                    autoComplete="off"
                    spellCheck={false}
                />
            </div>
        </motion.div>
    )
}

function PlayfairGrid({ rawKey }) {
    const { grid, keySet } = useMemo(() => buildPlayfairGrid(rawKey), [rawKey])

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="w-full"
        >
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Polybius Square <span className="font-medium normal-case tracking-normal text-[var(--text-muted)]/70">(I = J)</span>
            </p>
            <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}>
                {grid.map((letter, idx) => {
                    const isKey = keySet.has(letter)
                    return (
                        <motion.div
                            key={idx}
                            layout
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            className={`flex aspect-square select-none items-center justify-center rounded-lg border text-sm font-black ${isKey ? 'border-[var(--accent-2)]/60 bg-[var(--accent-2)] text-[#071014] shadow-[0_0_16px_rgba(182,255,92,0.18)]' : 'border-[var(--panel-border)] bg-black/20 text-[var(--panel-text)]'}`}
                        >
                            {letter}
                        </motion.div>
                    )
                })}
            </div>
            {rawKey.trim() !== '' && (
                <p className="mt-2 text-xs text-[var(--text-muted)]/80">
                    Highlighted cells come from the key; remaining cells fill alphabetically.
                </p>
            )}
        </motion.div>
    )
}

function HillMatrixInput({ value, onChange }) {
    const matrix = useMemo(() => {
        try {
            const parsed = JSON.parse(value);
            if (Array.isArray(parsed) && Array.isArray(parsed[0])) {
                return parsed;
            }
        } catch {
            return [[0, 0], [0, 0]];
        }
        return [[0, 0], [0, 0]];
    }, [value]);

    const size = matrix.length || 2;

    const updateCell = (r, c, val) => {
        const newMatrix = matrix.map(row => [...row]);
        const intVal = parseInt(val, 10);
        newMatrix[r][c] = isNaN(intVal) ? 0 : intVal;
        onChange(JSON.stringify(newMatrix));
    };

    const toggleSize = (newSize) => {
        if (size === newSize) return;
        const newMatrix = newSize === 2
            ? [[0, 0], [0, 0]]
            : [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        onChange(JSON.stringify(newMatrix));
    };

    const generateRandomMatrix = () => {
        const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
        const getDet2x2 = (m) => m[0][0] * m[1][1] - m[0][1] * m[1][0];
        const getDet3x3 = (m) => {
            return m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1])
                - m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0])
                + m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);
        };

        while (true) {
            const tempMatrix = [];
            for (let r = 0; r < size; r++) {
                const row = [];
                for (let c = 0; c < size; c++) {
                    row.push(Math.floor(Math.random() * 26));
                }
                tempMatrix.push(row);
            }

            const det = size === 2 ? getDet2x2(tempMatrix) : getDet3x3(tempMatrix);
            const detMod26 = ((det % 26) + 26) % 26;

            if (detMod26 !== 0 && gcd(detMod26, 26) === 1) {
                onChange(JSON.stringify(tempMatrix));
                break;
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex w-full flex-col gap-3"
            key="hill"
        >
            <div className="flex items-center justify-between gap-3">
                <label className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    Hill Matrix Key
                </label>
                <div className="flex gap-1 rounded-lg border border-[var(--panel-border)] bg-black/20 p-1">
                    <button
                        onClick={() => toggleSize(2)}
                        className={`rounded-md px-3 py-1 text-xs font-black transition-colors ${size === 2 ? 'bg-[var(--accent)] text-[#031014]' : 'text-[var(--text-muted)] hover:bg-white/10 hover:text-[var(--text-main)]'}`}
                    >
                        2x2
                    </button>
                    <button
                        onClick={() => toggleSize(3)}
                        className={`rounded-md px-3 py-1 text-xs font-black transition-colors ${size === 3 ? 'bg-[var(--accent)] text-[#031014]' : 'text-[var(--text-muted)] hover:bg-white/10 hover:text-[var(--text-main)]'}`}
                    >
                        3x3
                    </button>
                </div>
            </div>

            <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}>
                {matrix.map((row, r) => (
                    row.map((cell, c) => (
                        <input
                            key={`${r}-${c}`}
                            type="number"
                            value={cell.toString()}
                            onChange={(e) => updateCell(r, c, e.target.value)}
                            className="w-full appearance-none rounded-xl border border-[var(--panel-border)] bg-black/20 px-2 py-3 text-center font-mono text-base font-black text-[var(--panel-text)] transition-all duration-200 [appearance:textfield] placeholder:text-[var(--panel-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            placeholder="0"
                        />
                    ))
                ))}
            </div>

            <button
                onClick={generateRandomMatrix}
                className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--panel-border)] bg-black/20 py-2 text-xs font-bold text-[var(--text-muted)] transition-colors hover:border-[var(--accent)]/50 hover:bg-[var(--accent-light)] hover:text-[var(--text-main)]"
            >
                <RefreshCw className="h-3.5 w-3.5" />
                Generate Random Key Matrix
            </button>
        </motion.div>
    );
}

export function MethodSelector({ selected, onChange, keyValue, onKeyChange, inputType, bruteForce = false, onBruteForceChange, mode = 'encrypt' }) {
    return (
        <div className="flex w-full flex-col gap-4">
            <div className={`grid w-full gap-2 ${inputType === 'text' ? 'sm:grid-cols-2 xl:grid-cols-4' : 'sm:grid-cols-2'}`}>
                {METHODS.filter(m => m.type === inputType).map((method) => {
                    const isActive = selected === method.id
                    const Icon = method.icon
                    return (
                        <button
                            key={method.id}
                            onClick={() => onChange(method.id)}
                            className={`algorithm-card group relative min-h-28 overflow-hidden rounded-lg border p-3 text-left transition-all ${isActive ? 'border-[var(--accent)] bg-[var(--accent)]/[0.08] shadow-[0_0_24px_var(--accent-glow)]' : 'border-[var(--panel-border)] bg-black/20 hover:border-[var(--accent)]/55 hover:bg-[var(--accent)]/[0.04]'}`}
                        >
                            <span className="relative z-10 flex h-full flex-col justify-between gap-3">
                                <span className="flex items-start justify-between gap-3">
                                    <span className={`hex-icon flex h-9 w-9 items-center justify-center ${isActive ? 'bg-[var(--accent)] text-[#031014]' : 'bg-[var(--accent)]/10 text-[var(--accent)]'}`}>
                                        <Icon className="h-4 w-4" />
                                    </span>
                                    <span className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-[var(--accent-2)] shadow-[0_0_10px_var(--accent-2)]' : 'bg-white/15'}`} />
                                </span>
                                <span>
                                    <strong className="block font-mono text-sm text-[var(--text-main)]">{method.label}</strong>
                                    <span className="mt-0.5 block text-[11px] text-[var(--text-muted)]">{method.description}</span>
                                </span>
                                <span className={`flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.16em] transition-colors ${isActive ? 'text-[var(--accent)]' : 'text-[var(--text-muted)] group-hover:text-[var(--accent)]'}`}>
                                    {isActive ? 'Selected' : 'Try it'}
                                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                                </span>
                            </span>
                        </button>
                    )
                })}
            </div>

            <div className="w-full max-w-md px-1">
                <AnimatePresence mode="wait">
                    {selected === 'caesar' && (
                        <motion.div key="caesar" className="flex flex-col gap-3">
                            <KeyInput
                                label="Caesar Shift"
                                type="number"
                                value={keyValue}
                                onChange={onKeyChange}
                                placeholder="Enter shift number"
                            />
                            {mode === 'decrypt' && (
                                <label className="flex cursor-pointer select-none items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]">
                                    <input
                                        type="checkbox"
                                        checked={!!bruteForce}
                                        onChange={event => onBruteForceChange?.(event.target.checked)}
                                        className="h-4 w-4 cursor-pointer accent-[var(--accent)]"
                                    />
                                    Brute Force
                                </label>
                            )}
                        </motion.div>
                    )}

                    {selected === 'vigenere' && (
                        <motion.div key="vigenere">
                            <KeyInput
                                label="Vigenere Key"
                                type="text"
                                value={keyValue}
                                onChange={onKeyChange}
                                placeholder="Enter text key"
                            />
                        </motion.div>
                    )}

                    {selected === 'playfair' && (
                        <motion.div key="playfair" className="flex flex-col gap-4">
                            <KeyInput
                                label="Playfair Key"
                                type="text"
                                value={keyValue}
                                onChange={onKeyChange}
                                placeholder="e.g. BOX"
                            />
                            <PlayfairGrid rawKey={keyValue ?? ''} />
                        </motion.div>
                    )}

                    {selected === 'hill' && (
                        <HillMatrixInput value={keyValue} onChange={onKeyChange} />
                    )}

                    {selected === 'rsa' && (!inputType || inputType === 'text') && (
                        <motion.div key="rsa">
                            <KeyInput
                                label="RSA Key"
                                type="text"
                                value={keyValue}
                                onChange={onKeyChange}
                                placeholder="Enter RSA key"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

