import type { ObservabilityEvent } from "./types";

type Listener = (event: ObservabilityEvent) => void;

const listeners = new Set<Listener>();

export function publish(event: ObservabilityEvent) {
  listeners.forEach((l) => l(event));
}

export function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
