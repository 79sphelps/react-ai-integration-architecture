import { test, expect } from '@playwright/test'

test('user builds and runs workflow', async ({ page }) => {
  await page.goto('http://localhost:5173')

  await page.click('text=Add Node')
  await page.click('text=Run')

  await page.waitForTimeout(1000)

  await expect(page.locator('text=Results')).toBeVisible()
})