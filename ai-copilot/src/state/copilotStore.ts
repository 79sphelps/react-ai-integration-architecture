import { create } from "zustand";

interface CopilotState {
  history: { query: string; answer: string }[];
  addToHistory: (entry: { query: string; answer: string }) => void;
}

export const useCopilotStore = create<CopilotState>((set) => ({
  history: [],
  addToHistory: (entry) =>
    set((state) => ({
      history: [...state.history, entry],
    })),
}));
