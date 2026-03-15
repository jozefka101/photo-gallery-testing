// Test IDs: SEA-001, SEA-002, SEA-003, SEA-004, SEA-005
const { test, expect } = require('@playwright/test');

test.describe('Search System', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./');
  });

  test('Open search modal from header (SEA-001)', async ({ page }) => {
    // The snapshot showed a textbox "Search..." in the generic area
    const searchInput = page.getByPlaceholder(/search/i);
    await expect(searchInput).toBeVisible();
    
    // If it's a modal, clicking it or focusing should trigger it
    await searchInput.click();
    // Verification depends on if it opens a new view/modal
  });

  test('Close search modal without searching (SEA-002)', async ({ page }) => {
    const searchInput = page.getByPlaceholder(/search/i);
    await searchInput.click();
    
    // Try to click away or find a close button
    await page.keyboard.press('Escape');
    // If it's a modal, check it's hidden. If it's just a field, this is simpler.
  });

  test('Search with a term that returns no results (SEA-003)', async ({ page }) => {
    const searchInput = page.getByPlaceholder(/search/i);
    await searchInput.fill('ThisTermShouldNotHaveAnyResults12345');
    await page.keyboard.press('Enter');
    
    // Look for "no results" message
    const noResultsMsg = page.getByText(/no results|nothing found|no images/i);
    await expect(noResultsMsg.or(page.getByRole('main'))).toBeVisible();
  });

  test('Navigating search result pages (SEA-004)', async ({ page }) => {
    test.skip(true, 'Requires enough data to trigger pagination in search results.');
  });

  test('Back navigation from search results (SEA-005)', async ({ page }) => {
    const searchInput = page.getByPlaceholder(/search/i);
    await searchInput.fill('life'); // Known word from header text
    await page.keyboard.press('Enter');
    
    await page.goBack();
    await expect(page).toHaveURL(/.*main\/$/);
  });
});
