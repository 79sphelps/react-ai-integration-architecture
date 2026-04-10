import { executors } from './executors'
import { topologicalSort } from './topologicalSort'

type Node = {
  id: string
  type: string
  data?: any
}

type Edge = {
  source: string
  target: string
}

export async function executeWorkflow(nodes: Node[], edges: Edge[]) {
  const sorted = topologicalSort(nodes, edges)

  const results: Record<string, any> = {}

  for (const node of sorted) {
    const executor = executors[node.type]

    // HARD FAIL if executor missing
    if (!executor) {
      throw new Error(`No executor for ${node.type}`)
    }

    // Collect inputs from dependencies
    const incomingEdges = edges.filter((e) => e.target === node.id)

    const inputs: Record<string, any> = {
      ...(node.data || {}),
    }

    for (const edge of incomingEdges) {
      const sourceValue = results[edge.source]

      if (sourceValue === undefined) {
        throw new Error(`Missing dependency: ${edge.source}`)
      }

      // Simple mapping (can evolve later)
      inputs[edge.source] = sourceValue
    }

    try {
      const output = await executor(inputs)
      results[node.id] = output
    } catch (err) {
      throw new Error(
        `Execution failed at node ${node.id}: ${
          err instanceof Error ? err.message : 'Unknown error'
        }`
      )
    }
  }

  return results
}