export type NodeId = string

export interface WorkflowNode {
  id: NodeId
  type: string
  data: Record<string, any>
}

export interface WorkflowEdge {
  from: NodeId
  to: NodeId
}

export interface ExecutionContext {
  results: Record<NodeId, any>
}