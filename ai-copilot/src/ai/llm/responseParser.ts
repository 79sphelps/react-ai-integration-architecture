export function parseLLMResponse(raw: string) {
  return {
    answer: raw.trim(),
    confidence: 0.7, // placeholder heuristic
  }
}