import type { RankedDocument } from '../types'

export function getTopDocument(docs: RankedDocument[]) {
  return docs.length ? docs[0] : null
}