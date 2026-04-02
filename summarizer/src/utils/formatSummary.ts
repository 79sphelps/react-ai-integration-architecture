import type { SummaryResult } from "../types";

export function formatSummary(raw: string): SummaryResult | null {
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
