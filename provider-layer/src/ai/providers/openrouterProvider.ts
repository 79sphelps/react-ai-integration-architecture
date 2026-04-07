import type { AIProvider } from '../core/provider'
import { openrouterGenerate } from '../services/openrouterService'

export const openrouterProvider: AIProvider = {
  name: 'openrouter',

  async generate(prompt: string, signal?: AbortSignal) {
    return openrouterGenerate(prompt, signal)
  },
}