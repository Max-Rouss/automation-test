import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://formateur-plus.vitrine.recursyve.dev/');
    await page.setViewportSize({ width: 1535, height: 1080 });
    await page.pause();
  /*
  locator.click() ensures 
  - that locator resolves to exactly one element
  - element is Visible
  - element is Stable, as in not animating or completed animation
  - element Receives Events, as in not obscured by other elements
  - element is Enabled
  */
    
  //Find and check clickable locators
  await page.getByPlaceholder('Rechercher').press('Tab');
  await page.getByPlaceholder('Rechercher').click({trial: true});

  await page.getByRole('button', { name: 'Tous' }).press('Tab');
  await page.getByRole('button', { name: 'Tous' }).click({trial: true});

  await page.getByRole('button', { name: 'Éducation' }).press('Tab');
  await page.getByRole('button', { name: 'Éducation' }).click({trial: true});

  await page.getByRole('button', { name: 'Bureautique' }).press('Tab');
  await page.getByRole('button', { name: 'Bureautique' }).click({trial: true});

  await page.getByRole('button', { name: 'Cours à la carte' }).press('Tab');
  await page.getByRole('button', { name: 'Cours à la carte' }).click({trial: true});

  await page.getByRole('button', { name: 'Forfait de perfectionnement' }).press('Tab');
  await page.getByRole('button', { name: 'Forfait de perfectionnement' }).click({trial: true});

  await page.getByRole('button', { name: 'Découvrir le forfait' }).press('Tab');
  await page.getByRole('button', { name: 'Découvrir le forfait' }).click({trial: true});

  await page.getByRole('link', { name: 'Testez vos compétences numé' }).press('Tab');
  await page.getByRole('link', { name: 'Testez vos compétences numé' }).click({trial: true});
  
    //Find and check clickable locators in hamburger menu
    await page.getByRole('button').nth(0).click();
    await page.getByRole('textbox', { name: 'Recherche' }).nth(1).press('Tab');
    await page.getByRole('textbox', { name: 'Recherche' }).nth(1).click({trial: true});
  
    await page.getByRole('button').nth(8).press('Tab');
    await page.getByRole('button').nth(8).click();
    await expect(page.getByText('Content')).toBeVisible(); //flake possible
  
    await page.getByRole('button').nth(9).press('Tab');
    await page.getByRole('button').nth(9).click();
   // await expect(page.getByText('Content')).toBeVisible(); //flake possible
  
    await page.getByRole('button', { name: 'Mon espace' }).press('Tab');
    await page.getByRole('button', { name: 'Mon espace' }).click({trial: true});
  
    await page.getByRole('button', { name: 'Vous êtes une entreprise?' }).press('Tab');
    await page.getByRole('button', { name: 'Vous êtes une entreprise?' }).click({trial: true});
  
    await page.getByRole('heading', { name: 'logo' }).getByRole('button').click();
    
    await page.close()

});