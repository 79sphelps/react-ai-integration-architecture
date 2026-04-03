# AI Search RAG Hybrid

## Overview

This project extends a baseline RAG system (ai-search-rag) by introducing a decision layer that determines whether to:

- Use deterministic extraction (from local internal documents)
- Or fall back to an LLM

Basically, this project allows for:
- Retrieval-based QA
- LLM augmentation
- Open-world fallback --> through the LLM
- Decision routing logic

---

## Key Concepts in Hybrid RAG

Instead of always calling an LLM, we:

1. Retrieve documents
2. Extract an answer
3. Compute confidence
4. Route decision:
   - High confidence -> return extracted answer
   - Low confidence -> call LLM

---

## Architecture

Query -> Retrieve -> Rank -> Extract -> Confidence -> Decision -> Answer

---

## Why This Matters

- Reduces cost (fewer LLM calls)
- Improves reliability
- Prevents hallucinations
- Enables explainability

---

## Features

- Deterministic answer extraction
- Confidence scoring
- LLM fallback simulation
- Strategy transparency (UI)
- Source attribution

---

## Next Steps

- Add embeddings (semantic search)
- Add chunking
- Add streaming responses
- Caching LLM responses
- Rate limiting + retry backoff