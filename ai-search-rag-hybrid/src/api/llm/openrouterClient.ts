const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

export async function callOpenRouter(messages: any[]) {
  const res = await fetch(OPENROUTER_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
    //   model: "mistralai/mistral-7b-instruct-v0.3:free", // free model
    //   model: "mistralai/mistral-7b-instruct-v0.1", // free model --> works
      model: "mistralai/mistral-small-creative", // free model --> works
      messages,
      temperature: 0.3,
    }),
  });

  if (!res.ok) {
    throw new Error("LLM request failed");
  }

  const data = await res.json();

  return data.choices?.[0]?.message?.content || "No response";
}
