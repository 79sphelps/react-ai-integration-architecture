import { useCopilotStore } from '../state/copilotStore'

export function CopilotHistory() {
  const history = useCopilotStore((s) => s.history)

  if (!history.length) return null

  return (
    <div className="mt-4 text-xs space-y-1">
      <div className="font-semibold">History</div>
      {history.map((h, i) => (
        <div key={i} className="border p-1 rounded">
          <div>{h.query}</div>
        </div>
      ))}
    </div>
  )
}