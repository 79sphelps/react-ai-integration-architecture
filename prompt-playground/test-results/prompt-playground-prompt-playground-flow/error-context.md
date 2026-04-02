# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: prompt-playground.spec.ts >> prompt playground flow
- Location: tests/e2e/prompt-playground.spec.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input')
    - locator resolved to 5 elements. Proceeding with the first one: <input disabled value="tone" class="w-1/3 p-2 border rounded bg-gray-100 text-sm"/>
    - fill("AI")
  - attempting fill action
    2 × waiting for element to be visible, enabled and editable
      - element is not enabled
    - retrying fill action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and editable
      - element is not enabled
    - retrying fill action
      - waiting 100ms
    58 × waiting for element to be visible, enabled and editable
       - element is not enabled
     - retrying fill action
       - waiting 500ms
    - waiting for element to be visible, enabled and editable

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]: Prompt Template
      - textbox "Prompt template" [active] [ref=e7]:
        - /placeholder: "Write a {tone} summary about {topic}"
        - text: "Write about {topic}"
    - generic [ref=e8]:
      - generic [ref=e9]:
        - generic [ref=e10]: Variables
        - button "+ Add" [ref=e11]
      - generic [ref=e12]:
        - textbox [disabled] [ref=e13]: tone
        - textbox [ref=e14]: funny
      - generic [ref=e15]:
        - textbox [disabled] [ref=e16]: topic
        - textbox [ref=e17]: React
    - generic [ref=e18]:
      - generic [ref=e19]: "Temperature: 0.50"
      - slider [ref=e20]: "0.5"
      - generic [ref=e21]: Lower = deterministic, Higher = creative
    - generic [ref=e22]:
      - generic [ref=e23]: JSON Schema
      - textbox [ref=e24]: "{\"response\": \"\", \"confidence\": 0}"
    - button "Run Prompt" [ref=e25]
  - generic [ref=e28]: Output
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("prompt playground flow", async ({ page }) => {
  4  |   await page.goto("/");
  5  | 
  6  |   await page.fill("textarea", "Write about {topic}");
> 7  |   await page.fill("input", "AI");
     |              ^ Error: page.fill: Test timeout of 30000ms exceeded.
  8  | 
  9  |   await page.click("text=Run Prompt");
  10 | 
  11 |   await expect(page.locator("pre")).toBeVisible();
  12 | });
  13 | 
```