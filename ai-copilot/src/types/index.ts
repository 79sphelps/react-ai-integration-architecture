export type CopilotIntent = "summarize" | "explain" | "transform" | "unknown";

export interface CopilotContext {
  query: string;
  selectedText?: string;
  uiState?: Record<string, any>;
}

export interface CopilotResponse {
  answer: string;
  intent: CopilotIntent;
  actions?: string[];
}
