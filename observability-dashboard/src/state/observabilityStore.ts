import { create } from "zustand";
import type { ObservabilityEvent } from "../observability/core/types";

interface State {
  events: ObservabilityEvent[];
  addEvent: (event: ObservabilityEvent) => void;
  clear: () => void;
}

export const useObservabilityStore = create<State>((set) => ({
  events: [],

  addEvent: (event) =>
    set((state) => ({
      events: [event, ...state.events].slice(0, 200),
    })),

  clear: () => set({ events: [] }),
}));
