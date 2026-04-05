export function validateInput(input: string) {
  if (!input || !input.trim()) {
    return "Input cannot be empty";
  }

  if (input.length > 500) {
    return "Input too long (max 500 chars)";
  }

  return null;
}
