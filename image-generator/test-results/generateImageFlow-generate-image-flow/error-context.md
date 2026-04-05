# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: generateImageFlow.spec.ts >> generate image flow
- Location: tests/e2e/generateImageFlow.spec.ts:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('img')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('img')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - heading "AI Image Generator" [level=1] [ref=e4]
  - generic [ref=e5]:
    - generic [ref=e6]: Image Prompt
    - textbox "Image prompt input" [ref=e7]:
      - /placeholder: Describe an image...
    - button "Generate" [active] [ref=e8]
  - button "a cat astronaut" [ref=e10]
  - alert [ref=e11]: Failed to fetch
  - generic [ref=e12]: No images yet. Try generating one.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test('generate image flow', async ({ page }) => {
  4  |   await page.goto('http://localhost:5173')
  5  | 
  6  |   await page.fill('input', 'a cat astronaut')
  7  |   await page.click('text=Generate')
  8  | 
> 9  |   await expect(page.locator('img')).toBeVisible()
     |                                     ^ Error: expect(locator).toBeVisible() failed
  10 | })
```