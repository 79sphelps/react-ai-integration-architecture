import { useRef, useState } from 'react'
import { generateImage } from '../ai/imageClient'
import { enhancePrompt } from '../ai/promptEnhancer'
import { useImageStore } from '../state/imageStore'
import type { GeneratedImage } from '../types/image'

export function useImageGenerator() {
  const controllerRef = useRef<AbortController | null>(null)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const addImage = useImageStore((s) => s.addImage)

  async function run(input: string) {
    controllerRef.current?.abort()

    const controller = new AbortController()
    controllerRef.current = controller

    try {
      setLoading(true)
      setError(null)

      const enhanced = enhancePrompt(input)
      const url = await generateImage(enhanced, controller.signal)

      const image: GeneratedImage = {
        id: crypto.randomUUID(),
        url,
        prompt: input,
        createdAt: Date.now(),
      }

      addImage(image)
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        setError(err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  function cancel() {
    controllerRef.current?.abort()
  }

  return { run, cancel, loading, error }
}