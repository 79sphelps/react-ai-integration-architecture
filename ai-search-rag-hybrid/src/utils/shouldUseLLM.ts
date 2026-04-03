export function shouldUseLLM(confidence: number): boolean {
  return confidence < 0.4;
}
