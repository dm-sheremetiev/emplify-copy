import { test, expect } from '@playwright/test'

test('should navigate to the Privacy policy page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/legal/privacy-policy');
  // The new url should be "/legal/privacy-policy" (baseURL is used there)
  await expect(page).toHaveURL('/legal/privacy-policy')
  // The new page should contain an h1 with "Website Privacy Policy"
  await expect(page.locator('h1')).toContainText('Website Privacy Policy')
})
