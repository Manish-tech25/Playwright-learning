import { test, expect } from '@playwright/test';

test('test', async ({ page, browserName }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('button', { name: /My account/i }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('lambdatestnew@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Lambda123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForURL(/route=account\/account/, { timeout: 30000 });

  if (browserName === 'firefox') {
    await page.waitForTimeout(2000);
  }

  await expect(page.getByRole('link', { name: /Logout/i })).toBeVisible({ timeout: 30000 });
  await page.getByRole('link', { name: /Logout/i }).click();
});
