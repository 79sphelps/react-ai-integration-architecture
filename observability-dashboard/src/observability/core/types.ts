export type EventType = "request_start" | "request_success" | "request_error";

export interface ObservabilityEvent {
  id: string;
  type: EventType;
  provider: string;
  timestamp: number;
  duration?: number;
  error?: string;
}
