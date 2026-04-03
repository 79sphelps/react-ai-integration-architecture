// import type { RankedDocument } from "../types";
// import { extractAnswer } from "../utils/extractAnswer";
// import { computeConfidence } from "../utils/computeConfidence";
// import { shouldUseLLM } from "../utils/shouldUseLLM";
// import { isAnswerWeak } from "../utils/isAnswerWeak";
// import { generateAnswer as llmAnswer } from "./mockLLM";

// export async function getHybridAnswer(query: string, docs: RankedDocument[]) {
//   if (!docs.length) {
//     return {
//       answer: "No relevant documents found.",
//       strategy: "extractive",
//       confidence: 0,
//       reason: "No documents retrieved",
//     };
//   }

//   const extracted = extractAnswer(query, docs);
//   const confidence = computeConfidence(docs);
//   const weak = isAnswerWeak(extracted);

//   if (!shouldUseLLM(confidence) && !weak) {
//     return {
//       answer: extracted,
//       strategy: "extractive",
//       confidence,
//       reason: "High confidence and strong extractive answer",
//     };
//   }

//   const llm = await llmAnswer(query, docs);

//   return {
//     answer: llm,
//     strategy: "llm",
//     confidence,
//     reason: weak ? "Extracted answer too weak" : "Low confidence retrieval",
//   };
// }


import type { RankedDocument } from '../types'
import { extractAnswer } from '../utils/extractAnswer'
import { computeConfidence } from '../utils/computeConfidence'
import { shouldUseLLM } from '../utils/shouldUseLLM'
import { isAnswerWeak } from '../utils/isAnswerWeak'
import { generateAnswer } from './llm/llmAnswer'

export async function getHybridAnswer(
  query: string,
  docs: RankedDocument[]
) {
  const confidence = computeConfidence(docs)

  // 🔥 CASE 1: No documents → open-world LLM
  if (!docs.length) {
    const llm = await generateAnswer(query, [])

    return {
      answer: llm,
      strategy: 'llm-open',
      confidence: 0,
      reason: 'No internal documents → used LLM fallback',
    }
  }

  const extracted = extractAnswer(query, docs)
  const weak = isAnswerWeak(extracted)

  // 🔥 CASE 2: Strong extractive
  if (!shouldUseLLM(confidence) && !weak) {
    return {
      answer: extracted,
      strategy: 'extractive',
      confidence,
      reason: 'High confidence retrieval',
    }
  }

  // 🔥 CASE 3: RAG-enhanced LLM
  const llm = await generateAnswer(query, docs)

  return {
    answer: llm,
    strategy: 'llm-rag',
    confidence,
    reason: weak
      ? 'Weak extractive answer'
      : 'Low confidence retrieval',
  }
}