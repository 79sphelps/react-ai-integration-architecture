import { renderHook, act } from '@testing-library/react';
import { useChat } from '../src/features/chat/hooks/useChat';

jest.mock('../features/chat/services/transformersClient', () => ({
  generateResponse: async () => 'Test AI response',
}));

describe('useChat', () => {
  it('adds user + AI messages', async () => {
    const { result } = renderHook(() => useChat());

    await act(async () => {
      await result.current.sendMessage('Hello');
    });

    expect(result.current.messages.length).toBe(2);
    expect(result.current.messages[0].role).toBe('user');
    expect(result.current.messages[1].role).toBe('assistant');
  });

  it('handles loading state', async () => {
    const { result } = renderHook(() => useChat());

    let promise: Promise<void>;

    act(() => {
      promise = result.current.sendMessage('Hello');
    });

    expect(result.current.loading).toBe(true);

    await act(async () => {
      await promise;
    });

    expect(result.current.loading).toBe(false);
  });
});