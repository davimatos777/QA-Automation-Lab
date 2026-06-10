import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async acessarLogin(): Promise<void> {
    await this.page.goto('/');
  }

  async realizarLogin(email: string, senha: string): Promise<void> {
    await this.page.locator('input[type="email"], input[name="email"]').first().fill(email);
    await this.page.locator('input[type="password"], input[name="password"]').first().fill(senha);
    await this.page.getByRole('button', { name: /Acessar/i }).click();
  }

  async validarLoginComSucesso(): Promise<void> {
    await expect(this.page.getByText(/bem vindo|saldo|transferência|extrato/i)).toBeVisible();
  }

  async validarErroLogin(): Promise<void> {
    await expect(this.page.getByText(/usuário ou senha inválido|inválido|erro|obrigatório/i)).toBeVisible();
  }

  async validarPaginaLogin(): Promise<void> {
    await expect(this.page.getByRole('button', { name: /Acessar/i })).toBeVisible();
  }
}
