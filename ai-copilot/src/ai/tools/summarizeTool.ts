export async function summarize(text: string) {
  return `Summary: ${text.slice(0, 100)}...`;
}
