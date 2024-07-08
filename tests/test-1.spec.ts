import { test, expect } from '@playwright/test';
import { F } from 'types-ramda';

test('test', async ({ page }) => {
  await page.goto('https://menu.recursyve.dev/');
  await page.getByPlaceholder('Email address').fill('mrousseau+0@recursyve.io');
  await page.getByPlaceholder('Password').fill('123456Ab');
  await page.getByLabel('LOG IN').click();
  await page.locator('div').filter({ hasText: /^Prospects$/ }).click();
  await page.getByRole('button', { name: 'Créer un prospect' }).click();
  await page.locator('#mat-select-value-5').click();
  await page.getByRole('option', { name: 'Français' }).click();
  await page.getByPlaceholder('Restaurant').fill('Test1');
  await page.locator('#mat-select-value-7').click();
  await page.getByRole('option', { name: 'Italian' }).click();
  await page.getByPlaceholder('Rechercher l\'adresse').fill('1235');
  /*
  await page.getByRole('option', { name: '1235 Wilson Avenue North York' }).click(); 
  await page.getByPlaceholder('Prénom').fill('Maxime');
  await page.getByPlaceholder('Nom', { exact: true }).fill('ER');
  await page.getByPlaceholder('exemple@courriel.com').fill('mrousseau+11@recursyve.io');
  await page.getByRole('button', { name: 'Sauvegarder' }).click();
  */
});