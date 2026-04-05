import { useState } from 'react'
import { runCopilot } from '../ai/copilotEngine'
import { useCopilotStore } from '../state/copilotStore'
import { validateInput } from '../utils/validateInput'
import { useAbortableCopilot } from './useAbortableCopilot'

export function useCopilot() {
  const [response, setResponse] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const addToHistory = useCopilotStore((s) => s.addToHistory)
  const { createSignal } = useAbortableCopilot()

  async function run(query: string, selectedText?: string) {
    const validationError = validateInput(query)

    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)
    setError(null)

    try {
      const signal = createSignal()
      const res = await runCopilot({ query, selectedText, signal } as any)

      setResponse(res)

      if (!res.error) {
        addToHistory({ query, answer: res.answer })
      }
    } catch (e: any) {
      if (e.name === 'AbortError') return
      setError('Request failed. Try again.')
    }

    setLoading(false)
  }

  return { response, loading, error, run }
}