export function AnswerPanel({ answer }: { answer: string }) {
  if (!answer) return null;

  return (
    <div className="p-4 bg-white rounded-xl shadow border">
      <h3 className="font-semibold mb-2">Answer</h3>
      <p>{answer}</p>
    </div>
  );
}
