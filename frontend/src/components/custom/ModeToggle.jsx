import React from 'react'
import { motion } from 'framer-motion'
import { LockIcon, UnlockIcon } from 'lucide-react'

export function ModeToggle({ mode, onChange }) {
    return (
        <div className="relative flex items-center rounded-full border border-[var(--panel-border)] bg-[var(--control-bg)] p-1 shadow-inner shadow-black/40">
            <button
                onClick={() => onChange('encrypt')}
                className={`relative z-10 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors sm:px-6 ${mode === 'encrypt' ? 'text-[#031014]' : 'text-[var(--panel-text-muted)] hover:text-[var(--panel-text)]'}`}
            >
                <LockIcon size={16} />
                Encrypt
            </button>

            <button
                onClick={() => onChange('decrypt')}
                className={`relative z-10 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors sm:px-6 ${mode === 'decrypt' ? 'text-[#031014]' : 'text-[var(--panel-text-muted)] hover:text-[var(--panel-text)]'}`}
            >
                <UnlockIcon size={16} />
                Decrypt
            </button>

            <motion.div
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-[var(--accent)] shadow-[0_0_22px_var(--accent-glow)]"
                initial={false}
                animate={{ left: mode === 'encrypt' ? '4px' : 'calc(50%)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
        </div>
    )
}
