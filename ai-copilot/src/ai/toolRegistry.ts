import type { CopilotIntent } from "../types";
import { summarize } from "./tools/summarizeTool";
import { explain } from "./tools/explainTool";
import { transform } from "./tools/transformTool";

export const toolRegistry: Record<CopilotIntent, Function> = {
  summarize,
  explain,
  transform,
  unknown: async () => "Sorry, I am not sure how to help with that.",
};
