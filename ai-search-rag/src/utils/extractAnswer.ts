import type { RankedDocument } from '../types'

export function extractAnswer(
  query: string,
  docs: RankedDocument[]
): string {
  const terms = query.toLowerCase().split(/\s+/)

  const matchedSentences: string[] = []

  for (const doc of docs) {
    const sentences = doc.content.split(/[.?!]/)

    for (const sentence of sentences) {
      const lower = sentence.toLowerCase()

      const matchCount = terms.filter((t) => lower.includes(t)).length

      if (matchCount > 0) {
        matchedSentences.push(sentence.trim())
      }
    }
  }

  if (matchedSentences.length === 0) {
    return "I couldn't find a relevant answer in the available documents."
  }

  // Rank sentences by relevance (simple heuristic)
  const ranked = matchedSentences.sort((a, b) => {
    const aScore = terms.filter((t) => a.toLowerCase().includes(t)).length
    const bScore = terms.filter((t) => b.toLowerCase().includes(t)).length
    return bScore - aScore
  })

  // Return top 2 sentences max
  return ranked.slice(0, 2).join('. ') + '.'
}