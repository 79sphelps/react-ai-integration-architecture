export const streamText = async (
  text: string,
  onChunk: (chunk: string) => void
) => {
  const words = text.split(' ');

  for (let i = 0; i < words.length; i++) {
    await new Promise((r) => setTimeout(r, 30));
    onChunk(words.slice(0, i + 1).join(' '));
  }
};