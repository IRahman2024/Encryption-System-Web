import React, { useState, useRef, createElement } from 'react'
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
    const handleDragLeave = () => {
        setIsDragging(false)
    }
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
        <div className="flex flex-col h-full bg-(--panel-bg) rounded-2xl border border(--panel-border) overflow-hidden shadow-xl">
            {/* Panel Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border(--panel-border) bg-black/10">
                <span className="text-sm font-semibold text-(--panel-text) uppercase tracking-wider">
                    {label}
                </span>
                {variant === 'upload' && file && onClear && (
                    <button
                        onClick={onClear}
                        className="p-1.5 text-(--panel-text-muted) hover:text-(--error) hover:bg-white/5 rounded-md transition-colors"
                        title="Clear file"
                        aria-label="Clear file"
                    >
                        <XIcon size={16} />
                    </button>
                )}
            </div>

            {/* Panel Content */}
            <div className="flex-1 p-6 flex flex-col items-center justify-center relative">
                {variant === 'upload' ? (
                    file ? (
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-(--accent-light) flex items-center justify-center text-(--accent) mb-2 shadow-inner">
                                <FileIcon size={32} />
                            </div>
                            <div>
                                <p
                                    className="text-(--panel-text) font-medium max-w-[250px] truncate"
                                    title={file.name}
                                >
                                    {file.name}
                                </p>
                                <p className="text-(--panel-text-muted) text-sm mt-1">
                                    {formatSize(file.size)}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div
                            className={`w-full h-full border-2 border-dashed rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer ${isDragging ? 'border-(--accent) bg-(--accent-light) scale-[0.98]' : 'border(--panel-border) hover:border-(--panel-text-muted) hover:bg-white/5'}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <UploadCloudIcon
                                size={48}
                                className={`mb-4 transition-colors ${isDragging ? 'text-(--accent)' : 'text-(--panel-text-muted)'}`}
                            />
                            <p className="text-(--panel-text) font-medium mb-1">
                                Drag & drop a file here
                            </p>
                            <p className="text-(--panel-text-muted) text-sm">
                                or click to browse
                            </p>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </div>
                    ) /* Download Variant */
                ) : processedFile ? (
                    <div className="flex flex-col items-center justify-center space-y-6 text-center w-full">
                        <div className="w-20 h-20 rounded-full bg-(--success)/10 flex items-center justify-center text-(--success) shadow-inner">
                            <CheckCircleIcon size={40} />
                        </div>
                        <div>
                            <p
                                className="text-(--panel-text) font-medium text-lg mb-1 max-w-[250px] truncate"
                                title={processedFile.fileName}
                            >
                                {processedFile.fileName}
                            </p>
                            <p className="text-(--panel-text-muted) text-sm">
                                {formatSize(processedFile.blob.size)}
                            </p>
                        </div>
                        <button
                            onClick={handleDownload}
                            className="flex items-center gap-2 px-6 py-3 bg-(--accent) hover:bg-(--accent-hover) text-(--panel-bg) font-semibold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg"
                        >
                            <DownloadIcon size={20} />
                            Download File
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center text-center opacity-50">
                        <FileIcon
                            size={48}
                            className="text-(--panel-text-muted) mb-4"
                        />
                        <p className="text-(--panel-text-muted)">
                            {isProcessing ? 'Processing...' : 'Awaiting file...'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
