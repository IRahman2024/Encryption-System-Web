import React from 'react'
import { motion } from 'framer-motion'
import { FileTextIcon, FileIcon } from 'lucide-react'

export function TypeToggle({ type, onChange }) {
  return (
    <div className="relative flex items-center rounded-full border border-[var(--panel-border)] bg-[var(--control-bg)] p-1 shadow-inner shadow-black/40">
      <button
        onClick={() => onChange('text')}
        className={`relative z-10 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors sm:px-6 ${type === 'text' ? 'text-[#031014]' : 'text-[var(--panel-text-muted)] hover:text-[var(--panel-text)]'}`}
      >
        <FileTextIcon size={16} />
        Text
      </button>

      <button
        onClick={() => onChange('file')}
        className={`relative z-10 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors sm:px-6 ${type === 'file' ? 'text-[#031014]' : 'text-[var(--panel-text-muted)] hover:text-[var(--panel-text)]'}`}
      >
        <FileIcon size={16} />
        File
      </button>

      <motion.div
        className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-[var(--accent-2)] shadow-[0_0_22px_rgba(182,255,92,0.24)]"
        initial={false}
        animate={{ left: type === 'text' ? '4px' : 'calc(50%)' }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />
    </div>
  )
}
