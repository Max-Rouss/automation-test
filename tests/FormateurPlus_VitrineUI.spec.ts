import { test, expect, type Page } from '@playwright/test';

test('test', async ({ page }) => {
  //initial config, responsive layout 1
  await page.goto('https://formateur-plus.vitrine.recursyve.dev/');
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.pause();

  /*locator.click() ensures 
  - that locator resolves to exactly one element
  - element is Visible
  - element is Stable, as in not animating or completed animation
  - element Receives Events, as in not obscured by other elements
  - element is Enabled
  */


  //Find and check clickable locators
  await page.getByPlaceholder('Search').press('Tab');
  await page.getByPlaceholder('Search').click({trial: true});

  await page.getByRole('button', { name: 'Are you a company?' }).press('Tab');
  await page.getByRole('button', { name: 'Are you a company?' }).click({trial: true});

  await page.getByRole('button', { name: 'My space' }).press('Tab');
  await page.getByRole('button', { name: 'My space' }).click({trial: true});

  await page.getByRole('button', { name: 'All' }).press('Tab');
  await page.getByRole('button', { name: 'All' }).click({trial: true});

  await page.getByRole('button', { name: 'Education' }).press('Tab');
  await page.getByRole('button', { name: 'Education' }).click({trial: true});

  await page.getByRole('button', { name: 'Office' }).press('Tab');
  await page.getByRole('button', { name: 'Office' }).click({trial: true});

  await page.getByRole('button', { name: 'On demand courses' }).press('Tab');
  await page.getByRole('button', { name: 'On demand courses' }).click({trial: true});

  await page.getByRole('button', { name: 'Development package' }).press('Tab');
  await page.getByRole('button', { name: 'Development package' }).click({trial: true});

  await page.getByRole('button', { name: 'Discover the package' }).press('Tab');
  await page.getByRole('button', { name: 'Discover the package' }).click({trial: true});

  await page.getByRole('link', { name: 'Test your digital skills' }).press('Tab');
  await page.getByRole('link', { name: 'Test your digital skills' }).click({trial: true});



  //responsive layout 2 (1536px)
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



  //responsive layout 3 (768px)
  await page.setViewportSize({ width: 767, height: 1080 });
  await page.pause();
  await page.getByRole('button').nth(0).click();

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
  //await page.close()
});