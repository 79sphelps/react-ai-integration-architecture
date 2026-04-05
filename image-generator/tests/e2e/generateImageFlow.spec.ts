import { test, expect } from '@playwright/test'

test('generate image flow', async ({ page }) => {
  await page.goto('http://localhost:5173')

  await page.fill('input', 'a cat astronaut')
  await page.click('text=Generate')

  await expect(page.locator('img')).toBeVisible()
})