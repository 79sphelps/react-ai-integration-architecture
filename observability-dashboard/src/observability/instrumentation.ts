import { publish } from "./core/eventBus";

export async function instrumentedCall<T>(
  provider: string,
  fn: () => Promise<T>,
): Promise<T> {
  const start = performance.now();

  publish({
    id: crypto.randomUUID(),
    type: "request_start",
    provider,
    timestamp: Date.now(),
  });

  try {
    const result = await fn();

    publish({
      id: crypto.randomUUID(),
      type: "request_success",
      provider,
      timestamp: Date.now(),
      duration: performance.now() - start,
    });

    return result;
  } catch (err: any) {
    publish({
      id: crypto.randomUUID(),
      type: "request_error",
      provider,
      timestamp: Date.now(),
      duration: performance.now() - start,
      error: err.message,
    });

    throw err;
  }
}
