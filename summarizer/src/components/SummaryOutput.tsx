import { formatSummary } from "../utils/formatSummary";

export function SummaryOutput({ output, loading, error }: any) {
  if (loading) return <div>Generating summary...</div>;
  if (error) return <div className="text-red-600">{error}</div>;
  if (!output) return <div className="text-gray-400">No summary yet</div>;

  const parsed = formatSummary(output);

  if (!parsed) return <pre>{output}</pre>;

  if (parsed.bullets) {
    return (
      <ul className="list-disc pl-6 space-y-1">
        {parsed.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    );
  }

  return <p className="leading-relaxed">{parsed.summary}</p>;
}
