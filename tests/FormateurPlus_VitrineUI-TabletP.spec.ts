import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://formateur-plus.vitrine.recursyve.dev/');
  await page.setViewportSize({ width: 1024, height: 1080 });
  await page.pause();
  
  await page.getByRole('button').nth(0).click();

  /*
  locator.click() ensures 
  - that locator resolves to exactly one element
  - element is Visible
  - element is Stable, as in not animating or completed animation
  - element Receives Events, as in not obscured by other elements
  - element is Enabled
  */

  //Find and check clickable locators in hamburger menu
  await page.getByRole('textbox', { name: 'Search' }).nth(0).press('Tab');
  await page.getByRole('textbox', { name: 'Search' }).nth(0).click({trial: true});

  await page.getByRole('button').nth(5).press('Tab');
  await page.getByRole('button').nth(5).click();
  await expect(page.getByText('Content')).toBeVisible(); //flake possible

  await page.getByRole('button').nth(6).press('Tab');
  await page.getByRole('button').nth(6).click();
 // await expect(page.getByText('Content')).toBeVisible(); //falke possible

  await page.getByRole('button', { name: 'My space' }).press('Tab');
  await page.getByRole('button', { name: 'My space' }).click({trial: true});

  await page.getByRole('button', { name: 'Are you a company?' }).press('Tab');
  await page.getByRole('button', { name: 'Are you a company?' }).click({trial: true});

  await page.getByRole('heading', { name: 'logo' }).getByRole('button').click();

  await page.pause();
});