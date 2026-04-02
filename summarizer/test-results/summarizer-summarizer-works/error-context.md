# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: summarizer.spec.ts >> summarizer works
- Location: tests/e2e/summarizer.spec.ts:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('p, ul')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('p, ul')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]: Input Text
      - textbox "Paste text to summarize..." [active] [ref=e7]: This is a long text to summarize
      - generic [ref=e8]: "Tip: Longer inputs produce better summaries"
    - generic [ref=e9]:
      - combobox [ref=e10]:
        - option "Paragraph" [selected]
        - option "Bullet Points"
      - combobox [ref=e11]:
        - option "Formal" [selected]
        - option "Casual"
      - slider [ref=e13]: "150"
    - button "Summarize" [ref=e14]
  - generic [ref=e16]: No summary yet
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test('summarizer works', async ({ page }) => {
  4  |   await page.goto('/')
  5  | 
  6  |   await page.fill('textarea', 'This is a long text to summarize')
  7  |   await page.click('text=Summarize')
  8  | 
> 9  |   await expect(page.locator('p, ul')).toBeVisible()
     |                                       ^ Error: expect(locator).toBeVisible() failed
  10 | })
```