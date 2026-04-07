import type { AIProvider } from '../core/provider'
import { huggingfaceGenerate } from '../services/huggingfaceService'

export const huggingfaceProvider: AIProvider = {
  name: 'huggingface',

  async generate(prompt: string, signal?: AbortSignal) {
    return huggingfaceGenerate(prompt, signal)
  },
}