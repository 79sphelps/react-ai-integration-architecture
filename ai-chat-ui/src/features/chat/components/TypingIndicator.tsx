export const TypingIndicator = () => {
  return (
    <div
      className="flex items-center gap-1 px-3 py-2 bg-gray-200 rounded-lg w-fit"
      role="status"
      aria-label="Assistant is typing"
    >
      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
    </div>
  );
};