import type { AIProvider } from '../core/provider'

export const mockProvider: AIProvider = {
  name: 'mock',

  async generate(prompt: string) {
    await new Promise((r) => setTimeout(r, 500))

    return `Mock response for: ${prompt}`
  },
}