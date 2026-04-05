let lastRun = 0;

export function canRun(limitMs = 500) {
  const now = Date.now();

  if (now - lastRun < limitMs) {
    return false;
  }

  lastRun = now;
  return true;
}
