export function ScoreBreakdown({ score }: { score: number }) {
  return (
    <div className="text-xs text-gray-500">
      Top document relevance score: {score}
    </div>
  );
}
