// const API_URL = "/api/llm"; // replace with real endpoint
// const API_URL = "https://openrouter.ai/api/v1/chat/completions";

// export async function callLLM(prompt: string, signal?: AbortSignal) {
//   const controller = new AbortController();
//   const timeout = setTimeout(() => controller.abort(), 10000);

//   try {
//     const res = await fetch(API_URL, {
//       method: "POST",
//       body: JSON.stringify({ prompt }),
//       headers: { "Content-Type": "application/json" },
//       signal: signal || controller.signal,
//     });

//     if (!res.ok) throw new Error("LLM request failed");

//     const data = await res.json();
//     return data.output;
//   } finally {
//     clearTimeout(timeout);
//   }
// }


const API_URL = "https://openrouter.ai/api/v1/chat/completions";

export async function callLLM(prompt: string, signal?: AbortSignal) {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

  // console.log("API KEY:", import.meta.env.VITE_OPENROUTER_API_KEY);

  if (!apiKey) {
    throw new Error("Missing OpenRouter API key");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      signal: signal || controller.signal,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": window.location.origin,
        "X-Title": "AI Copilot Project",
      },
      body: JSON.stringify({
        model: "mistralai/mistral-small-creative",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`LLM request failed: ${errText}`);
    }

    const data = await res.json();

    const content =
      data?.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("Invalid LLM response shape");
    }

    return content;
  } finally {
    clearTimeout(timeout);
  }
}