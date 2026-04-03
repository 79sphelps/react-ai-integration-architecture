export function ConfidenceBadge({ score }: { score: number }) {
  const label = score > 5 ? "High" : score > 2 ? "Medium" : "Low";

  return (
    <span className="text-xs px-2 py-1 rounded bg-gray-100">
      Confidence: {label}
    </span>
  );
}
