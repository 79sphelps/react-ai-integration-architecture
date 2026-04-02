import type { SummaryOptions } from "../types";

export async function summarize(text: string, options: SummaryOptions) {
  await new Promise((r) => setTimeout(r, 700));

  const trimmed = text.slice(0, options.length);

  if (options.mode === "bullets") {
    return JSON.stringify({
      bullets: trimmed.split(".").filter(Boolean).slice(0, 4),
      tone: options.tone,
    });
  }

  return JSON.stringify({
    summary: trimmed,
    tone: options.tone,
  });
}
