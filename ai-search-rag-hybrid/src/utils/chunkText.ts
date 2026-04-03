export function chunkText(text: string, size = 120): string[] {
  const sentences = text.split('.')
  const chunks: string[] = []

  let current = ''

  for (const sentence of sentences) {
    if ((current + sentence).length > size) {
      chunks.push(current.trim())
      current = ''
    }
    current += sentence + '.'
  }

  if (current) chunks.push(current.trim())

  return chunks
}