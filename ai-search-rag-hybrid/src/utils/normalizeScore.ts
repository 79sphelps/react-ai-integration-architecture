export function normalizeScore(score: number, max = 10) {
  if (max === 0) return 0;
  return Math.min(score / max, 1);
}
