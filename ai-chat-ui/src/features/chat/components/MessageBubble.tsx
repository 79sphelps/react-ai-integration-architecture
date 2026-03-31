import type { Message } from '../types/chat.types';
import clsx from 'clsx';

export const MessageBubble = ({ message }: { message: Message }) => {
  return (
    <div
      className={clsx(
        'p-3 rounded max-w-xl',
        message.role === 'user'
          ? 'bg-blue-500 text-white self-end'
          : 'bg-gray-200'
      )}
    >
      {message.content}
    </div>
  );
};