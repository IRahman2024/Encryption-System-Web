'use client'
import { MethodSelector } from "@/components/custom/MethodSelector";
import { ModeToggle } from "@/components/custom/ModeToggle";
import { TextPanel } from "@/components/custom/TextPanel";
import { TypeToggle } from "@/components/custom/TypeToggle";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRightLeftIcon, BinaryIcon, KeyRoundIcon, PlayIcon, ShieldCheckIcon, SparklesIcon } from "lucide-react";
import { FilePanel } from "@/components/custom/FilePanel";
import { CipherVisualizer } from "@/components/custom/CipherVisualizer";
import { BruteForcePanel } from "@/components/custom/BruteForcePanel";
import JSZip from "jszip";

const CIPHER_CONFIG = {
  caesar: {
    endpoint: "/api/caesar",
    prepareKey: (key) => parseInt(key, 10) || 3,
  },
  vigenere: {
    endpoint: "/api/vigenere",
    prepareKey: (key) => key,
  },
  hill: {
    endpoint: "/api/hillfair-cipher",
    prepareKey: (key) => {
      try {
        return JSON.parse(key);
      } catch {
        return [[0, 0], [0, 0]];
      }
    },
  },
  playfair: {
    endpoint: "/api/playfair-cipher",
    prepareKey: (key) => key.trim(),
  }
};

const BIT_SEEDS = [
  '0100110011010010110100101101',
  '1011001010110100101001011010',
  '0010110100101101011010010011',
  '1100100101101001011010010110',
  '0110101100100101101010011010',
];

const binaryColumns = Array.from({ length: 64 }, (_, index) => {
  const length = 20 + ((index * 7) % 25);
  const seed = BIT_SEEDS[index % BIT_SEEDS.length];
  const offset = (index * 3) % seed.length;
  const source = seed.repeat(Math.ceil((length + offset) / seed.length) + 1);

  return {
    bits: source.slice(offset, offset + length),
    left: `${(index * 1.61 + (index % 5) * 0.19) % 100}%`,
    delay: `-${((index * 1.37) % 12).toFixed(2)}s`,
    duration: `${(6.5 + (index % 9) * 0.62).toFixed(2)}s`,
    opacity: (0.16 + (index % 6) * 0.055).toFixed(2),
    size: `${(0.58 + (index % 4) * 0.055).toFixed(2)}rem`,
    blur: index % 11 === 0 ? '0.9px' : index % 5 === 0 ? '0.35px' : '0px',
    drift: `${((index % 5) - 2) * 7}px`,
  };
});

