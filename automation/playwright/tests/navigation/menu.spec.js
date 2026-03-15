// Test IDs: NAV-001, NAV-002, NAV-003, NAV-004
const { test, expect } = require('@playwright/test');

test.describe('Navigation & Menu', () => {
  test.beforeEach(async ({ page }) => {
    // Using relative path to correctly resolve from subpath baseURL
    await page.goto('./');
  });

  // Helper function to reliably open the menu if it's hidden/collapsed
  const tryOpenMenu = async (page) => {
    // 1. Try common menu toggle buttons (by role or text)
    const menuToggle = page.getByRole('link', { name: /menu/i }).first();
    if (await menuToggle.isVisible()) {
      await menuToggle.click();
      return;
    }
    
    // 2. Fallback: try hovering or clicking any element that looks like a menu (top-left/right icon)
    const possibleMenuIcon = page.locator('nav i, nav .fa-bars, nav .hamburger, .menu-icon').first();
    if (await possibleMenuIcon.isVisible()) {
      await possibleMenuIcon.click();
      return;
    }
  };

  test('Open the main menu (NAV-001)', async ({ page }) => {
    await tryOpenMenu(page);
    
    // Confirm common menu links (Login or Home) are now visible
    const loginLink = page.getByRole('link', { name: /login/i }).first();
    const homeLink = page.getByRole('link', { name: /home/i }).first();
    
    await expect(loginLink.or(homeLink)).toBeVisible();
  });

  test('Navigate to Home from the menu (NAV-002)', async ({ page }) => {
    await tryOpenMenu(page);
    
    const homeLink = page.getByRole('link', { name: 'Home' }).first();
    await homeLink.click();
    
    // Check if the URL contains "main", which is the base path from config
    await expect(page).toHaveURL(/.*main\/$/);
  });

  test('Navigate to Login from the menu (NAV-003)', async ({ page }) => {
    await tryOpenMenu(page);
    
    const loginLink = page.getByRole('link', { name: /login/i }).first();
    await loginLink.click();
    
    // Check if URL changes to include login
    await expect(page).toHaveURL(/.*login/i);
  });

  test('Navigate back to gallery from an auth-related view (NAV-004)', async ({ page }) => {
    // Start from login view (using hash routing)
    await page.goto('./#/login');
    
    await tryOpenMenu(page);
    const homeLink = page.getByRole('link', { name: 'Home' }).first();
    await homeLink.click();
    
    await expect(page).toHaveURL(/.*main\/$/);
  });
});
