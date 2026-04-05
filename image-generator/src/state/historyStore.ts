import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface HistoryState {
  prompts: string[]
  addPrompt: (p: string) => void
}

export const useHistoryStore = create<HistoryState>()(
  persist(
    (set) => ({
      prompts: [],
      addPrompt: (p) =>
        set((s) => ({
          prompts: [p, ...s.prompts].slice(0, 10),
        })),
    }),
    { name: 'prompt-history' }
  )
)