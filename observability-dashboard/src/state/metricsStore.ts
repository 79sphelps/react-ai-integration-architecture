import { create } from 'zustand'

interface MetricsState {
  history: number[]
  push: (value: number) => void
}

export const useMetricsStore = create<MetricsState>((set) => ({
  history: [],

  push: (value) =>
    set((state) => ({
      history: [...state.history, value].slice(-50),
    })),
}))