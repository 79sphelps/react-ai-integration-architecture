import { env } from '../config/env'

// const HF_URL = 'https://api-inference.huggingface.co/models/stabilityai/sdxl-turbo'
// const HF_URL = 'https://api-inference.huggingface.co/models/stabilityai/sdxl-turbo'

export async function generateImage(
  prompt: string,
  signal?: AbortSignal
): Promise<string> {
  const res = await fetch('http://localhost:3001/api/generate-image', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
    signal,
  })

  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.error || 'Failed')
  }

  const data = await res.json()
  return data.url
}