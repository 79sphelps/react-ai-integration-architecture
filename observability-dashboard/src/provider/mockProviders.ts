export const mockProvider = {
  async generate(prompt: string) {
    const latency = 200 + Math.random() * 800;
    await new Promise((r) => setTimeout(r, latency));
    return { output: `Mock: ${prompt}` };
  },
};

export const errorProvider = {
  async generate() {
    const latency = 200 + Math.random() * 500;
    await new Promise((r) => setTimeout(r, latency));

    if (Math.random() < 0.6) {
      throw new Error("Random failure");
    }

    return { output: "Recovered" };
  },
};
