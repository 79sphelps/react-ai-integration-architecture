import { create } from 'zustand'

interface ExecutionState {
  running: boolean
  results: Record<string, any>
  setRunning: (v: boolean) => void
  setResults: (r: any) => void
}

export const useExecutionStore = create<ExecutionState>((set) => ({
  running: false,
  results: {},

  setRunning: (v) => set({ running: v }),
  setResults: (r) => set({ results: r }),
}))