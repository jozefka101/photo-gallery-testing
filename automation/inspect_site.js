const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const baseUrl = 'https://demo.baasic.com/angular/starterkit-photo-gallery/main';
  
  console.log('--- LOGIN PAGE ---');
  await page.goto(baseUrl + '#/login');
  await page.waitForTimeout(2000);
  let inputs = await page.evaluate(() => Array.from(document.querySelectorAll('input')).map(i => ({ type: i.type, placeholder: i.placeholder, name: i.name, id: i.id })));
  let buttons = await page.evaluate(() => Array.from(document.querySelectorAll('button')).map(b => b.innerText));
  let links = await page.evaluate(() => Array.from(document.querySelectorAll('a')).map(l => l.innerText));
  console.log('Inputs:', inputs);
  console.log('Buttons:', buttons);
  console.log('Links:', links);

  console.log('\n--- REGISTER PAGE ---');
  await page.goto(baseUrl + '#/register');
  await page.waitForTimeout(2000);
  inputs = await page.evaluate(() => Array.from(document.querySelectorAll('input')).map(i => ({ type: i.type, placeholder: i.placeholder, name: i.name, id: i.id })));
  buttons = await page.evaluate(() => Array.from(document.querySelectorAll('button')).map(b => b.innerText));
  console.log('Inputs:', inputs);
  console.log('Buttons:', buttons);

  console.log('\n--- PASSWORD RECOVERY PAGE ---');
  await page.goto(baseUrl + '#/password-recovery');
  await page.waitForTimeout(2000);
  inputs = await page.evaluate(() => Array.from(document.querySelectorAll('input')).map(i => ({ type: i.type, placeholder: i.placeholder, name: i.name, id: i.id })));
  buttons = await page.evaluate(() => Array.from(document.querySelectorAll('button')).map(b => b.innerText));
  console.log('Inputs:', inputs);
  console.log('Buttons:', buttons);

  console.log('\n--- MAIN PAGE SEARCH ---');
  await page.goto(baseUrl);
  await page.waitForTimeout(2000);
  buttons = await page.evaluate(() => Array.from(document.querySelectorAll('button')).map(b => b.innerText));
  let icons = await page.evaluate(() => Array.from(document.querySelectorAll('i')).map(i => i.className));
  console.log('Buttons:', buttons);
  console.log('Icons:', icons);
  
  // Try to find search icon and click it
  const searchBtn = page.locator('a, button, i').filter({ hasText: /search/i }).first();
  if (await searchBtn.isVisible()) {
    console.log('Found search button, clicking...');
    await searchBtn.click();
    await page.waitForTimeout(1000);
    const searchInput = await page.evaluate(() => Array.from(document.querySelectorAll('input')).map(i => ({ type: i.type, placeholder: i.placeholder })));
    console.log('Search modal inputs:', searchInput);
  }

  await browser.close();
})();
