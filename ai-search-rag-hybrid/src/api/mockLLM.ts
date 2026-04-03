import type { RankedDocument } from "../types";

export async function generateAnswer(query: string, docs: RankedDocument[]) {
  await new Promise((r) => setTimeout(r, 500));

  const context = docs.map((d) => d.content).join(" ");

  return `Based on available information, here’s a synthesized answer: ${context.slice(
    0,
    200,
  )}...`;
}
