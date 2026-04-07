'use client'
import React, { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { KeyRound } from 'lucide-react'

const METHODS = [
    { id: 'caesar',   label: 'Caesar'   },
    { id: 'vigenère', label: 'Vigenère' },
    { id: 'playfair', label: 'Playfair' },
    { id: 'hill',     label: 'Hill'     },
    { id: 'rsa',      label: 'RSA'      },
]

/* ── Playfair helpers ───────────────────────────────────────── */

/**
 * Build a 25-letter Playfair alphabet from a key string.
 * Returns { grid: string[25], keySet: Set<string> }
 * Rules: uppercase, I=J merged, deduplicate, fill remaining A-Z.
 */
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

/* ── Main component ─────────────────────────────────────────── */

export function MethodSelector({ selected, onChange, keyValue, onKeyChange }) {
    return (
        <div className="flex flex-col gap-4 justify-center mx-auto w-full">
            {/* Method buttons */}
            <div className="bg-[#fff5e9] p-3 mx-auto rounded-md">
                {METHODS.map((method) => {
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

                    {selected === 'vigenère' && (
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
                        <motion.div key="hill">
                            <KeyInput
                                label="Hill cipher key"
                                type="text"
                                value={keyValue}
                                onChange={onKeyChange}
                                placeholder="Enter key string…"
                            />
                        </motion.div>
                    )}

                    {selected === 'rsa' && (
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
