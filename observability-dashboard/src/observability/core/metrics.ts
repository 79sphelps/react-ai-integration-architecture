import type { ObservabilityEvent } from "./types";

export function computeMetrics(events: ObservabilityEvent[]) {
  const total = events.length;
  const errors = events.filter((e) => e.type === "request_error").length;

  const avgLatency =
    events.reduce((acc, e) => acc + (e.duration || 0), 0) /
    (events.length || 1);

  return {
    total,
    errors,
    errorRate: total ? errors / total : 0,
    avgLatency,
  };
}
