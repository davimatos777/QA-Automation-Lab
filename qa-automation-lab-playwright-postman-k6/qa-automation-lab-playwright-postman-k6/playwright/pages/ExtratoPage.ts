import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ExtratoPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async validarExtratoVisivel(): Promise<void> {
    await expect(this.page.getByText(/extrato|saldo disponível|transação|transferência/i)).toBeVisible();
  }

  async validarDescricaoNoExtrato(descricao: string): Promise<void> {
    await expect(this.page.getByText(descricao)).toBeVisible();
  }

  async validarValorNoExtrato(valor: string): Promise<void> {
    await expect(this.page.getByText(new RegExp(valor))).toBeVisible();
  }
}
