import { ENV } from '../../config/env'

export async function huggingfaceGenerate(
  prompt: string,
  signal?: AbortSignal
): Promise<string> {
  const res = await fetch(
    // 'https://api-inference.huggingface.co/models/gpt2',
    'https://router.huggingface.co/wavespeed/api/v3/wavespeed-ai/flux-dev',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${ENV.HF_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: prompt }),
      signal,
    }
  )

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data?.error || 'HF failed')
  }

  return data?.[0]?.generated_text || ''
}