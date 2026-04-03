// export function DecisionBadge({
//   strategy,
//   confidence,
//   latency,
// }: {
//   strategy: "extractive" | "llm";
//   confidence: number;
//   latency?: number | null;
// }) {
//   return (
//     <div className="text-xs flex gap-2 flex-wrap">
//       <span className="px-2 py-1 bg-gray-100 rounded">
//         Strategy: {strategy}
//       </span>
//       <span className="px-2 py-1 bg-gray-100 rounded">
//         Confidence: {(confidence * 100).toFixed(0)}%
//       </span>
//       {latency && (
//         <span className="px-2 py-1 bg-gray-100 rounded">{latency}ms</span>
//       )}
//     </div>
//   );
// }

export function DecisionBadge({ strategy, confidence, latency }: any) {
  const labelMap: Record<string, string> = {
    extractive: "Extractive Answer",
    "llm-rag": "LLM (RAG)",
    "llm-open": "LLM (Open Knowledge)",
  };

  return (
    <div className="text-xs px-2 py-1 bg-gray-100 rounded inline-block">
      {labelMap[strategy] || strategy} • confidence: {confidence.toFixed(2)} •{" "}
      {latency}ms
    </div>
  );
}
