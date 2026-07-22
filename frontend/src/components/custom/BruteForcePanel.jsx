'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
    ArrowDownToLine,
    CircleAlert,
    KeyRound,
    Orbit,
    RotateCcw,
} from 'lucide-react'
import { Quantum } from 'ldrs/react'
import { buildCaesarBruteForceCandidates } from '@/components/utils/classicalCiphers.mjs'

const ROW_HEIGHT_PX = 56 // fixed row height so 5 rows fit exactly in the scroll area

function LoadingState() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
            <Quantum size="142" speed="3.1" color="#05fbff" />
            <p className="font-mono text-sm text-[var(--text-main)]">
                Brute-forcing 26 shifts…
            </p>
            <p className="text-xs text-[var(--text-muted)]">
                Calculating every possible key locally.
            </p>
        </div>
    )
}

function ErrorState({ message, onRetry }) {
    return (
        <div className="flex flex-col items-center gap-3 rounded-md border border-[var(--error)]/40 bg-[var(--error)]/10 px-4 py-6 text-center">
            <CircleAlert className="h-6 w-6 text-[var(--error)]" />
            <p className="text-sm text-[var(--error)]">{message}</p>
            <button
                type="button"
                onClick={onRetry}
                className="rounded-md border border-[var(--panel-border)] bg-black/20 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
            >
                Retry
            </button>
        </div>
    )
}

function EmptyState() {
    return (
        <p className="py-10 text-center font-mono text-sm text-[var(--text-muted)]">
            Enter ciphertext to brute-force.
        </p>
    )
}

function CandidateRow({ candidate, isEven }) {
    return (
        <div
            className={`grid grid-cols-[minmax(8rem,18%)_minmax(0,1fr)] items-center gap-4 px-4 py-3 ${isEven ? 'bg-black/10' : 'bg-transparent'}`}
            style={{ minHeight: ROW_HEIGHT_PX }}
        >
            <div className="flex items-center gap-2">
                <KeyRound className="h-4 w-4 text-[var(--accent-3)]" />
                <span className="font-mono text-base font-bold text-[var(--accent)]">
                    Shift {candidate.shift}
                </span>
            </div>
            <code
                title={candidate.plaintext}
                className="block truncate text-left font-mono text-sm text-[var(--text-main)]"
            >
                {candidate.plaintext || <span className="text-[var(--text-muted)]">(empty)</span>}
            </code>
        </div>
    )
}

export function BruteForcePanel({ ciphertext = '' }) {
    const [candidates, setCandidates] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [hasRun, setHasRun] = useState(false)
    // Increment to force a re-fetch (used by the Retry button).
    const [reloadToken, setReloadToken] = useState(0)

    useEffect(() => {
        if (!ciphertext) {
            return undefined
        }

        let cancelled = false
        queueMicrotask(() => {
            if (cancelled) return
            setIsLoading(true)
            setError('')
        })


        Promise.resolve(buildCaesarBruteForceCandidates(ciphertext))
            .then(result => {
                if (cancelled) return
                setCandidates(result)
                setHasRun(true)
            })
            .catch(err => {
                if (cancelled) return
                setCandidates([])
                setError(err?.message || 'Unable to reach the brute-force service.')
                setHasRun(true)
            })
            .finally(() => {
                if (!cancelled) setIsLoading(false)
            })

        return () => {
            cancelled = true
        }
    }, [ciphertext, reloadToken])

    const showEmpty = !ciphertext
    const showLoading = !showEmpty && isLoading
    const showError = !showEmpty && !isLoading && !!error
    const showResults = !showEmpty && !isLoading && !error

    return (
        <section className="mt-5 overflow-hidden rounded-lg border border-[var(--panel-border)] bg-[var(--panel-bg)] shadow-[0_0_50px_rgba(0,229,204,0.06)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 border-b border-[var(--panel-border)] px-4 py-4 sm:px-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3">
                    <div className="hex-icon flex h-10 w-10 items-center justify-center bg-[var(--accent-3)]/15 text-[var(--accent-3)]">
                        <Orbit className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-3)]">
                            All possible keys
                        </p>
                        <h2 className="font-mono text-base font-bold capitalize text-[var(--text-main)]">
                            Caesar brute force
                        </h2>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <RotateCcw className="h-4 w-4 text-[var(--accent-3)]" />
                    <span className="font-mono uppercase tracking-[0.16em]">
                        {hasRun && !showLoading && !showError
                            ? `${candidates.length} candidates`
                            : 'Awaiting ciphertext'}
                    </span>
                </div>
            </div>

            <div className="p-4 sm:p-6">
                {showEmpty && <EmptyState />}
                {showLoading && <LoadingState />}
                {showError && (
                    <ErrorState
                        message={error}
                        onRetry={() => setReloadToken(token => token + 1)}
                    />
                )}

                {showResults && (
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-3"
                    >
                        <div className="flex items-center justify-between rounded-md border border-[var(--panel-border)] bg-black/20 px-3 py-2 text-xs">
                            <span className="flex items-center gap-2 text-[var(--text-muted)]">
                                <ArrowDownToLine className="h-4 w-4 text-[var(--accent-2)]" />
                                Generated locally with no network delay — scroll to inspect.
                            </span>
                            <span className="font-mono text-[var(--text-muted)]">
                                5 visible
                            </span>
                        </div>

                        <div
                            className="overflow-y-auto rounded-md border border-[var(--panel-border)] bg-black/15"
                            style={{ maxHeight: ROW_HEIGHT_PX * 5 }}
                        >
                            {candidates.map((candidate, index) => (
                                <CandidateRow
                                    key={candidate.shift}
                                    candidate={candidate}
                                    isEven={index % 2 === 0}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
