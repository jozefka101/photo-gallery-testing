// Test IDs: PERF-001
const { test, expect } = require('@playwright/test');

test.describe('Smoke / App Health', () => {
  test('Initial page load completes without permanent loading state (PERF-001)', async ({ page }) => {
    // Navigate to the base URL and wait for the network to be idle
    await page.goto('/', { waitUntil: 'networkidle' });
    
    // Check that the page has a title (any title) to confirm basic HTML load
    await expect(page).not.toHaveTitle('');
    
    // Verify the main application container is visible. 
    // Most Angular/SPA apps use a custom tag or a main/body wrapper.
    const mainContainer = page.locator('app-root, main, #main, .container').first();
    await expect(mainContainer).toBeVisible();

    // Ensure there is no obvious "Loading..." text visible after network is idle
    const loadingText = page.getByText(/loading|please wait/i);
    await expect(loadingText).not.toBeVisible();
  });
});
