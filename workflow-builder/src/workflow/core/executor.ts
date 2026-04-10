import type { WorkflowNode, WorkflowEdge } from './types'
import { topologicalSort } from './graph'
import { getNodeExecutor } from '../plugins/registry'
import { validateGraph } from './validation'
import { createExecution } from './executionController'

export async function executeWorkflow(
  nodes: WorkflowNode[],
  edges: WorkflowEdge[]
) {
  const validation = validateGraph(nodes, edges)

  if (!validation.valid) {
    throw new Error(validation.error)
  }

  const execution = createExecution()
  const ordered = topologicalSort(nodes, edges)

  const results: Record<string, any> = {}

  for (const node of ordered) {
    if (!execution.isActive()) {
      throw new Error('Execution cancelled')
    }

    try {
      const exec = getNodeExecutor(node.type)

      const inputs = edges
        .filter((e) => e.to === node.id)
        .map((e) => results[e.from])

      results[node.id] = await exec(node.data, inputs)
    } catch (err: any) {
      results[node.id] = { error: err.message }
    }
  }

  return results
}