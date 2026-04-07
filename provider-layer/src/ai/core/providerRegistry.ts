import type { AIProvider } from "./provider"

const providers = new Map<string, AIProvider>()

export function registerProvider(provider: AIProvider) {
  providers.set(provider.name, provider)
}

export function getProvider(name: string) {
  const p = providers.get(name)
  if (!p) throw new Error(`Provider not found: ${name}`)
  return p
}

export function listProviders() {
  return Array.from(providers.keys())
}