import { useHistoryStore } from '../state/historyStore'

export function PromptHistory({
  onSelect,
}: {
  onSelect: (p: string) => void
}) {
  const prompts = useHistoryStore((s) => s.prompts)

  if (!prompts.length) return null

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {prompts.map((p, i) => (
        <button
          key={i}
          onClick={() => onSelect(p)}
          className="text-xs bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
        >
          {p}
        </button>
      ))}
    </div>
  )
}