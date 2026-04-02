import { useRAG } from "./hooks/useRAG";
import { SearchInput } from "./components/SearchInput";
import { AnswerPanel } from "./components/AnswerPanel";
import { SourceList } from "./components/SourceList";
import { ErrorState } from "./components/ErrorState";
import { EmptyState } from "./components/EmptyState";
import { LoadingSkeleton } from "./components/LoadingSkeleton";
import { ConfidenceBadge } from "./components/ConfidenceBadge";

export default function RAGSearch() {
  const state = useRAG();

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <SearchInput
        query={state.query}
        setQuery={state.setQuery}
        onSearch={state.run}
      />

      {state.error && <ErrorState message={state.error} />}

      {!state.loading && !state.answer && !state.error && <EmptyState />}

      {state.loading && <LoadingSkeleton />}

      {state.answer && (
        <div className="space-y-2">
          <AnswerPanel answer={state.answer} />
          {state.sources[0] && (
            <ConfidenceBadge score={state.sources[0].score} />
          )}
        </div>
      )}

      <SourceList sources={state.sources} query={state.query} />
    </div>
  );
}
