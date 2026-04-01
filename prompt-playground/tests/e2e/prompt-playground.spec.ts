import { test, expect } from '@playwright/test'

test('prompt playground flow', async ({ page }) => {
  await page.goto('/')

  await page.fill('textarea', 'Write about {topic}')
  await page.fill('input', 'AI')

  await page.click('text=Run Prompt')

  await expect(page.locator('pre')).toBeVisible()
})