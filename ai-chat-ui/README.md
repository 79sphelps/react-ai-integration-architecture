# AI Chat UI (Transformers.js)

A fully client-side AI chat application built with React, TypeScript, and Transformers.js.

This project attempts to train the dev to think in:
- streams instead of responses
- events instead of state
- systems instead of components

## Features

- Local AI model (no backend required)
- Streaming response simulation
- Accessible chat UI
- Fully typed architecture
- Error handling and loading states

## Why this project is important

Most people think a chat UI is really basic but this is completely wrong.

A well-built AI chat UI is actually a real-time distributed system frontend.

1) This project demos state orchestration at scale

A chat UI forces the dev to manage:
- Message history
- Streaming responses
- Partial tokens
- Interruptions (stop generation)
- Retry logic

So, this looks like:
User -> Intent -> Request -> Stream -> Partial UI -> Final State

This is "temporal state management" and not just static state.

2) We get familiar with streaming architectures

Modern AI UIs are not request/response. 
They are: Client <-> Server <-> LLM (streaming tokens)

This introduces:

- Server-Sent Events (SSE)
- WebSockets
- Incremental rendering
- Backpressure handling

This is the same pattern used in:

- Live dashboards
- Trading platforms
- collaborative apps

3) We build message-based architecture here

So, instead of:
```getData()```

We have:
```
Message {
    id
    role
    content
    status
}
```

This is foundational to:
- Event-driven systems
- Distributed logs
- CQRS-style thinking

4) This project also separates UI from AI execution

The idea here is that good chat UIs don't call OpenAI directly.

We introduce:
- API layers
- Providers
- Adapters

UI -> ChatService -> Provider -> LLM

6) We also handle non-deterministic systems

AI responses:
- are slow
- can fail
- can also change format

So, we build:
- Retry strategies
- Loading fallbacks
- Graceful degradation

6) Finally, we are are looking at UX for "thinking systems"

Chat UI is not CRUD (create, read, update, delete) operations.

It requires:
- typing indicators
- scroll anchoring
- message grouping
- latency masking

So, there is a lot more product-level engineering here.

## Tech Stack

- React + TypeScript
- Transformers.js --> Not Working Yet (May want to swap)
- TailwindCSS
- Vitest + Testing Library

## Architecture

- `hooks/` → state management
- `services/` → AI abstraction
- `components/` → UI
- `utils/` → streaming logic

## Running

```bash
npm install
npm run dev
```

## Testing

```bash
npm run dev
```

## Future Improvements

- Real streaming (Web Workers)
- Model switching
- Prompt templating
