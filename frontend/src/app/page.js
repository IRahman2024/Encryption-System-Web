'use client'
import { MethodSelector } from "@/components/custom/MethodSelector";
import { ModeToggle } from "@/components/custom/ModeToggle";
import { TextPanel } from "@/components/custom/TextPanel";
import { TypeToggle } from "@/components/custom/TypeToggle";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightLeftIcon } from "lucide-react";
import { FilePanel } from "@/components/custom/FilePanel";

export default function Home() {
  const [mode, setMode] = useState('encrypt')
  const [inputType, setInputType] = useState('text')
  const [method, setMethod] = useState('caesar')
  const [key, setKey] = useState('3') // Default key for Caesar

  const [inputText, setInputText] = useState('')
  const [file, setFile] = useState(null)
  const [processedFile, setProcessedFile] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [outputText, setOutputText] = useState('')

  // console.log(inputText);
  // console.log(file);
  // console.log(processedFile);
  // console.log(isProcessing);


  const handleMethodChange = (newMethod) => {
    setMethod(newMethod)
    // Reset key to sensible defaults when switching methods
    if (newMethod === 'caesar') setKey('3')
    else if (newMethod === 'vigenere' || newMethod === 'xor') setKey('')
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  }

  const handleSwap = () => {
    setInputText(outputText)
    setMode(mode === 'encrypt' ? 'decrypt' : 'encrypt')
  }

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-[#e8dbcc] dark:bg-black py-10">
      <main className="w-full mx-45">
        <div className="flex p-10 flex-col justify-center items-center clearfix space-y-6">
          <Image
            src="/logo-2.gif"
            alt=""
            width="50"
            height="50"
            className="rounded-xl" />
          <h1 className="text-4xl font-bold">Cipher Studio</h1>
          <p className="text-center text-gray-500">Securer client-side text encryption. Choose your method, enter your key,
            and protect your messages instantly.</p>
        </div>
        <div className="flex justify-center flex-wrap mx-auto space-x-5 my-2">
          <ModeToggle mode={mode} onChange={setMode} />
          <TypeToggle type={inputType} onChange={setInputType} />
        </div>
        <div className='flex flex-wrap rounded-full my-5'>
          <MethodSelector
            selected={method} onChange={handleMethodChange}
          ></MethodSelector>
        </div>
        <motion.div
          variants={itemVariants}
          className={`grid grid-cols-1 ${inputType === 'text' ? 'lg:grid-cols-[1fr_auto_1fr]' : 'lg:grid-cols-2'} gap-4 lg:gap-6 items-stretch mt-4`}
        >
          {inputType === 'text' ? (
            <>
              {/* Left Panel: Input */}
              <div className="h-[400px] lg:h-[500px]">
                <TextPanel
                  label={mode === 'encrypt' ? 'Plaintext' : 'Ciphertext'}
                  value={inputText}
                  onChange={setInputText}
                  placeholder={`Enter text to ${mode}...`}
                  onClear={() => setInputText('')}
                />
              </div>

              {/* Middle Controls (Swap) */}
              <div className="flex justify-center items-center py-2 lg:py-0">
                <button
                  onClick={handleSwap}
                  disabled={!inputText && !outputText}
                  className="p-4 bg-(--panel-bg) text-(--accent) rounded-full shadow-lg hover:bg-(--panel-bg-hover) hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed group"
                  title="Swap input and output"
                  aria-label="Swap input and output"
                >
                  <ArrowRightLeftIcon className="w-6 h-6 lg:rotate-0 rotate-90 transition-transform group-hover:rotate-180 duration-500" />
                </button>
              </div>

              {/* Right Panel: Output */}
              <div className="h-[400px] lg:h-[500px]">
                <TextPanel
                  label={mode === 'encrypt' ? 'Ciphertext' : 'Plaintext'}
                  value={outputText}
                  placeholder="Result will appear here..."
                  readOnly={true}
                />
              </div>
            </>
          ) : (
            <>
              {/* Left Panel: File Upload */}
              <div className="h-[400px] lg:h-[500px]">
                <FilePanel
                  variant="upload"
                  label={
                    mode === 'encrypt' ? 'File to Encrypt' : 'File to Decrypt'
                  }
                  file={file}
                  onFileSelect={setFile}
                  onClear={() => {
                    setFile(null)
                    setProcessedFile(null)
                  }}
                />
              </div>

              {/* Right Panel: File Download */}
              <div className="h-[400px] lg:h-[500px]">
                <FilePanel
                  variant="download"
                  label={
                    mode === 'encrypt' ? 'Encrypted File' : 'Decrypted File'
                  }
                  processedFile={processedFile}
                  isProcessing={isProcessing}
                />
              </div>
            </>
          )}
        </motion.div>
      </main>
    </div>
  );
}
