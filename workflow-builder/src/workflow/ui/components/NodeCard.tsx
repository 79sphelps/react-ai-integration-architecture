import type { WorkflowNode } from '../../core/types'

export function NodeCard({
  node,
  selected,
  onSelect,
}: {
  node: WorkflowNode
  selected: boolean
  onSelect: () => void
}) {
  return (
    <div
      onClick={onSelect}
      className={`p-3 border rounded cursor-pointer transition ${
        selected ? 'bg-blue-100 border-blue-500' : 'bg-white'
      }`}
    >
      <div className="font-semibold">{node.type}</div>
      <div className="text-xs text-gray-500">{node.id.slice(0, 6)}</div>
    </div>
  )
}