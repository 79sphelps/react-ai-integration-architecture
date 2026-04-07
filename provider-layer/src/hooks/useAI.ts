import { useState } from 'react'
import { generateWithProvider } from '../ai/core/providerRouter'
import { useProviderStore } from '../state/providerStore'

export function useAI() {
  const provider = useProviderStore((s) => s.selected)

  const [loading, setLoading] = useState(false)
  const [output, setOutput] = useState('')
  const [error, setError] = useState<string | null>(null)

  async function run(prompt: string) {
    try {
      setLoading(true)
      setError(null)

      const result = await generateWithProvider(provider, prompt)

      setOutput(result)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { run, loading, output, error }
}