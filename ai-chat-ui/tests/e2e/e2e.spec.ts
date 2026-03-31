import { test, expect } from '@playwright/test';

// test('chat flow works', async ({ page }) => {
//   await page.goto('http://localhost:5173');

//   const input = page.getByLabel('Chat input');
//   await input.fill('Hello AI');
//   await input.press('Enter');

//   await expect(page.locator('text=Hello AI')).toBeVisible();

//   // Wait for AI response
//   await page.waitForTimeout(2000);

//   const messages = page.locator('[role="log"] div');
//   await expect(messages.last()).toBeVisible();
// });


test('user can send message and receive response', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const input = page.getByLabel('Chat input');

  await input.fill('Tell me a joke');
  await input.press('Enter');

  await expect(page.locator('text=Tell me a joke')).toBeVisible();

  // Wait for streaming response
  await page.waitForTimeout(3000);

  const messages = page.locator('[role="log"] div');

  await expect(messages.last()).not.toBeEmpty();
});