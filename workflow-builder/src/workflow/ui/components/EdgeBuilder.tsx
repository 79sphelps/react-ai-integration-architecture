import { useState } from 'react'
import { useWorkflowStore } from '../../state/workflowStore'

export function EdgeBuilder() {
  const { nodes, addEdge } = useWorkflowStore()
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  return (
    <div className="flex gap-2 mt-2">
      <select onChange={(e) => setFrom(e.target.value)}>
        <option>Select From</option>
        {nodes.map((n) => (
          <option key={n.id} value={n.id}>
            {n.type}
          </option>
        ))}
      </select>

      <select onChange={(e) => setTo(e.target.value)}>
        <option>Select To</option>
        {nodes.map((n) => (
          <option key={n.id} value={n.id}>
            {n.type}
          </option>
        ))}
      </select>

      <button
        onClick={() => from && to && addEdge({ from, to })}
        className="bg-green-500 text-white px-2 rounded"
      >
        Connect
      </button>
    </div>
  )
}