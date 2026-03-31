import { aiClient } from '../src/features/chat/services/aiClient';

jest.mock('../features/chat/services/transformersClient');

describe('aiClient', () => {
  it('returns a response from AI', async () => {
    const response = await aiClient.sendMessage('Hello');

    expect(response).toContain('Mock response');
  });

  it('handles errors gracefully', async () => {
    jest
      .spyOn(require('../features/chat/services/transformersClient'), 'generateResponse')
      .mockRejectedValueOnce(new Error('fail'));

    await expect(aiClient.sendMessage('Hi')).rejects.toThrow(
      'AI response failed'
    );
  });
});