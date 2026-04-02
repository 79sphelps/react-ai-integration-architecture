import type { SuggestionsMap } from '../types'

export function parseAssistantResponse(raw: string): SuggestionsMap {
  try {
    const parsed = JSON.parse(raw)

    const safe: SuggestionsMap = {}

    Object.keys(parsed).forEach((key) => {
      const item = parsed[key]
      if (item?.value && typeof item.confidence === 'number') {
        safe[key as keyof SuggestionsMap] = item
      }
    })

    return safe
  } catch {
    return {}
  }
}