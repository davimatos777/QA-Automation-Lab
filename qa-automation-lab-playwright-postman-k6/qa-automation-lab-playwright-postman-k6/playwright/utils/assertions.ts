import { expect, Page } from '@playwright/test';

export async function esperarTextoVisivel(page: Page, texto: string | RegExp): Promise<void> {
  await expect(page.getByText(texto)).toBeVisible();
}

export async function esperarUrlConter(page: Page, trecho: string): Promise<void> {
  await expect(page).toHaveURL(new RegExp(trecho));
}
