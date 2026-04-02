export type SummaryMode = "paragraph" | "bullets";

export type Tone = "formal" | "casual";

export interface SummaryOptions {
  length: number;
  tone: Tone;
  mode: SummaryMode;
}

export interface SummaryResult {
  summary?: string;
  bullets?: string[];
  tone: Tone;
}
