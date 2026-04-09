import { instrumentedCall } from "../observability/instrumentation";
import { mockProvider, errorProvider } from "./mockProviders";

function getProvider(name: string) {
  if (name === "mock") return mockProvider;
  if (name === "error") return errorProvider;

  throw new Error("Unknown provider");
}

export async function generateWithProvider(provider: string, prompt: string) {
  return instrumentedCall(provider, async () => {
    const p = getProvider(provider);
    return p.generate(prompt);
  });
}
