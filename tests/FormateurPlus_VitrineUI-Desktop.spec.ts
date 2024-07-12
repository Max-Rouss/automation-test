import { test, expect, type Page } from '@playwright/test';

test('Formateur-Plus', async ({ page }) => {
  await page.goto('https://formateur-plus.vitrine.recursyve.dev/');
  await page.setViewportSize({ width: 1920, height: 1080 });
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

  await page.getByRole('button', { name: 'Vous êtes une entreprise?' }).press('Tab');
  await page.getByRole('button', { name: 'Vous êtes une entreprise?' }).click({trial: true});

  await page.getByRole('button', { name: 'Mon espace' }).press('Tab');
  await page.getByRole('button', { name: 'Mon espace' }).click({trial: true});

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

  //await page.close()
  
});