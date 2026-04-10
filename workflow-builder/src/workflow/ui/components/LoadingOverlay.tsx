import { useExecutionStore } from '../../state/executionStore'

export function LoadingOverlay() {
  const running = useExecutionStore((s) => s.running)

  if (!running) return null

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow">
        Running workflow...
      </div>
    </div>
  )
}