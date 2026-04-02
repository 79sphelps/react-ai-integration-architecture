// export async function generateAnswer(prompt: string) {
//   await new Promise((r) => setTimeout(r, 600));

//   return `Answer:
// Customers can request refunds within 30 days. Refunds take 5–10 business days. [1]`;
// }

import type { RankedDocument } from '../types'
import { extractAnswer } from '../utils/extractAnswer'

export async function generateAnswer(
  query: string,
  docs: RankedDocument[]
) {
  await new Promise((r) => setTimeout(r, 300)) // simulate latency

  const answer = extractAnswer(query, docs)

  return answer
}