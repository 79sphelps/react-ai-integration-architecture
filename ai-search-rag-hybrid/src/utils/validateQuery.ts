export function validateQuery(query: string) {
  if (!query.trim()) return "Query cannot be empty";
  if (query.length < 3) return "Query too short";
  if (query.length > 200) return "Query too long";
  return null;
}
