export function buildPrompt(input: string) {
  return `
Return ONLY JSON.

Schema:
{
  "projectType": string (e.g. "dashboard", "ecommerce", "admin-panel"),
  "features": string[],
  "tech": string[]
}

Rules:
- projectType must describe the PRODUCT TYPE, not the framework
- tech must include frameworks/libraries

Input:
${input}
`;
}
