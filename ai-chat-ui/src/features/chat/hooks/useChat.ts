import { useState } from 'react';
import type { Message } from '../types/chat.types';
import { aiClient } from '../services/aiClient';
import { streamText } from '../utils/streamSimulator';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (content: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    const aiMessage: Message = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: '',
    };

    setMessages((prev) => [...prev, aiMessage]);

    try {
      const fullResponse = await aiClient.sendMessage(content);

      await streamText(fullResponse, (chunk) => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMessage.id ? { ...msg, content: chunk } : msg
          )
        );
      });
    } catch {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === aiMessage.id
            ? { ...msg, content: 'Error generating response.' }
            : msg
        )
      );
    } finally {
      setLoading(false);
    }
  };

  return { messages, sendMessage, loading };
};