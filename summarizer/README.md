# Text Summarizer

AI-powered summarization tool with configurable output styles.

This is basically a configurable AI transformation engine w/structured outputs and UX-aware design.

The main takeaway here is to understand that with both the 'prompt-playground' project and this 'summarizer' project
we internalize the following:
- Input -> Transformation -> Output pipelines
- Structured AI outputs
- UX patterns for AI systems
- Provider-agnostic architecture

---

## Why the summarizer project matters

- It shows how to design AI-powered content transformation systems. (not just displaying AI output)

1) It teaches controlled AI outputs

Unlike chat, summarization is:
- Deterministic (same input -> similar output)
- Constrained (length, tone, format)
- Transformational (input -> compressed output)

This forces design that considers:
- Input constraints
- Output shaping
- Validation layers

This is how real AI features are built.

2) The project implements composable AI pipelines

We have this:
User Input -> Options -> AI -> Formatter -> UI Renderer

That's a pipeline architecture, not just a function call.

This is basically the foundation of:
- RAG systems
- AI workflows
- AI copilots

3) We separate intent from execution

Instead of: 
```summarize(text)```

We have:
```summarize(text, { tone, length, mode })```

This gives us:
- Declaritive design
- Extensible inputs
- Future-proof API contracts

4) We are building UX around AI limitations

AI is typically:
- Slow
- Non-deterministic
- Sometimes just wrong

So, we design:
- Loading states
- Empty states
- Structured rendering
- Error handling

5) This project moves towards AI system design

It introduces:
- Output parsing
- Mode switching
- State orchestration
- UI + AI alignment

---

## Features

- Paragraph and bullet summaries
- Tone selection
- Length control
- Structured output

## Concepts

- AI content transformation
- Output shaping
- UX-driven AI design

## Run

npm install  
npm run dev