import { create } from 'zustand'
import type { WorkflowNode, WorkflowEdge } from '../core/types'

interface State {
  nodes: WorkflowNode[]
  edges: WorkflowEdge[]
  addNode: (node: WorkflowNode) => void
  addEdge: (edge: WorkflowEdge) => void
}

export const useWorkflowStore = create<State>((set) => ({
  nodes: [],
  edges: [],

  addNode: (node) =>
    set((s) => ({ nodes: [...s.nodes, node] })),

  addEdge: (edge) =>
    set((s) => ({ edges: [...s.edges, edge] })),
}))