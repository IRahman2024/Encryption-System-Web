import React from 'react'
import { motion } from 'framer-motion'
import { LockIcon, UnlockIcon } from 'lucide-react'
// import { CipherMode } from '../utils/encryption'

export function ModeToggle({ mode, onChange }) {
    return (
        <div className="relative flex items-center p-1 bg-(--panel-bg) rounded-full border border-(--panel-border) shadow-inner">
            <button
                onClick={() => onChange('encrypt')}
                className={`relative z-10 flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full transition-colors ${mode === 'encrypt' ? 'text-(--panel-bg)' : 'text-(--panel-text-muted) hover:text-(--panel-text)'}`}
            >
                <LockIcon size={16} />
                Encrypt
            </button>

            <button
                onClick={() => onChange('decrypt')}
                className={`relative z-10 flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full transition-colors ${mode === 'decrypt' ? 'text-(--panel-bg)' : 'text-(--panel-text-muted) hover:text-(--panel-text)'}`}
            >
                <UnlockIcon size={16} />
                Decrypt
            </button>

            {/* Animated Background Pill */}
            <motion.div
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-accent rounded-full shadow-sm"
                initial={false}
                animate={{
                    left: mode === 'encrypt' ? '4px' : 'calc(50%)',
                }}
                transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                }}
            />
        </div>
    )
}
