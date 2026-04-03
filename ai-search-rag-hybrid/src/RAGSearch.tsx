import { useRAG } from "./hooks/useRAG";
import { SearchInput } from "./components/SearchInput";
import { AnswerPanel } from "./components/AnswerPanel";
import { SourceList } from "./components/SourceList";
import { DecisionBadge } from "./components/DecisionBadge";
import { StrategyExplanation } from "./components/StrategyExplanation";
import { ScoreBreakdown } from "./components/ScoreBreakdown";
import { LoadingSkeleton } from "./components/LoadingSkeleton";
import { ErrorState } from "./components/ErrorState";
import { EmptyState } from "./components/EmptyState";
import { RetryButton } from "./components/RetryButton";
import { LLMIndicator } from "./components/LLMIndicator";

export default function RAGSearch() {
  const state = useRAG();

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <SearchInput
        query={state.query}
        setQuery={state.setQuery}
        onSearch={state.run}
      />

      {state.error && (
        <div className="flex justify-between items-center">
          <ErrorState message={state.error} />
          <RetryButton onRetry={state.run} />
        </div>
      )}

      {!state.loading && !state.answer && !state.error && <EmptyState />}

      {state.loading && <LoadingSkeleton />}

      {state.loading && state.strategy?.includes('llm') && (
        <LLMIndicator />
      )}

      {state.answer && (
        <div className="space-y-3">
          <AnswerPanel answer={state.answer} />

          {state.strategy && (
            <DecisionBadge
              strategy={state.strategy}
              confidence={state.confidence}
              latency={state.latency}
            />
          )}

          <StrategyExplanation reason={state.reason} />

          {state.sources[0] && (
            <ScoreBreakdown score={state.sources[0].score} />
          )}
        </div>
      )}

      <SourceList sources={state.sources} query={state.query} />
    </div>
  );
}
