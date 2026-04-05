export function CopilotError({ message }: { message: string }) {
  return (
    <div className="text-red-500 text-sm mt-2">
      {message}
    </div>
  )
}