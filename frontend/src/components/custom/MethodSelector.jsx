import React from 'react'
import { motion } from 'framer-motion'

const METHODS = [
    {
        id: 'caesar',
        label: 'Caesar',
    },
    {
        id: 'vigenère',
        label: 'Vigenère',
    },
    {
        id: 'playfair',
        label: 'Playfair',
    },
    {
        id: 'hill',
        label: 'Hill',
    },
    {
        id: 'rsa',
        label: 'RSA',
    },
]

export function MethodSelector({ selected, onChange }) {
    return (
        <div className="flex flex-wrap gap-2 justify-center bg-[#fff5e9] p-3 mx-auto rounded-md">
            {METHODS.map((method) => {
                const isActive = selected === method.id
                return (
                    <button
                        key={method.id}
                        onClick={() => onChange(method.id)}
                        className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive ? 'text-accent' : 'text-(--text-muted) hover:text-(--text-main) hover:bg-black/5'}`}
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
    )
}
