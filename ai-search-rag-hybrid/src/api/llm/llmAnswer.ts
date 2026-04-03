import type { RankedDocument } from "../../types";
import { callOpenRouter } from "./openrouterClient";
import { buildPrompt } from "./buildPrompt";

export async function generateAnswer(query: string, docs: RankedDocument[]) {
  const messages = buildPrompt(query, docs);

  return await callOpenRouter(messages);
}
