import type { RankedDocument } from "../types";

export function buildPrompt(query: string, docs: RankedDocument[]) {
  const context = docs.map((d, i) => `[${i + 1}] ${d.content}`).join("\n");

  return `
You are a helpful assistant.

Use ONLY the context below to answer.

Context:
${context}

Question:
${query}

Answer clearly and cite sources like [1], [2].
`;
}
