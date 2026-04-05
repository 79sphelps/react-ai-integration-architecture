import { classifyIntent } from "./intentClassifier";
import { buildContext } from "./contextBuilder";
import { toolRegistry } from "./toolRegistry";
import { callLLM } from "./llm/llmClient";
import { buildPrompt } from "./llm/promptBuilder";
import { parseLLMResponse } from "./llm/responseParser";
import { getRecentMemory } from "./memory";
import type { CopilotContext } from "../types";

export async function runCopilot(ctx: CopilotContext) {
  const intent = classifyIntent(ctx.query);
  const context = buildContext(ctx);
  const memory = getRecentMemory();
  const trace = {
    intent,
    toolAttempted: false,
    toolUsed: false,
    llmUsed: false,
    memoryCount: memory.length,
  };

  try {
    // Tool-first
    if (intent !== "unknown" && ctx.selectedText) {
      trace.toolAttempted = true;

      const tool = toolRegistry[intent];
      const result = await tool(ctx.selectedText);

      trace.toolUsed = true;

      return {
        answer: result,
        intent,
        actions: ["Used local tool"],
        confidence: 0.9,
        trace,
      };
    }

    // LLM with memory
    const prompt = buildPrompt({
      ...context,
      memory,
    });

    const raw = await callLLM(prompt);
    const parsed = parseLLMResponse(raw);
    trace.llmUsed = true;

    return {
      answer: parsed.answer,
      intent,
      actions: ["Used LLM"],
      confidence: parsed.confidence,
    };
  } catch (e) {
    return {
      answer: "Something went wrong. Please try again.",
      intent,
      actions: [],
      confidence: 0,
      error: true,
    };
  }
}
