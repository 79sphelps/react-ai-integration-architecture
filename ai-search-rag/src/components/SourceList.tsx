import type { RankedDocument } from "../types";
import { highlightMatch } from "../utils/highlightMatch";

export function SourceList({
  sources,
  query,
}: {
  sources: RankedDocument[];
  query: string;
}) {
  return (
    <div className="space-y-2">
      {sources.map((s) => (
        <div key={s.id} className="border p-3 rounded-lg text-sm">
          <div className="flex justify-between">
            <strong>{s.title}</strong>
            <span className="text-xs text-gray-500">Score: {s.score}</span>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: highlightMatch(s.content, query),
            }}
          />
        </div>
      ))}
    </div>
  );
}
