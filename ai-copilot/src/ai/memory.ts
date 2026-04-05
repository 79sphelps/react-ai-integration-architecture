import { useCopilotStore } from "../state/copilotStore";

export function getRecentMemory(limit = 3) {
  const history = useCopilotStore.getState().history;
  return history.slice(-limit);
}
