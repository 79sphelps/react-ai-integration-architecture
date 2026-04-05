import type { CopilotIntent } from "../types";

export function classifyIntent(query: string): CopilotIntent {
  const q = query.toLowerCase();

  if (q.includes("summarize")) return "summarize";
  if (q.includes("explain")) return "explain";
  if (q.includes("rewrite") || q.includes("transform")) return "transform";

  return "unknown";
}
