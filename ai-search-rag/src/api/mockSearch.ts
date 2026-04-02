import { documents } from '../data/documents'
import { rankDocuments } from '../utils/rankDocuments'

export async function searchDocs(query: string) {
  await new Promise((r) => setTimeout(r, 400))

  const ranked = rankDocuments(documents, query)

  return ranked.slice(0, 5)
}