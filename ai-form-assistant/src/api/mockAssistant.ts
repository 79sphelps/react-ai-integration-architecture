import type { SuggestionsMap } from '../types'

export async function getSuggestions(input: string): Promise<string> {
  await new Promise((r) => setTimeout(r, 600))

  const mock: SuggestionsMap = {
    name: { value: 'John Doe', confidence: 0.92 },
    email: { value: 'john@example.com', confidence: 0.88 },
    company: { value: 'Acme Inc.', confidence: 0.75 },
  }

  return JSON.stringify(mock)
}