export function dedupeSentences(sentences: string[]) {
  const seen = new Set<string>();

  return sentences.filter((s) => {
    const normalized = s.toLowerCase().trim();
    if (seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  });
}
