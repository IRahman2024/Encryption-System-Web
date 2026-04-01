import React from 'react'
import { motion } from 'framer-motion'
import { FileTextIcon, FileIcon } from 'lucide-react'

export function TypeToggle({ type, onChange }) {
    const newLocal = "relative flex items-center p-1 bg-(--panel-bg) rounded-full border border-[var(--panel-border)] shadow-inner"
  return (
    <div className={newLocal}>
      <button
        onClick={() => onChange('text')}
        className={`relative z-10 flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full transition-colors ${type === 'text' ? 'text-(--panel-bg)' : 'text-(--panel-text-muted) hover:text-(--panel-text)'}`}
      >
        <FileTextIcon size={16} />
        Text
      </button>

      <button
        onClick={() => onChange('file')}
        className={`relative z-10 flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full transition-colors ${type === 'file' ? 'text-(--panel-bg)' : 'text-(--panel-text-muted) hover:text-(--panel-text)'}`}
      >
        <FileIcon size={16} />
        File
      </button>

      {/* Animated Background Pill */}
      <motion.div
        className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-accent rounded-full shadow-sm"
        initial={false}
        animate={{
          left: type === 'text' ? '4px' : 'calc(50%)',
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
