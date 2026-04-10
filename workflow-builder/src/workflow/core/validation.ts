import type { WorkflowNode, WorkflowEdge } from './types'

export function validateGraph(
  nodes: WorkflowNode[],
  edges: WorkflowEdge[]
): { valid: boolean; error?: string } {
  const nodeIds = new Set(nodes.map((n) => n.id))

  for (const edge of edges) {
    if (!nodeIds.has(edge.from) || !nodeIds.has(edge.to)) {
      return { valid: false, error: 'Edge references missing node' }
    }
  }

  // cycle detection
  const visited = new Set<string>()
  const stack = new Set<string>()

  const adj: Record<string, string[]> = {}
  nodes.forEach((n) => (adj[n.id] = []))
  edges.forEach((e) => adj[e.from].push(e.to))

  function dfs(node: string): boolean {
    if (stack.has(node)) return true
    if (visited.has(node)) return false

    visited.add(node)
    stack.add(node)

    for (const n of adj[node]) {
      if (dfs(n)) return true
    }

    stack.delete(node)
    return false
  }

  if (nodes.some((n) => dfs(n.id))) {
    return { valid: false, error: 'Cycle detected' }
  }

  return { valid: true }
}