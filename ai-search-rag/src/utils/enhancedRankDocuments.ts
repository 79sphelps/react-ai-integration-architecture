import type { Document, RankedDocument } from "../types";

export function enhancedRankDocuments(
  docs: Document[],
  query: string,
): RankedDocument[] {
  const terms = query.toLowerCase().split(/\s+/);

  return docs
    .map((doc) => {
      const content = doc.content.toLowerCase();

      let score = 0;

      for (const term of terms) {
        if (content.includes(term)) score += 2;
        if (doc.title.toLowerCase().includes(term)) score += 3;
      }

      return { ...doc, score };
    })
    .sort((a, b) => b.score - a.score);
}
