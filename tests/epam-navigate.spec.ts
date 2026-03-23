import { test, expect } from '@playwright/test';

// EPAM navigation test - initial structure

test('EPAM: navigate to homepage', async ({ page }) => {
  await page.goto('https://www.epam.com/');
  await page.waitForLoadState('networkidle');

  // Verify page title
  await expect(page).toHaveTitle(/EPAM/);

  // Detect cookie/privacy banner presence (do not modify it)
  const cookieDialog = await page.$('dialog[role="dialog"], [role="dialog"]');
  const acceptButton = cookieDialog ? await cookieDialog.$('button:has-text("Accept All"), button:has-text("Accept")') : await page.$('button:has-text("Accept All"), button:has-text("Accept")');

  // Save a diagnostic screenshot
  await page.screenshot({ path: 'epam-home.png', fullPage: true });
});
