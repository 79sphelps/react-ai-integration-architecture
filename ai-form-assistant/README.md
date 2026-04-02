# AI Form Assistant

## Overview
AI-powered form autofill and validation assistant.

This project builds an AI system that understands user intent and assists structured input.

## Features
- Field-level AI suggestions
- Confidence scoring
- Schema-based validation
- Structured output parsing

## Why this project matters

It shows something really important:
-> How to bridge unstructured AI with structured systems

Forms are typically:
- Strict, typed, and validated

AI is typically:
- Loose, fuzzy, and probabilistic

## What the project shows

1) Schema-driven architecture

FormSchema -> AI -> Suggestions -> Validation -> UI

2) Field-level intelligence

Instead of one large response:
```
{
    name: "...",
    email: "...",
    company: "...",
}
```

We build:
- per-field suggestions
- confidence levels
- validation overlays

3) It shows AI-assisted UX

- Autofill
- Inline suggestions
- Smart validation
- Error correction

## Architecture
- Schema-driven design
- AI → structured transformation
- Field-level rendering

## Run
npm install
npm run dev