'use client'
import { MethodSelector } from "@/components/custom/MethodSelector";
import { ModeToggle } from "@/components/custom/ModeToggle";
import { TextPanel } from "@/components/custom/TextPanel";
import { TypeToggle } from "@/components/custom/TypeToggle";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRightLeftIcon, PlayIcon } from "lucide-react";
import { FilePanel } from "@/components/custom/FilePanel";
import JSZip from "jszip";

const CIPHER_CONFIG = {
  caesar: {
    endpoint: "/api/caesar"
  },
  vigenere: {
    endpoint: "/api/vigenere",
    prepareKey: (key) => parseInt(key, 10) || 0,
  },
  hill: {
    endpoint: "/api/hillfair-cipher",
    prepareKey: (key) => {
      try {
        return JSON.parse(key);
      } catch {
        return [[0, 0], [0, 0]]; // Fallback to avoid breaking JSON.stringify
      }
    },
  },
  playfair: {
    endpoint: "/api/playfair-cipher",
    prepareKey: (key) => key.trim(),
  }
};

export default function Home() {
  const [mode, setMode] = useState('encrypt')
  const [inputType, setInputType] = useState('text')
  const [method, setMethod] = useState('caesar')
  const [key, setKey] = useState('3') // Default key for Caesar

  const [inputText, setInputText] = useState('')
  const [file, setFile] = useState(null)
  const [keyFile, setKeyFile] = useState(null)
  const [processedFile, setProcessedFile] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [outputText, setOutputText] = useState('')

  // console.log(inputText);
  // console.log(mode);
  // console.log(method, key);
  console.log(file);
  // console.log(processedFile);
  // console.log(isProcessing);

  const handleMethodChange = (newMethod) => {
    setMethod(newMethod)
    // Reset key to sensible defaults when switching methods
    if (newMethod === 'caesar') setKey('3')
    else setKey('')
  }

  const handleCipherAction = useCallback(async () => {
    if (!inputText) {
      setOutputText('');
      return;
    }

    const config = CIPHER_CONFIG[method];
    if (!config) return;

    try {
      const payload = {
        text: inputText,
        mode: mode
      };

      if (config.prepareKey) {
        payload.key = config.prepareKey(key);
      }

      const response = await fetch(config.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Some endpoints return 'text', others return 'message: "mode: <result>"'
      let result = data.text;
      if (!result && data.message) {
        result = data.message.replace(/^(encrypt: |decrypt: )/, '');
      }

      setOutputText(result || '');
    } catch (error) {
      console.error("Cipher Error:", error);
      setOutputText("Error processing text. Check key format.");
    }
  }, [inputText, key, method, mode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleCipherAction();
    }, 500);

    return () => clearTimeout(timer);
  }, [handleCipherAction]);

  const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB

  const handleFileProcess = async () => {
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      alert('File size exceeds the 100MB limit. Please upload a smaller file.');
      return;
    }

    setIsProcessing(true);

    try {
      if (['rsa', 'aes'].includes(method)) {
        if (mode === 'encrypt') {
          const formData = new FormData();
          formData.append('file', file);

          // Send directly to FastAPI to bypass Next.js 10MB proxy limit
          const endpoint = method === 'rsa' ? 'http://127.0.0.1:8000/rsa-file-encrypt' : 'http://127.0.0.1:8000/aes-file-encrypt';

          const response = await fetch(endpoint, {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) throw new Error('Encryption failed');
          const data = await response.json();

          if (data.encrypted_file) {
            const encFileBytes = Uint8Array.from(atob(data.encrypted_file), c => c.charCodeAt(0));

            // Extract original extension from filename (e.g. ".mp4" from "plan.mp4")
            const extIndex = data.filename.lastIndexOf('.');
            const originalExt = extIndex !== -1 ? data.filename.substring(extIndex) : '';
            const baseName = extIndex !== -1 ? data.filename.substring(0, extIndex) : data.filename;

            // Build .enc file: [2-byte ext length][ext string][encrypted bytes]
            const extBytes = new TextEncoder().encode(originalExt);
            const header = new Uint8Array(2);
            new DataView(header.buffer).setUint16(0, extBytes.length, true); // little-endian
            const encWithHeader = new Uint8Array(header.length + extBytes.length + encFileBytes.length);
            encWithHeader.set(header, 0);
            encWithHeader.set(extBytes, 2);
            encWithHeader.set(encFileBytes, 2 + extBytes.length);

            // Auto-bundle into ZIP for RSA
            if (method === 'rsa' && data.private_key && data.encrypted_aes_key) {
              const zip = new JSZip();

              zip.file(baseName + '.enc', encWithHeader);

              const keyData = {
                private_key: data.private_key,
                encrypted_aes_key: data.encrypted_aes_key
              };
              zip.file(baseName + '.key', JSON.stringify(keyData, null, 2));

              const zipContent = await zip.generateAsync({ type: "blob" });

              setProcessedFile({
                blob: zipContent,
                fileName: baseName + '.zip'
              });
            } else {
              const encBlob = new Blob([encWithHeader], { type: 'application/octet-stream' });
              setProcessedFile({
                blob: encBlob,
                fileName: baseName + '.enc'
              });
            }
          } else {
            // Future handling for other responses
            alert("Processed successfully, but no file returned.");
          }

        } else if (mode === 'decrypt') {
          if (!keyFile) {
            alert('Please upload the key file needed for decryption.');
            setIsProcessing(false);
            return;
          }

          const keyFileContent = await keyFile.text();
          let keyData;
          try {
            keyData = JSON.parse(keyFileContent);
          } catch (e) {
            alert('Invalid key file format. Please upload a valid .key file.');
            setIsProcessing(false);
            return;
          }

          // Read the .enc file and extract the embedded extension header
          const encArrayBuffer = await file.arrayBuffer();
          const encAllBytes = new Uint8Array(encArrayBuffer);
          const extLength = new DataView(encArrayBuffer).getUint16(0, true);
          const originalExt = new TextDecoder().decode(encAllBytes.slice(2, 2 + extLength));
          const rawEncryptedBytes = encAllBytes.slice(2 + extLength);

          // Send only the raw encrypted data (without header) to backend
          const encBlob = new Blob([rawEncryptedBytes], { type: 'application/octet-stream' });
          const formData = new FormData();
          formData.append('encrypted_file', encBlob, 'encrypted.bin');

          if (method === 'rsa') {
            formData.append('encrypted_aes_key', keyData.encrypted_aes_key);
            formData.append('private_key', keyData.private_key);
          }
          // else handle 'aes' specific form fields in the future

          // Send directly to FastAPI bypass Next.js proxy limit
          const endpoint = method === 'rsa' ? 'http://127.0.0.1:8000/rsa-file-decrypt' : 'http://127.0.0.1:8000/aes-file-decrypt';

          try {
            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) throw new Error('Decryption failed');
            const data = await response.json();

            if (data.decrypted_file) {
              const decFileBytes = Uint8Array.from(atob(data.decrypted_file), c => c.charCodeAt(0));
              const decBlob = new Blob([decFileBytes], { type: 'application/octet-stream' });

              // Restore original filename with extension from .enc header
              const encBaseName = file.name.replace('.enc', '') || 'decrypted_file';
              setProcessedFile({
                blob: decBlob,
                fileName: encBaseName + originalExt
              });
            } else {
              alert("Decrypted successfully, but no file returned.");
            }
          } catch (err) {
            console.error(err);
            alert("Error decrypting file.");
          }
          setIsProcessing(false);
        }
      }
    } catch (e) {
      console.error("File processing error:", e);
      alert("An error occurred during file processing.");
    }

    setIsProcessing(false);
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
          <TypeToggle type={inputType} onChange={(newType) => {
            setInputType(newType);
            if (newType === 'text' && ['rsa', 'aes'].includes(method)) {
              setMethod('caesar');
            } else if (newType === 'file' && !['rsa', 'aes'].includes(method)) {
              setMethod('rsa');
            }
          }} />
        </div>
        <div className='flex justify-center mx-auto space-x-5 my-2'>
          <MethodSelector
            selected={method}
            onChange={handleMethodChange}
            keyValue={key}
            onKeyChange={setKey}
            inputType={inputType}
          />
        </div>
        <motion.div
          variants={itemVariants}
          className={`grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-6 items-stretch mt-4`}
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
              <div className="flex flex-col gap-4 h-[400px] lg:h-[500px]">
                <div className={['rsa', 'aes'].includes(method) && mode === 'decrypt' ? 'h-1/2' : 'h-full'}>
                  <FilePanel
                    variant="upload"
                    label={
                      mode === 'encrypt' ? 'File to Encrypt' : 'Encrypted File'
                    }
                    file={file}
                    onFileSelect={setFile}
                    onClear={() => {
                      setFile(null)
                      setProcessedFile(null)
                    }}
                  />
                </div>
                {['rsa', 'aes'].includes(method) && mode === 'decrypt' && (
                  <div className="h-1/2">
                    <FilePanel
                      variant="upload"
                      label="Key File (.key)"
                      file={keyFile}
                      onFileSelect={setKeyFile}
                      onClear={() => setKeyFile(null)}
                    />
                  </div>
                )}
              </div>

              {/* Middle Controls (Process) */}
              <div className="flex justify-center items-center py-2 lg:py-0">
                <button
                  onClick={handleFileProcess}
                  disabled={!file || (['rsa', 'aes'].includes(method) && mode === 'decrypt' && !keyFile) || isProcessing}
                  className="p-4 bg-(--panel-bg) text-(--accent) rounded-full shadow-lg hover:bg-(--panel-bg-hover) hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed group flex flex-col items-center justify-center gap-1"
                  title="Process File"
                  aria-label="Process File"
                >
                  <PlayIcon className="w-6 h-6 outline-none border-none fill-current" />
                  <span className="text-xs font-bold">Process</span>
                </button>
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
