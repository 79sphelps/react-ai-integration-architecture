export function SuggestionBadge({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md hover:bg-blue-200"
    >
      Apply Suggestion
    </button>
  );
}
