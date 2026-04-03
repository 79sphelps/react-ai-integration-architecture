import type { RankedDocument } from "../../types";

export function buildPrompt(query: string, docs: RankedDocument[]) {
  if (!docs.length) {
    return [
      {
        role: "system",
        content:
          "You are a helpful assistant. Answer the question as accurately as possible.",
      },
      {
        role: "user",
        content: query,
      },
    ];
  }

  const context = docs
    .slice(0, 3)
    .map((d) => `- ${d.content}`)
    .join("\n");

  return [
    {
      role: "system",
      content:
        "Answer the question using the provided context. If the answer is not in the context, say you are unsure.",
    },
    {
      role: "user",
      content: `Context:\n${context}\n\nQuestion:\n${query}`,
    },
  ];
}
