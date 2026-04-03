export function isAnswerWeak(answer: string) {
  if (!answer) return true;

  const length = answer.trim().length;

  if (length < 30) return true;
  if (answer.includes("couldn't find")) return true;

  return false;
}
