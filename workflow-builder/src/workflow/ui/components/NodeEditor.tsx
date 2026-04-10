import { useWorkflowStore } from '../../state/workflowStore'

export function NodeEditor({ selectedId }: { selectedId: string | null }) {
  const { nodes, addNode } = useWorkflowStore()

  const node = nodes.find((n) => n.id === selectedId)

  if (!node) {
    return <div className="text-gray-400">Select a node</div>
  }

  return (
    <div className="border p-3 rounded bg-white">
      <div className="font-semibold mb-2">Edit Node</div>

      <input
        className="border p-1 w-full"
        value={node.data.value || ''}
        onChange={(e) => {
          node.data.value = Number(e.target.value)
        }}
      />
    </div>
  )
}