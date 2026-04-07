import { httpPost } from '../../lib/httpClient'
import { ENV } from '../../config/env'

export async function openrouterGenerate(
  prompt: string,
  signal?: AbortSignal
): Promise<string> {
  const res = await fetch(
    'https://openrouter.ai/api/v1/chat/completions',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${ENV.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // model: 'openai/gpt-3.5-turbo',
        model: 'mistralai/mistral-small-creative',
        messages: [{ role: 'user', content: prompt }],
      }),
      signal,
    }
  )

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data?.error?.message || 'OpenRouter failed')
  }

  return data?.choices?.[0]?.message?.content || ''
}