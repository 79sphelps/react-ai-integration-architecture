import { test, expect } from '@playwright/test'

test('user can trigger events and see logs', async ({ page }) => {
  await page.goto('http://localhost:5173')

  await page.click('text=Trigger Success')

  await expect(page.locator('text=Metrics')).toBeVisible()

  await expect(page.locator('text=Logs')).toBeVisible()
})


test('traffic generates logs', async ({ page }) => {
  await page.goto('http://localhost:5173')

  await page.click('text=Start Traffic')

  await page.waitForTimeout(2000)

  const logs = await page.locator('text=request_').count()

  expect(logs).toBeGreaterThan(0)
})