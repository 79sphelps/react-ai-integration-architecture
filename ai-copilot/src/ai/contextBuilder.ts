import type { CopilotContext } from "../types";

export function buildContext(ctx: CopilotContext) {
  return {
    query: ctx.query,
    selectedText: ctx.selectedText || "",
    uiState: JSON.stringify(ctx.uiState || {}),
  };
}
