'use client'
import React, { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { KeyRound, RefreshCw } from 'lucide-react'

const METHODS = [
    { id: 'caesar',   label: 'Caesar',   type: 'text' },
    { id: 'vigenere', label: 'Vigenère', type: 'text' },
    { id: 'playfair', label: 'Playfair', type: 'text' },
    { id: 'hill',     label: 'Hill',     type: 'text' },
    { id: 'rsa',      label: 'RSA',      type: 'file' },
    { id: 'aes',      label: 'AES',      type: 'file' },
]

function buildPlayfairGrid(rawKey) {
    const keyLetters = rawKey
        .toUpperCase()
        .replace(/[^A-Z]/g, '')
        .replace(/J/g, 'I')

    const seen = new Set()
    const grid = []
    // Key letters first
    for (const ch of keyLetters) {
        if (!seen.has(ch)) { seen.add(ch); grid.push(ch) }
    }
    // Fill remaining
    for (let c = 65; c <= 90; c++) {
        const ch = String.fromCharCode(c)
        if (ch === 'J') continue          // I/J merged
        if (!seen.has(ch)) { seen.add(ch); grid.push(ch) }
    }
    return { grid, keySet: new Set(keyLetters) }
}

/* ── Sub-components ─────────────────────────────────────────── */

const inputBase =
    'w-full pl-10 pr-4 py-2.5 rounded-xl text-sm font-medium ' +
    'bg-[#fff5e9] border border-[#d4a053]/30 ' +
    'text-(--text-main) placeholder:text-(--text-muted) ' +
    'focus:outline-none focus:ring-2 focus:ring-[#d4a053]/50 ' +
    'transition-all duration-200'

function KeyInput({ label, value, onChange, type = 'text', placeholder }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="w-full"
        >
            <label className="block text-xs font-semibold text-(--text-muted) mb-1.5 tracking-wide uppercase">
                {label}
            </label>
            <div className="relative">
                <KeyRound
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4a053]/70 pointer-events-none"
                />
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

function CaesarBadge() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
        >
            <span className="text-xs font-semibold text-(--text-muted) uppercase tracking-wide">
                Fixed shift
            </span>
            <span className="px-3 py-1 rounded-full bg-[#d4a053]/20 text-[#d4a053] text-sm font-bold border border-[#d4a053]/40">
                Key: 3
            </span>
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
            <p className="text-xs font-semibold text-(--text-muted) mb-2 uppercase tracking-wide">
                Polybius Square
                <span className="ml-2 font-normal normal-case text-(--text-muted)/70">
                    (I = J)
                </span>
            </p>
            <div
                className="grid gap-1"
                style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}
            >
                {grid.map((letter, idx) => {
                    const isKey = keySet.has(letter)
                    return (
                        <motion.div
                            key={idx}
                            layout
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            className={[
                                'flex items-center justify-center',
                                'rounded-lg text-sm font-bold select-none',
                                'aspect-square border',
                                isKey
                                    ? 'bg-sky-300 text-sky-900 border-sky-400 shadow-sm shadow-sky-200'
                                    : 'bg-[#fff5e9] text-(--text-main) border-[#d4a053]/20',
                            ].join(' ')}
                        >
                            {letter}
                        </motion.div>
                    )
                })}
            </div>
            {rawKey.trim() !== '' && (
                <p className="mt-2 text-xs text-(--text-muted)/70">
                    <span className="inline-block w-3 h-3 rounded bg-sky-300 mr-1 align-middle" />
                    Key letters · remaining alphabet fills the rest
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
        // Handle empty input gracefully by passing 0 to backend, but
        // for UI we could let it be empty string if we wanted. But 0 is safer for API.
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

        const getDet2x2 = (m) => m[0][0]*m[1][1] - m[0][1]*m[1][0];
        const getDet3x3 = (m) => {
            return m[0][0]*(m[1][1]*m[2][2] - m[1][2]*m[2][1])
                 - m[0][1]*(m[1][0]*m[2][2] - m[1][2]*m[2][0])
                 + m[0][2]*(m[1][0]*m[2][1] - m[1][1]*m[2][0]);
        };

        // Continually generate random matrices until one is valid
        while (true) {
            const tempMatrix = [];
            for (let r = 0; r < size; r++) {
                const row = [];
                for (let c = 0; c < size; c++) {
                    row.push(Math.floor(Math.random() * 26)); // Hill cipher uses 0-25
                }
                tempMatrix.push(row);
            }

            const det = size === 2 ? getDet2x2(tempMatrix) : getDet3x3(tempMatrix);
            const detMod26 = ((det % 26) + 26) % 26;

            // Valid key matrix when determinant is coprime to 26
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
            className="w-full flex flex-col gap-3"
            key="hill"
        >
            <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-(--text-muted) tracking-wide uppercase">
                    Hill Matrix Key
                </label>
                <div className="flex gap-1 p-1 rounded-md bg-[#fff5e9] border border-[#d4a053]/20">
                    <button 
                        onClick={() => toggleSize(2)} 
                        className={`px-3 py-1 text-xs font-bold rounded transition-colors ${size === 2 ? 'bg-[#d4a053]/30 text-[#d4a053]' : 'text-(--text-muted) hover:bg-black/5'}`}
                    >
                        2x2
                    </button>
                    <button 
                        onClick={() => toggleSize(3)} 
                        className={`px-3 py-1 text-xs font-bold rounded transition-colors ${size === 3 ? 'bg-[#d4a053]/30 text-[#d4a053]' : 'text-(--text-muted) hover:bg-black/5'}`}
                    >
                        3x3
                    </button>
                </div>
            </div>
            
            <div 
                className="grid gap-2"
                style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
            >
                {matrix.map((row, r) => (
                    row.map((cell, c) => (
                        <input
                            key={`${r}-${c}`}
                            type="number"
                            value={cell.toString()}
                            onChange={(e) => updateCell(r, c, e.target.value)}
                            className="w-full px-2 py-3 text-center rounded-xl bg-[#fff5e9] border border-[#d4a053]/30 text-(--text-main) placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-[#d4a053]/50 transition-all duration-200 font-mono text-base font-bold appearance-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            placeholder="0"
                        />
                    ))
                ))}
            </div>

            <button
                onClick={generateRandomMatrix}
                className="w-full flex items-center justify-center gap-2 mt-1 py-2 text-xs font-semibold text-(--text-muted) hover:text-(--text-main) bg-black/5 hover:bg-[#d4a053]/20 rounded-lg transition-colors border border-transparent hover:border-[#d4a053]/30"
            >
                <RefreshCw className="w-3.5 h-3.5" />
                Generate Random Key Matrix
            </button>
        </motion.div>
    );
}

/* ── Main component ─────────────────────────────────────────── */

export function MethodSelector({ selected, onChange, keyValue, onKeyChange, inputType }) {
    return (
        <div className="flex flex-col gap-4 justify-center mx-auto w-full">
            {/* Method buttons */}
            <div className="bg-[#fff5e9] p-3 mx-auto rounded-md">
                {METHODS.filter(m => m.type === inputType).map((method) => {
                    const isActive = selected === method.id
                    return (
                        <button
                            key={method.id}
                            onClick={() => onChange(method.id)}
                            className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                                isActive
                                    ? 'text-accent'
                                    : 'text-(--text-muted) hover:text-(--text-main) hover:bg-black/5'
                            }`}
                        >
                            {method.label}
                            {isActive && (
                                <motion.div
                                    layoutId="activeMethod"
                                    className="absolute inset-0 border-2 border-accent rounded-lg"
                                    initial={false}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 500,
                                        damping: 35,
                                    }}
                                />
                            )}
                        </button>
                    )
                })}
            </div>

            {/* Key input area */}
            <div className="mx-auto w-full max-w-sm px-1 flex flex-col gap-4">
                <AnimatePresence mode="wait">
                    {selected === 'caesar' && (
                        <motion.div key="caesar">
                            <CaesarBadge />
                        </motion.div>
                    )}

                    {selected === 'vigenere' && (
                        <motion.div key="vigenere">
                            <KeyInput
                                label="Vigenère shift"
                                type="number"
                                value={keyValue}
                                onChange={onKeyChange}
                                placeholder="Enter a number…"
                            />
                        </motion.div>
                    )}

                    {selected === 'playfair' && (
                        <motion.div key="playfair" className="flex flex-col gap-4">
                            <KeyInput
                                label="Playfair key"
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
                                label="RSA key"
                                type="text"
                                value={keyValue}
                                onChange={onKeyChange}
                                placeholder="Enter RSA key…"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
