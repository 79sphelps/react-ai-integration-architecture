import { create } from 'zustand'

interface ProviderState {
  selected: string
  setProvider: (p: string) => void
}

export const useProviderStore = create<ProviderState>((set) => ({
  selected: 'mock',
  setProvider: (p) => set({ selected: p }),
}))