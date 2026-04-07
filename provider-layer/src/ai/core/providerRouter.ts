import { getProvider } from './providerRegistry'

export async function generateWithProvider(
  providerName: string,
  prompt: string,
  signal?: AbortSignal
) {
  const provider = getProvider(providerName)

  try {
    return await provider.generate(prompt, signal)
  } catch (err) {
    console.warn(`Provider ${providerName} failed`)

    // 🔥 fallback strategy
    if (providerName !== 'mock') {
      const fallback = getProvider('mock')
      return fallback.generate(prompt, signal)
    }

    throw err
  }
}