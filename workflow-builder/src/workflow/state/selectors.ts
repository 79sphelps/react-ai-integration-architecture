import { useWorkflowStore } from './workflowStore'
import { useMemo } from 'react'

export function useNodeMap() {
  const nodes = useWorkflowStore((s) => s.nodes)

  return useMemo(() => {
    const map: Record<string, any> = {}
    nodes.forEach((n) => (map[n.id] = n))
    return map
  }, [nodes])
}

export function useEdgesForNode(nodeId: string) {
  const edges = useWorkflowStore((s) => s.edges)

  return useMemo(
    () => edges.filter((e) => e.from === nodeId || e.to === nodeId),
    [edges, nodeId]
  )
}