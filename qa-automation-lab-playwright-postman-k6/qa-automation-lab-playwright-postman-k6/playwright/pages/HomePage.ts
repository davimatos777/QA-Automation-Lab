import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async validarUsuarioLogado(): Promise<void> {
    await expect(this.page.getByText(/bem vindo|saldo|transferência|extrato/i)).toBeVisible();
  }

  async validarSaldoVisivel(): Promise<void> {
    await expect(this.page.getByText(/saldo/i)).toBeVisible();
  }

  async validarNumeroContaVisivel(): Promise<void> {
    await expect(this.page.getByText(/conta/i)).toBeVisible();
  }

  async acessarTransferencia(): Promise<void> {
    await this.page.getByText(/transferência|transferencia/i).click();
  }

  async acessarExtrato(): Promise<void> {
    await this.page.getByText(/extrato/i).click();
  }

  async logout(): Promise<void> {
    await this.page.getByText(/sair|logout/i).click();
  }
}
