import React, { useEffect, useState } from 'react'
import { CopyIcon, CheckIcon, TrashIcon } from 'lucide-react'

export function TextPanel({
    label,
    value,
    onChange,
    placeholder,
    readOnly = false,
    onClear,
    disabled = false,
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
        <div className={`group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--panel-border)] bg-[var(--panel-bg)] shadow-[0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--accent)]/40 ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}>
            <div className="flex items-center justify-between gap-3 border-b border-[var(--panel-border)] bg-white/[0.03] px-4 py-3">
                <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[var(--panel-text)]">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_14px_var(--accent-glow)]" />
                    {label}
                </span>
                <div className="flex items-center gap-2">
                    {value?.length > 0 && (
                        <span className="rounded-full border border-[var(--panel-border)] bg-black/20 px-2.5 py-1 text-xs text-[var(--panel-text-muted)]">
                            {value.length} chars
                        </span>
                    )}

                    {onClear && (
                        <button
                            onClick={onClear}
                            disabled={disabled}
                            className="rounded-lg p-1.5 text-[var(--panel-text-muted)] transition-colors hover:bg-white/10 hover:text-[var(--error)] disabled:cursor-not-allowed disabled:opacity-50"
                            title="Clear text"
                            aria-label="Clear text"
                        >
                            <TrashIcon size={16} />
                        </button>
                    )}

                    {readOnly && (
                        <button
                            onClick={handleCopy}
                            disabled={!value || disabled}
                            className={`flex items-center gap-1.5 rounded-lg p-1.5 transition-colors ${copied ? 'bg-[var(--success)]/10 text-[var(--success)]' : 'text-[var(--panel-text-muted)] hover:bg-white/10 hover:text-[var(--panel-text)] disabled:cursor-not-allowed disabled:opacity-50'}`}
                            title="Copy to clipboard"
                            aria-label="Copy to clipboard"
                        >
                            {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
                            <span className="pr-1 text-xs font-semibold">
                                {copied ? 'Copied' : 'Copy'}
                            </span>
                        </button>
                    )}
                </div>
            </div>

            <div className="relative flex-1 p-4">
                <div className="pointer-events-none absolute inset-4 rounded-lg border border-white/[0.04] bg-[linear-gradient(135deg,rgba(38,246,255,0.05),transparent_45%,rgba(182,255,92,0.04))]" />
                <textarea
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    placeholder={disabled ? 'Please enter a key to enable encryption...' : placeholder}
                    readOnly={readOnly}
                    disabled={disabled}
                    className="relative z-10 h-full min-h-[200px] w-full resize-none bg-transparent p-2 font-mono text-sm leading-6 text-[var(--panel-text)] placeholder:text-[var(--panel-text-muted)]/55 focus:outline-none disabled:cursor-not-allowed"
                    spellCheck={false}
                />
            </div>
        </div>
    )
}

