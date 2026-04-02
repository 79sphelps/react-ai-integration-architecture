# AI Search RAG

## Overview
Retrieval-Augmented Generation (RAG) search system.

## Why this project matters

This project is important because it teaches:

> AI systems are not model calls — they are pipelines.

1) This project shows how to design pipelines, not features (pipeline architecture)

So, instead of this:
```
const answer = await askAI(question)
```

We move to this:
> Query -> Validate -> Retrieve -> Rank -> Extract -> Respond -> Explain

This represents a system, not a function. (mental shift)

2) We separate knowledge, logic, and generation in this project (separation of concerns)

Retrieval --> Find relevant documents
Ranking	--> Determine relevance
Extraction --> Pull grounded answers
Generation --> (optional) refine language

3) We are building explainable AI (XAI)

We are:
- showing sources
- exposing scoring
- tracing answers

These kinds of features are really important in fintech, healthcare, and internal enterprise tools.

4) Fourthly, we are highlighting why RAG exists

Basically, without RAG:
- AI can hallucinate
- Knowledge is stale
- There's no control over outputs

This project gives:
- answers coming from real documents
- the behavior is deterministic
- and, the results are testable

5) We also gain testability here

Because of the deterministic extractor:
- we can unit test answers
- we can verify ranking
- we can debug failures

6) Finally, we are targeting search fundamentals

Studying the project reveals understanding:
- keyword matching
- scoring systems
- ranking heruistics

## Features
- Document retrieval
- Ranking system
- Context injection
- AI-generated answers
- Source attribution

## Architecture
Query → Retrieve → Rank → Prompt → Generate → Render

## Current Gaps

1. No Semantic Understanding

Current system:

- keyword-based matching

Missing:

- meaning-based retrieval

--> Fix: embeddings

2. No Context Window Management

Right now:

- small documents only

Missing:

- chunking
- token limits

3. No True Language Generation

Current:

- extracts sentences

Missing:

- synthesis
- reasoning
- paraphrasing

4. No Streaming UX

Current:

- waits for full response

Missing:

- progressive answer rendering

5. No Confidence Threshold Logic

Current:

- always answers

Missing:

- fallback logic when confidence is low

## Run
npm install
npm run dev