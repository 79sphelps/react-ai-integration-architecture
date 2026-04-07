export interface ProviderMeta {
  label: string
  description: string
  status: 'active' | 'degraded' | 'offline'
}

export const providerMeta: Record<string, ProviderMeta> = {
  mock: {
    label: 'Mock',
    description: 'Local simulated provider',
    status: 'active',
  },
  openrouter: {
    label: 'OpenRouter',
    description: 'Multi-model gateway',
    status: 'active',
  },
  huggingface: {
    label: 'HuggingFace',
    description: 'Inference API',
    status: 'degraded',
  },
}