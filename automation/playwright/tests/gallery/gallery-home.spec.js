// Test IDs: GAL-001
const { test, expect } = require('@playwright/test');

test.describe('Gallery Home', () => {
  test('Home gallery loads successfully (GAL-001)', async ({ page }) => {
    // Navigate home and wait for images to start appearing
    await page.goto('./');

    // Check for any visible images in the main content area
    // A photo gallery must have at least one <img> tag
    const firstImage = page.locator('img').first();
    
    // Expect the first image to be visible within a reasonable time
    await expect(firstImage).toBeVisible({ timeout: 15000 });
    
    // Verify there are images loaded on the page
    const imagesCount = await page.locator('img').count();
    expect(imagesCount).toBeGreaterThan(0);
  });
});
