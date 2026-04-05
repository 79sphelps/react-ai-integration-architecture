import { useRef } from 'react'

export function useAbortableCopilot() {
  const controllerRef = useRef<AbortController | null>(null)

  function createSignal() {
    if (controllerRef.current) {
      controllerRef.current.abort()
    }

    const controller = new AbortController()
    controllerRef.current = controller

    return controller.signal
  }

  return { createSignal }
}