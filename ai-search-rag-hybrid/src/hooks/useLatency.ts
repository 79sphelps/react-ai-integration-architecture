import { useState } from "react";

export function useLatency() {
  const [latency, setLatency] = useState<number | null>(null);

  async function measure<T>(fn: () => Promise<T>): Promise<T> {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();

    setLatency(Math.round(end - start));
    return result;
  }

  return { latency, measure };
}
