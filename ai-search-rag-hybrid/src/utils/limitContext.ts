export function limitContext<T>(items: T[], max = 3) {
  return items.slice(0, max);
}
