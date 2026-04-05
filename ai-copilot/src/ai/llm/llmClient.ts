import { withTimeout } from "../../utils/withTimeout";
import { retry } from "../../utils/retry";

export async function callLLM(prompt: string, signal?: AbortSignal) {
  return retry(async () => {
    const res = await withTimeout(
      fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        signal,
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // model: 'mistralai/mistral-7b-instruct',
          model: "mistralai/mistral-small-creative",
          // model: 'gpt/gpt-5.1',
          messages: [{ role: "user", content: prompt }],
        }),
      }),
      8000,
    );

    const data = await res.json();
    return data.choices?.[0]?.message?.content;
  });
}
