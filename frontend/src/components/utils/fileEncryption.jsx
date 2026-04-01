import { CipherMethod, CipherMode, processText } from './encryption'

export const processFile = async (
  file,
  method,
  key,
  mode
) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = async (e) => {
      try {
        const content = e.target?.result

        // Process the content using the existing text cipher
        const processedText = processText(content, method, key, mode)

        let blob
        let newFileName = file.name

        if (mode === 'encrypt') {
          // Output is a text file containing the encrypted Data URL
          blob = new Blob([processedText], { type: 'text/plain' })
          newFileName = `${file.name}.encrypted`
        } else {
          // When decrypting, the processed text should be a Data URL
          try {
            // Check if it looks like a Data URL
            if (processedText.startsWith('data:')) {
              const [header, base64Data] = processedText.split(',')

              if (header && base64Data) {
                const mimeMatch = header.match(/:(.*?);/)
                const mimeType = mimeMatch ? mimeMatch[1] : ''

                // Decode base64 to binary
                const byteCharacters = atob(base64Data)
                const byteNumbers = new Array(byteCharacters.length)
                for (let i = 0; i < byteCharacters.length; i++) {
                  byteNumbers[i] = byteCharacters.charCodeAt(i)
                }
                const byteArray = new Uint8Array(byteNumbers)
                blob = new Blob([byteArray], { type: mimeType })
              } else {
                throw new Error('Invalid Data URL format')
              }
            } else {
              // Fallback: just return as text if it's not a Data URL
              blob = new Blob([processedText], { type: 'text/plain' })
            }

            newFileName = file.name.replace(/\.encrypted$/, '')
            if (newFileName === file.name) {
              newFileName = `decrypted_${file.name}`
            }
          } catch (err) {
            // Fallback if parsing fails
            blob = new Blob([processedText], { type: 'text/plain' })
            newFileName = `decrypted_${file.name}`
          }
        }

        resolve({ blob, fileName: newFileName })
      } catch (err) {
        reject(err)
      }
    }

    reader.onerror = () => reject(new Error('Failed to read file'))

    if (mode === 'encrypt') {
      // Read as Data URL so we can safely encode binary files as text
      reader.readAsDataURL(file)
    } else {
      // When decrypting, we read the encrypted text file
      reader.readAsText(file)
    }
  })
}
