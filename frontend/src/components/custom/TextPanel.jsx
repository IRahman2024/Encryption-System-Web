import React, { useEffect, useState } from 'react'
import { CopyIcon, CheckIcon, TrashIcon } from 'lucide-react'

export function TextPanel({
    label,
    value,
    onChange,
    placeholder,
    readOnly = false,
    onClear,
}) {
 
    const [copied, setCopied] = useState(false)
    useEffect(() => {
        if (copied) {
            const timeout = setTimeout(() => setCopied(false), 2000)
            return () => clearTimeout(timeout)
        }
    }, [copied])
 
    const handleCopy = async () => {
        if (!value) return
        try {
            await navigator.clipboard.writeText(value)
            setCopied(true)
        } catch (err) {
            console.error('Failed to copy text', err)
        }
    }
 
    return (
        <div className="flex flex-col h-full bg-(--panel-bg) rounded-2xl border border-(--panel-border) overflow-hidden shadow-xl">
            {/* Panel Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-(--panel-border) bg-black/10">
                <span className="text-sm font-semibold text-(--panel-text) uppercase tracking-wider">
                    {label}
                </span>
                <div className="flex items-center gap-2">
                    {value?.length > 0 && (
                        <span className="text-xs text-(--panel-text-muted) mr-2">
                            {value.length} chars
                        </span>
                    )}

                    {onClear && (
                        <button
                            onClick={onClear}
                            className="p-1.5 text-(--panel-text-muted) hover:text-(--error) hover:bg-white/5 rounded-md transition-colors"
                            title="Clear text"
                            aria-label="Clear text"
                        >
                            <TrashIcon size={16} />
                        </button>
                    )}

                    {readOnly && (
                        <button
                            onClick={handleCopy}
                            disabled={!value}
                            className={`p-1.5 rounded-md transition-colors flex items-center gap-1.5 ${copied ? 'text-(--success) bg-(--success)/10' : 'text-(--panel-text-muted) hover:text-(--panel-text) hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed'}`}
                            title="Copy to clipboard"
                            aria-label="Copy to clipboard"
                        >
                            {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
                            <span className="text-xs font-medium pr-1">
                                {copied ? 'Copied' : 'Copy'}
                            </span>
                        </button>
                    )}
                </div>
            </div>

            {/* Text Area */}
            <div className="flex-1 p-4 relative">
                <textarea
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    className="w-full h-full min-h-[200px] bg-transparent text-(--panel-text) placeholder-(--panel-text-muted)/50 font-mono text-sm resize-none focus:outline-none"
                    spellCheck={false}
                />
            </div>
        </div>
    )
}
