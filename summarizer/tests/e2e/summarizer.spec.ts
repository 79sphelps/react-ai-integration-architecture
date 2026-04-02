import { test, expect } from '@playwright/test'

test('summarizer works', async ({ page }) => {
  await page.goto('/')

  await page.fill('textarea', 'This is a long text to summarize')
  await page.click('text=Summarize')

  await expect(page.locator('p, ul')).toBeVisible()
})