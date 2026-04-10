import '../../workflow/plugins/bootstrap'

import { useState } from 'react'
import { useWorkflowStore } from '../state/workflowStore'
import { executeWorkflow } from '../core/executor'
import { NodeCard } from './components/NodeCard'
import { EdgeBuilder } from './components/EdgeBuilder'
import { ResultsPanel } from './components/ResultsPanel'
import { NodeEditor } from './components/NodeEditor'
import { EdgeList } from './components/EdgeList'
import { LoadingOverlay } from './components/LoadingOverlay'
import { useExecutionStore } from '../state/executionStore'

export function WorkflowBuilder() {
  const { nodes, addNode } = useWorkflowStore()
  const [selected, setSelected] = useState<string | null>(null)

  const { setRunning, setResults } = useExecutionStore()

  const run = async () => {
    try {
      setRunning(true)
      const result = await executeWorkflow(
        useWorkflowStore.getState().nodes,
        useWorkflowStore.getState().edges
      )
      setResults(result)
    } catch (err) {
      alert((err as Error).message)
    } finally {
      setRunning(false)
    }
  }

  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      <LoadingOverlay />

      <div className="col-span-2 space-y-3">
        <div className="flex gap-2">
          <button
            onClick={() =>
              addNode({
                id: crypto.randomUUID(),
                type: 'input',
                data: { value: 1 },
              })
            }
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            Add Node
          </button>

          <button
            onClick={run}
            className="bg-purple-600 text-white px-3 py-1 rounded"
          >
            Run
          </button>
        </div>

        <EdgeBuilder />

        <div className="grid grid-cols-3 gap-2">
          {nodes.map((node) => (
            <NodeCard
              key={node.id}
              node={node}
              selected={selected === node.id}
              onSelect={() => setSelected(node.id)}
            />
          ))}
        </div>

        <ResultsPanel />
      </div>

      <div className="space-y-3">
        <NodeEditor selectedId={selected} />
        <EdgeList />
      </div>
    </div>
  )
}