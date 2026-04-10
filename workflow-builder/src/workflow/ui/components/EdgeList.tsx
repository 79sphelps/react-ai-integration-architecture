import { useWorkflowStore } from '../../state/workflowStore'

export function EdgeList() {
  const edges = useWorkflowStore((s) => s.edges)

  if (!edges.length) {
    return <div className="text-gray-400">No connections yet</div>
  }

  return (
    <div className="text-xs">
      {edges.map((e, i) => (
        <div key={i}>
          {e.from.slice(0, 4)} → {e.to.slice(0, 4)}
        </div>
      ))}
    </div>
  )
}