import { useEffect, useState } from 'react'

export function useProviderHealth() {
  const [status, setStatus] = useState<Record<string, string>>({})

  useEffect(() => {
    // simulated health check
    setStatus({
      mock: 'healthy',
      openrouter: 'healthy',
      huggingface: 'unstable',
    })
  }, [])

  return status
}