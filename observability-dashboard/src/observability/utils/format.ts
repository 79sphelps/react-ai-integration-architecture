export function formatMs(ms?: number) {
  if (!ms) return "-";
  return `${ms.toFixed(0)}ms`;
}

export function formatPercent(n: number) {
  return `${(n * 100).toFixed(1)}%`;
}
