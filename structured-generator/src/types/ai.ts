export interface CopilotTrace {
  intent: string;
  toolAttempted: boolean;
  toolUsed: boolean;
  llmUsed: boolean;
  memoryCount: number;
}
