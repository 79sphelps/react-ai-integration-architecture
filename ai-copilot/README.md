# AI Copilot Mini Project

## Overview
A context-aware AI assistant embedded into an application.

This project demonstrates a production-grade AI Copilot architecture using:

* Tool-first execution
* LLM fallback
* Context + memory injection
* Observable decision tracing
* Modular AI pipeline design

## Setup

```bash
npm install
npm run dev
```

## Env
> VITE_OPENROUTER_API_KEY=your_key


## Architecture

- Copilot Engine
- Tool System
- LLM Integration
- Context Builder

---

# Core Architecture Flow

```
User Input
   ↓
Intent Classifier
   ↓
Tool Registry (if applicable)
   ↓
LLM Fallback (if needed)
   ↓
Response Parser
   ↓
UI Rendering
```

---

## Why This Project is Important for AI Architecture Understanding

This project demonstrates how to:

- embed AI into real workflows
- design hybrid AI systems
- control cost + latency
- build explainable AI features

Because LLMs are:
- expensive
- slow
- non-deterministic

Tools are:
- cheap
- fast
- reliable

So, companies prefer: Tool --> LLM (only if needed)

Many companies use AI in this way:

```
input → intent classification → tool OR LLM → structured output
```

This project teaches you how to:

* Build deterministic AI systems
* Reduce cost and latency
* Improve reliability and explainability
* Design scalable AI architectures

---

# Additional Features

## Deterministic + AI Hybrid
- tools first
- LLM fallback

## Context-Aware AI
- UI state injection
- selected text grounding

## Extensible Tooling
- plug-in tools
- scalable architecture

## Real Product UX
- loading states
- response clarity
- intent visibility

## Tool-First Execution

- Fast, reliable, and cost-efficient operations.

## LLM Fallback

- Used only when necessary for reasoning tasks.

## Memory System

- Short-term conversation history improves responses.

## Decision Trace Panel

Visualizes how decisions are made:

* Intent detection
* Tool usage
* LLM fallback
* Memory usage

## Polished UX

* Loading states
* Error handling
* Empty states
* Action indicators

---

# Example Flow

### Input:

> “Fix this regex: ^[a-z]+$”

### Output:

* Tool executes fix instantly

---

### Input:

> “Explain why this regex fails”

### Output:

* LLM provides reasoning

---

## Shift in Thinking that is Important

> Apps are no longer just interfaces.

They are:

> **Decision-making systems powered by AI**

# Future Enhancements

- streaming responses
- function calling (real tool invocation via LLM)
- vector memory (long-term memory history)
- embeddings (context retrieval)
- multi-agent systems
