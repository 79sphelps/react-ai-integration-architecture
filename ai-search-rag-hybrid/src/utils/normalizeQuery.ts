export function normalizeQuery(query: string) {
  return query
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .trim();
}
