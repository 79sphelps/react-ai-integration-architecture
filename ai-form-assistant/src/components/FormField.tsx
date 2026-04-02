import type { FieldName, FieldSuggestion } from "../types";
import { SuggestionBadge } from "./SuggestionBadge";
import { ConfidenceIndicator } from "./ConfidenceIndicator";

interface Props {
  name: FieldName;
  value: string;
  error?: string;
  suggestion?: FieldSuggestion;
  onChange: (name: FieldName, value: string) => void;
  onApply: (name: FieldName) => void;
}

export function FormField({
  name,
  value,
  error,
  suggestion,
  onChange,
  onApply,
}: Props) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium capitalize">{name}</label>

      <input
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className={`w-full border p-2 rounded-lg ${
          error ? "border-red-500" : ""
        }`}
      />

      {error && <div className="text-xs text-red-500">{error}</div>}

      {suggestion && (
        <div className="flex items-center justify-between text-xs">
          <span className="text-blue-600">{suggestion.value}</span>
          <SuggestionBadge onClick={() => onApply(name)} />
        </div>
      )}

      {suggestion && <ConfidenceIndicator value={suggestion.confidence} />}
    </div>
  );
}
