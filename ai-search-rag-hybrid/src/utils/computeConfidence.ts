import type { RankedDocument } from "../types";
import { normalizeScore } from "./normalizeScore";

export function computeConfidence(docs: RankedDocument[]): number {
  if (!docs.length) return 0;

  const topScore = docs[0].score;
  return normalizeScore(topScore, 10);
}
