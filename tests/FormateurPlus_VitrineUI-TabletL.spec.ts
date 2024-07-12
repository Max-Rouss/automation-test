import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://formateur-plus.vitrine.recursyve.dev/');
    await page.setViewportSize({ width: 1535, height: 1080 });
    await page.pause();

    await page.getByRole('button').nth(0).click();
  
    //Find and check clickable locators in hamburger menu
    await page.getByRole('textbox', { name: 'Search' }).nth(1).press('Tab');
    await page.getByRole('textbox', { name: 'Search' }).nth(1).click({trial: true});
  
    await page.getByRole('button').nth(8).press('Tab');
    await page.getByRole('button').nth(8).click();
    await expect(page.getByText('Content')).toBeVisible(); //flake possible
  
    await page.getByRole('button').nth(9).press('Tab');
    await page.getByRole('button').nth(9).click();
   // await expect(page.getByText('Content')).toBeVisible(); //flake possible
  
    await page.getByRole('button', { name: 'My space' }).press('Tab');
    await page.getByRole('button', { name: 'My space' }).click({trial: true});
  
    await page.getByRole('button', { name: 'Are you a company?' }).press('Tab');
    await page.getByRole('button', { name: 'Are you a company?' }).click({trial: true});
  
    await page.getByRole('heading', { name: 'logo' }).getByRole('button').click();
  
});