export default function Home() {
  const [mode, setMode] = useState('encrypt')
  const [inputType, setInputType] = useState('text')
  const [method, setMethod] = useState('caesar')
  const [key, setKey] = useState('3')

  const [inputText, setInputText] = useState('')
  const [file, setFile] = useState(null)
  const [keyFile, setKeyFile] = useState(null)
  const [processedFile, setProcessedFile] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [outputText, setOutputText] = useState('')
  const [ambientMotion, setAmbientMotion] = useState(true)
  const [bruteForce, setBruteForce] = useState(false)

  const handleMethodChange = (newMethod) => {
    setMethod(newMethod)
    if (newMethod === 'caesar') setKey('3')
    else if (newMethod === 'hill') setKey('[[0,0],[0,0]]')
    else setKey('')
    setBruteForce(false)
  }

  const isKeyMissing = ['vigenere', 'playfair', 'hill', 'caesar'].includes(method) && (!key || key.trim() === '');

  const handleCipherAction = useCallback(async () => {
    if (!inputText || isKeyMissing) {
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
        const preparedKey = config.prepareKey(key);
        if (method === 'caesar') {
          payload.shift = preparedKey;
        } else {
          payload.key = preparedKey;
        }
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

      let result = data.text;
      if (!result && data.message) {
        result = data.message.replace(/^(encrypt: |decrypt: )/, '');
      }

      setOutputText(result || '');
    } catch (error) {
      console.error("Cipher Error:", error);
      setOutputText("Error processing text. Check key format.");
    }
  }, [inputText, key, method, mode, isKeyMissing]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleCipherAction();
    }, 500);

    return () => clearTimeout(timer);
  }, [handleCipherAction]);

  const MAX_FILE_SIZE = 100 * 1024 * 1024;

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

          const endpoint = method === 'rsa' ? 'https://encryption-system-web-1.onrender.com/rsa-file-encrypt' : 'https://encryption-system-web-1.onrender.com/aes-file-encrypt';

          const response = await fetch(endpoint, {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) throw new Error('Encryption failed');
          const data = await response.json();

          if (data.encrypted_file) {
            const encFileBytes = Uint8Array.from(atob(data.encrypted_file), c => c.charCodeAt(0));

            const extIndex = data.filename.lastIndexOf('.');
            const originalExt = extIndex !== -1 ? data.filename.substring(extIndex) : '';
            const baseName = extIndex !== -1 ? data.filename.substring(0, extIndex) : data.filename;

            const extBytes = new TextEncoder().encode(originalExt);
            const header = new Uint8Array(2);
            new DataView(header.buffer).setUint16(0, extBytes.length, true);
            const encWithHeader = new Uint8Array(header.length + extBytes.length + encFileBytes.length);
            encWithHeader.set(header, 0);
            encWithHeader.set(extBytes, 2);
            encWithHeader.set(encFileBytes, 2 + extBytes.length);

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

          const encArrayBuffer = await file.arrayBuffer();
          const encAllBytes = new Uint8Array(encArrayBuffer);
          const extLength = new DataView(encArrayBuffer).getUint16(0, true);
          const originalExt = new TextDecoder().decode(encAllBytes.slice(2, 2 + extLength));
          const rawEncryptedBytes = encAllBytes.slice(2 + extLength);

          const encBlob = new Blob([rawEncryptedBytes], { type: 'application/octet-stream' });
          const formData = new FormData();
          formData.append('encrypted_file', encBlob, 'encrypted.bin');

          if (method === 'rsa') {
            formData.append('encrypted_aes_key', keyData.encrypted_aes_key);
            formData.append('private_key', keyData.private_key);
          }

          const endpoint = method === 'rsa' ? 'https://encryption-system-web-1.onrender.com/rsa-file-decrypt' : 'https://encryption-system-web-1.onrender.com/aes-file-decrypt';

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
    hidden: { opacity: 0, y: 20 },
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
    <div data-mode={mode} className="cipher-shell relative min-h-screen overflow-hidden font-sans text-[var(--text-main)]">
      {ambientMotion && (
        <div className="binary-rain pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
          {binaryColumns.map((column, index) => (
            <span
              key={index}
              className="binary-stream"
              style={{
                left: column.left,
                animationDelay: column.delay,
                animationDuration: column.duration,
                '--stream-opacity': column.opacity,
                '--stream-size': column.size,
                '--stream-blur': column.blur,
                '--stream-drift': column.drift,
              }}
            >
              {[...column.bits].map((bit, bitIndex) => (
                <span key={bitIndex} className="binary-digit">{bit}</span>
              ))}
            </span>
          ))}
        </div>
      )}

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <header className="grid gap-5 rounded-lg border border-[var(--glass-border)] bg-[var(--glass-bg)] p-5 shadow-[var(--shell-shadow)] backdrop-blur-xl sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--accent)]/40 bg-[var(--accent-soft)] text-[var(--accent)] shadow-[0_0_28px_var(--accent-glow)]">
                <ShieldCheckIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  <BinaryIcon className="h-4 w-4 text-[var(--accent)]" />
                  Crypto Algorithm Console
                </p>
                <h1 className="mt-1 text-4xl font-black text-[var(--text-main)] sm:text-5xl">
                  Cipher Studio
                </h1>
              </div>
            </div>
            <p className="max-w-3xl text-sm leading-6 text-[var(--text-muted)] sm:text-base">
              Encrypt text, decrypt messages, and process protected files from one focused control room.
            </p>
          </div>

          <div className="space-y-3 sm:min-w-[360px]">
            <button
              type="button"
              onClick={() => setAmbientMotion(current => !current)}
              className="ml-auto flex items-center gap-2 rounded-md border border-[var(--panel-border)] bg-black/20 px-3 py-2 text-xs font-bold text-[var(--text-muted)] transition-all hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
              aria-pressed={ambientMotion}
            >
              {ambientMotion ? 'Pause ambient motion' : 'Resume ambient motion'}
            </button>
            <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-lg border border-[var(--glass-border)] bg-black/20 p-3">
              <SparklesIcon className="mx-auto mb-2 h-5 w-5 text-[var(--accent)]" />
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">Mode</p>
              <p className="mt-1 text-sm font-bold capitalize">{mode}</p>
            </div>
            <div className="rounded-lg border border-[var(--glass-border)] bg-black/20 p-3">
              <KeyRoundIcon className="mx-auto mb-2 h-5 w-5 text-[var(--accent-2)]" />
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">Method</p>
              <p className="mt-1 text-sm font-bold uppercase">{method}</p>
            </div>
            <div className="rounded-lg border border-[var(--glass-border)] bg-black/20 p-3">
              <BinaryIcon className="mx-auto mb-2 h-5 w-5 text-[var(--accent-3)]" />
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">Input</p>
              <p className="mt-1 text-sm font-bold capitalize">{inputType}</p>
            </div>
            </div>
          </div>
        </header>

        <section className="mt-5 rounded-lg border border-[var(--glass-border)] bg-[var(--glass-bg)] p-4 shadow-[var(--shell-shadow)] backdrop-blur-xl sm:p-5">
          <div className="flex flex-col items-center justify-between gap-4 xl:flex-row">
            <div className="flex flex-wrap justify-center gap-3">
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
            <MethodSelector
              selected={method}
              onChange={handleMethodChange}
              keyValue={key}
              onKeyChange={setKey}
              inputType={inputType}
              bruteForce={bruteForce}
              onBruteForceChange={setBruteForce}
            />
          </div>
        </section>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="show"
          className="mt-5 grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-5"
        >
          {inputType === 'text' ? (
            <>
              <div className="h-[400px] lg:h-[500px]">
                <TextPanel
                  label={mode === 'encrypt' ? 'Plaintext' : 'Ciphertext'}
                  value={inputText}
                  onChange={setInputText}
                  placeholder={`Enter text to ${mode}...`}
                  onClear={() => setInputText('')}
                  disabled={isKeyMissing}
                />
              </div>

              <div className="flex justify-center items-center py-2 lg:py-0">
                <button
                  onClick={handleSwap}
                  disabled={(!inputText && !outputText) || isKeyMissing}
                  className="group rounded-full border border-[var(--accent)]/40 bg-[var(--control-bg)] p-4 text-[var(--accent)] shadow-[0_0_30px_var(--accent-glow)] transition-all hover:scale-105 hover:border-[var(--accent)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                  title="Swap input and output"
                  aria-label="Swap input and output"
                >
                  <ArrowRightLeftIcon className="w-6 h-6 lg:rotate-0 rotate-90 transition-transform group-hover:rotate-180 duration-500" />
                </button>
              </div>

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
              <div className="flex flex-col gap-4 h-[400px] lg:h-[500px]">
                <div className={['rsa', 'aes'].includes(method) && mode === 'decrypt' ? 'h-1/2' : 'h-full'}>
                  <FilePanel
                    variant="upload"
                    label={mode === 'encrypt' ? 'File to Encrypt' : 'Encrypted File'}
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

              <div className="flex justify-center items-center py-2 lg:py-0">
                <button
                  onClick={handleFileProcess}
                  disabled={!file || (['rsa', 'aes'].includes(method) && mode === 'decrypt' && !keyFile) || isProcessing}
                  className="group flex flex-col items-center justify-center gap-1 rounded-full border border-[var(--accent)]/40 bg-[var(--control-bg)] p-4 text-[var(--accent)] shadow-[0_0_30px_var(--accent-glow)] transition-all hover:scale-105 hover:border-[var(--accent)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                  title="Process File"
                  aria-label="Process File"
                >
                  <PlayIcon className="w-6 h-6 outline-none border-none fill-current" />
                  <span className="text-xs font-bold">Process</span>
                </button>
              </div>

              <div className="h-[400px] lg:h-[500px]">
                <FilePanel
                  variant="download"
                  label={mode === 'encrypt' ? 'Encrypted File' : 'Decrypted File'}
                  processedFile={processedFile}
                  isProcessing={isProcessing}
                />
              </div>
            </>
          )}
        </motion.div>

        {inputType === 'text' && (
          method === 'caesar' && bruteForce && mode === 'decrypt' ? (
            <BruteForcePanel ciphertext={inputText} />
          ) : (
            <CipherVisualizer
              key={`${method}-${mode}-${key}-${inputText}-${bruteForce ? 'bf' : 'trace'}`}
              method={method}
              text={inputText}
              output={outputText}
              keyValue={key}
              mode={mode}
            />
          )
        )}
      </main>
    </div>
  );
}



