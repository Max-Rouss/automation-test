import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://formateur-plus.vitrine.recursyve.dev/');
  await page.getByPlaceholder('Search').press('Tab');
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').press('Tab');
  await page.getByRole('button', { name: 'Are you a company?' }).press('Tab');
  await page.getByRole('button', { name: 'My space' }).press('Tab');
  await page.getByRole('button', { name: 'All' }).press('Tab');
  await page.getByRole('button', { name: 'Education' }).press('Tab');
  await page.getByRole('button', { name: 'Office' }).press('Tab');
  await page.getByRole('button', { name: 'On demand courses' }).press('Tab');
  await page.getByRole('button', { name: 'Development package' }).press('Tab');
  await page.getByRole('button', { name: 'Discover the package' }).press('Tab');
  await page.getByRole('link', { name: 'Test your digital skills' }).press('Tab');
  //await page.getByRole('button', :""

});