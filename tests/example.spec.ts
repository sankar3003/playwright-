import { test } from '@playwright/test';
import Login from "../pages/login"

test('has title', async ({ page,baseURL}) => {
  let Logind = new Login(page)
  await page.goto(`${baseURL}/index.php?route=common/home`);
 await Logind.doLogin()

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
