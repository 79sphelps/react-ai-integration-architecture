import type { Document, RankedDocument } from '../types'
import { chunkText } from './chunkText'

export function rankDocuments(
  docs: Document[],
  query: string
): RankedDocument[] {
  const terms = query.toLowerCase().split(' ')

  const scored: RankedDocument[] = []

  docs.forEach((doc) => {
    const chunks = chunkText(doc.content)

    chunks.forEach((chunk, index) => {
      let score = 0

      terms.forEach((term) => {
        if (chunk.toLowerCase().includes(term)) {
          score += 1
        }
      })

      if (score > 0) {
        scored.push({
          id: `${doc.id}-${index}`,
          title: doc.title,
          content: chunk,
          score,
        })
      }
    })
  })

  return scored.sort((a, b) => b.score - a.score)
}