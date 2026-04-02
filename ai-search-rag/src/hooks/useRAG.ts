import { useState } from "react";
import { searchDocs } from "../api/mockSearch";
import { generateAnswer } from "../api/mockLLM";
import { validateQuery } from "../utils/validateQuery";
import { useRAGLogger } from "./useRAGLogger";

export function useRAG() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [sources, setSources] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { log } = useRAGLogger();

  const run = async () => {
    const validationError = validateQuery(query);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    setLoading(true);

    try {
      log("START", query);

      const docs = await searchDocs(query);
      log("RETRIEVED_DOCS", docs);

      setSources(docs);

      const result = await generateAnswer(query, docs);
      log("EXTRACTED_ANSWER", result);

      setAnswer(result);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    query,
    setQuery,
    answer,
    sources,
    loading,
    error,
    run,
  };
}
