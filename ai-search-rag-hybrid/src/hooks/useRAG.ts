import { useState } from "react";
import { searchDocs } from "../api/mockSearch";
import { getHybridAnswer } from "../api/hybridAnswer";
import { validateQuery } from "../utils/validateQuery";
import { useRAGLogger } from "./useRAGLogger";
import { useLatency } from "./useLatency";

export function useRAG() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [strategy, setStrategy] = useState<"extractive" | "llm" | null>(null);
  const [confidence, setConfidence] = useState(0);
  const [reason, setReason] = useState("");
  const [sources, setSources] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { log } = useRAGLogger();
  const { latency, measure } = useLatency();

  const run = async () => {
    const validationError = validateQuery(query);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const docs = await searchDocs(query);
      setSources(docs);

      const result = await measure(() => getHybridAnswer(query, docs));

      setAnswer(result.answer);
      setStrategy(result.strategy);
      setConfidence(result.confidence);
      setReason(result.reason);

      log("HYBRID_RESULT", result);
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
    query,
    setQuery,
    answer,
    strategy,
    confidence,
    reason,
    sources,
    loading,
    error,
    latency,
    run,
  };
}
