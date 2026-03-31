import { useState } from 'react';
import { Button } from '../../../shared/components/Button';

interface Props {
  onSend: (msg: string) => void;
  disabled: boolean;
}

export const ChatInput = ({ onSend, disabled }: Props) => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (!value.trim()) return;
    onSend(value);
    setValue('');
  };

  return (
    <div className="p-4 flex gap-2 items-end">
      <textarea
        aria-label="Chat input"
        className="flex-1 resize-none p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={2}
        placeholder="Type your message..."
        value={value}
        disabled={disabled}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
          }
        }}
      />

      <Button onClick={handleSubmit} disabled={disabled}>
        Send
      </Button>
    </div>
  );
};