import type { WorkflowNode, WorkflowEdge } from './types'

export function topologicalSort(
  nodes: WorkflowNode[],
  edges: WorkflowEdge[]
): WorkflowNode[] {
  const inDegree: Record<string, number> = {}

  nodes.forEach((n) => (inDegree[n.id] = 0))
  edges.forEach((e) => (inDegree[e.to]++))

  const queue = nodes.filter((n) => inDegree[n.id] === 0)
  const result: WorkflowNode[] = []

  while (queue.length) {
    const node = queue.shift()!
    result.push(node)

    edges
      .filter((e) => e.from === node.id)
      .forEach((e) => {
        inDegree[e.to]--
        if (inDegree[e.to] === 0) {
          queue.push(nodes.find((n) => n.id === e.to)!)
        }
      })
  }

  return result
}