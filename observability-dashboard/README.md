# Observability Dashboard

## Overview

This project demonstrates a frontend observability system for monitoring AI provider interactions in real time.

This is not just a dashboard.
-> It is a mini observability platform.

It simulates how modern platforms track:

* request lifecycle events
* latency
* failures
* provider performance

---

## Why This Project Matters

We want to be able to build systems we can observe, debug, and evolve.

This project demos:

* how to instrument application logic
* how to aggregate and visualize system metrics
* how to build developer-facing tooling

---

## Architecture

UI -> Zustand Store -> Event Bus -> Instrumentation -> Provider Layer

### Key Patterns

#### 1. Event Bus

Decouples producers and consumers of system events.

Used in:

* analytics systems
* logging pipelines
* microservices

---

#### 2. Instrumentation Layer

Wraps business logic to emit observability events.

Used in:

* Datadog
* OpenTelemetry
* internal platform tooling

---

#### 3. Provider Abstraction

Allows swapping AI providers without changing UI.

Used in:

* multi-model AI platforms
* payment processors (Stripe-style adapters)

---

## Real-World Use Cases

This architecture is used in:

* AI platforms (OpenAI, Anthropic dashboards)
* monitoring tools (Datadog, New Relic)
* internal developer platforms
* SaaS debugging tools

---

## Testing Strategy

### Unit Tests

* metrics calculations
* event bus behavior

### Integration Tests

* full provider -> instrumentation -> store flow

### E2E Tests (Playwright)

* user interaction
* UI rendering
* system behavior validation

---

## Run the Project

```bash
npm install
npm run dev
npm test
npx playwright test
```

---

## Insight

> If you can’t observe your system, you don’t control it.

---

## More Enhancements

* real-time streaming (WebSockets)
* latency charts (Recharts)
* distributed tracing view
* request replay system
