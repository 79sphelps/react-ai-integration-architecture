import { HighlightedText } from "./HighlightedText";

export function SourceList({ sources, query }: any) {
  return (
    <div className="space-y-2">
      {sources.map((s: any, index: number) => (
        <div
          key={s.id}
          className={`text-sm border p-2 rounded ${
            index === 0 ? "border-blue-400 bg-blue-50" : ""
          }`}
        >
          <strong>
            {s.title} {index === 0 && "(Top Match)"}
          </strong>
          <p>
            <HighlightedText text={s.content} query={query} />
          </p>
        </div>
      ))}
    </div>
  );
}
