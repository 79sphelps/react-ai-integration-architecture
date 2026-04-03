import type { RankedDocument } from "../types";
import { normalizeQuery } from "./normalizeQuery";
import { dedupeSentences } from "./dedupeSentences";
import { limitContext } from "./limitContext";

export function extractAnswer(query: string, docs: RankedDocument[]): string {
  const normalizedQuery = normalizeQuery(query);
  const terms = normalizedQuery.split(/\s+/);

  const limitedDocs = limitContext(docs, 3);

  let matchedSentences: string[] = [];

  for (const doc of limitedDocs) {
    const sentences = doc.content.split(/[.?!]/);

    for (const sentence of sentences) {
      const lower = sentence.toLowerCase();

      const matchCount = terms.filter((t) => lower.includes(t)).length;

      if (matchCount > 0) {
        matchedSentences.push(sentence.trim());
      }
    }
  }

  matchedSentences = dedupeSentences(matchedSentences);

  if (!matchedSentences.length) {
    return "I couldn't find a relevant answer in the available documents.";
  }

  const ranked = matchedSentences.sort((a, b) => {
    const aScore = terms.filter((t) => a.toLowerCase().includes(t)).length;
    const bScore = terms.filter((t) => b.toLowerCase().includes(t)).length;
    return bScore - aScore;
  });

  return ranked.slice(0, 2).join(". ") + ".";
}
