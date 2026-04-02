import { useState } from "react";
import { summarize } from "../api/mockSummarizer";
import type { SummaryOptions } from "../types";

export function useSummarizer() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [options, setOptions] = useState<SummaryOptions>({
    length: 150,
    tone: "formal",
    mode: "paragraph",
  });

  const run = async () => {
    if (!text.trim()) {
      setError("Please enter text to summarize.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const result = await summarize(text, options);
      setOutput(result);
    } catch {
      setError("Failed to generate summary");
    } finally {
      setLoading(false);
    }
  };

  return {
    text,
    setText,
    output,
    error,
    options,
    setOptions,
    run,
    loading,
  };
}
