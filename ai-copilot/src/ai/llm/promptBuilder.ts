export function buildPrompt(context: any) {
  return `
You are an AI copilot.

User Query:
${context.query}

Selected Text:
${context.selectedText}

UI State:
${context.uiState}

Provide a helpful response.
`;
}
