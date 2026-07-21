import React, { useState, useRef } from 'react'
import {
    UploadCloudIcon,
    FileIcon,
    XIcon,
    DownloadIcon,
    CheckCircleIcon,
} from 'lucide-react'

export function FilePanel({
    variant,
    label,
    file,
    processedFile,
    onFileSelect,
    onClear,
    isProcessing,
}) {
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef(null)

    const handleDragOver = (e) => {
        e.preventDefault()
        setIsDragging(true)
    }
    const handleDragLeave = () => setIsDragging(false)
    const handleDrop = (e) => {
        e.preventDefault()
        setIsDragging(false)
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            onFileSelect?.(e.dataTransfer.files[0])
        }
    }
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            onFileSelect?.(e.target.files[0])
            e.target.value = ''
        }
    }
    const handleUploadKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            fileInputRef.current?.click()
        }
    }
    const handleDownload = () => {
        if (!processedFile) return
        const url = URL.createObjectURL(processedFile.blob)
        const a = document.createElement('a')
        a.href = url
        a.download = processedFile.fileName
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }
    const formatSize = (bytes) => {
        if (bytes === 0) return '0 Bytes'
        const k = 1024
        const sizes = ['Bytes', 'KB', 'MB', 'GB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }

    return (
        <div className="flex h-full flex-col overflow-hidden rounded-lg border border-[var(--panel-border)] bg-[var(--panel-bg)] shadow-[0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--accent)]/40">
            <div className="flex items-center justify-between gap-3 border-b border-[var(--panel-border)] bg-white/[0.03] px-4 py-3">
                <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[var(--panel-text)]">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent-2)] shadow-[0_0_14px_rgba(182,255,92,0.28)]" />
                    {label}
                </span>
                {variant === 'upload' && file && onClear && (
                    <button
                        onClick={onClear}
                        className="rounded-lg p-1.5 text-[var(--panel-text-muted)] transition-colors hover:bg-white/10 hover:text-[var(--error)]"
                        title="Clear file"
                        aria-label="Clear file"
                    >
                        <XIcon size={16} />
                    </button>
                )}
            </div>

            <div className="relative flex flex-1 flex-col items-center justify-center p-6">
                {variant === 'upload' ? (
                    file ? (
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-lg border border-[var(--accent)]/30 bg-[var(--accent-light)] text-[var(--accent)] shadow-[0_0_26px_var(--accent-glow)]">
                                <FileIcon size={32} />
                            </div>
                            <div>
                                <p className="max-w-[250px] truncate font-semibold text-[var(--panel-text)]" title={file.name}>
                                    {file.name}
                                </p>
                                <p className="mt-1 text-sm text-[var(--panel-text-muted)]">
                                    {formatSize(file.size)} locked in buffer
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div
                            className={`flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-5 text-center transition-all ${isDragging ? 'scale-[0.98] border-[var(--accent)] bg-[var(--accent-light)]' : 'border-[var(--panel-border)] bg-black/10 hover:border-[var(--accent)]/70 hover:bg-white/[0.04]'}`}
                            role="button"
                            tabIndex={0}
                            aria-label="Choose a file to upload"
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                            onKeyDown={handleUploadKeyDown}
                        >
                            <UploadCloudIcon size={48} className={`mb-4 transition-colors ${isDragging ? 'text-[var(--accent)]' : 'text-[var(--panel-text-muted)]'}`} />
                            <p className="mb-1 font-semibold text-[var(--panel-text)]">Drop file into the vault</p>
                            <p className="text-sm text-[var(--panel-text-muted)]">or click to browse</p>
                            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" tabIndex={-1} />
                        </div>
                    )
                ) : processedFile ? (
                    <div className="flex w-full flex-col items-center justify-center space-y-6 text-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--success)]/30 bg-[var(--success)]/10 text-[var(--success)] shadow-[0_0_30px_rgba(100,255,145,0.2)]">
                            <CheckCircleIcon size={40} />
                        </div>
                        <div>
                            <p className="mb-1 max-w-[250px] truncate text-lg font-semibold text-[var(--panel-text)]" title={processedFile.fileName}>
                                {processedFile.fileName}
                            </p>
                            <p className="text-sm text-[var(--panel-text-muted)]">{formatSize(processedFile.blob.size)}</p>
                        </div>
                        <button
                            onClick={handleDownload}
                            className="flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3 font-bold text-[#031014] shadow-[0_0_26px_var(--accent-glow)] transition-all hover:scale-105 hover:bg-[var(--accent-hover)] active:scale-95"
                        >
                            <DownloadIcon size={20} />
                            Download File
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center text-center opacity-70">
                        <FileIcon size={48} className="mb-4 text-[var(--panel-text-muted)]" />
                        <p className="font-medium text-[var(--panel-text-muted)]">
                            {isProcessing ? 'Processing secure payload...' : 'Awaiting file output...'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

