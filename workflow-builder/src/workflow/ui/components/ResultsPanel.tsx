import { useExecutionStore } from '../../state/executionStore'

export function ResultsPanel() {
  const { results, running } = useExecutionStore()

  return (
    <div className="border p-3 rounded bg-white mt-4">
      <div className="font-semibold mb-2">
        Results {running && '(Running...)'}
      </div>

      <pre className="text-xs max-h-40 overflow-auto">
        {JSON.stringify(results, null, 2)}
      </pre>
    </div>
  )
}