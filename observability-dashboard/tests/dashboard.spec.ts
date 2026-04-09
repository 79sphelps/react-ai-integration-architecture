import { test, expect } from '@playwright/test'

test('user can trigger events and see logs', async ({ page }) => {
  await page.goto('http://localhost:5173')

  await page.click('text=Trigger Success')

  await expect(page.locator('text=Metrics')).toBeVisible()

  await expect(page.locator('text=Logs')).toBeVisible()
})