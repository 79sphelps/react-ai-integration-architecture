export async function generateMock(prompt: string, temperature: number) {
  await new Promise((r) => setTimeout(r, 500))

  const randomness = Math.round(Math.random() * temperature * 100)

  return JSON.stringify({
    response: `${prompt} (variation ${randomness})`,
    confidence: 1 - temperature,
  })
}