import { useChat } from '../hooks/useChat';
import { ChatInput } from './ChatInput';
import { MessageBubble } from './MessageBubble';
import { TypingIndicator } from './TypingIndicator';
import { useAutoScroll } from '../../../shared/hooks/useAutoScroll';

export const ChatWindow = () => {
  const { messages, sendMessage, loading } = useChat();
  const { ref } = useAutoScroll<HTMLDivElement>();

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div
        ref={ref}
        className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 max-w-3xl mx-auto w-full"
        role="log"
        aria-live="polite"
      >
        {messages.length === 0 && (
          <div className="text-center text-gray-400 mt-10">
            Start a conversation…
          </div>
        )}

        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}

        {loading && <TypingIndicator />}
      </div>

      <div className="sticky bottom-0 backdrop-blur bg-white/80 border-t">
        <div className="max-w-3xl mx-auto w-full">
          <ChatInput onSend={sendMessage} disabled={loading} />
        </div>
      </div>
    </div>
  );
};