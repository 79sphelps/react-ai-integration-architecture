// TEMP FIX - transformersClient not working

export async function generateResponse(prompt: string): Promise<string> {
  // Simulated latency for realism
  await new Promise((r) => setTimeout(r, 800))

  // Replace with real API later
  return `Echo: ${prompt}`
}