import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Conta } from '../utils/dataFactory';

export class TransferenciaPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async preencherTransferencia(conta: Conta, valor: string, descricao = ''): Promise<void> {
    await this.page.locator('input[placeholder*="número"], input[placeholder*="conta"], input[name="accountNumber"]').first().fill(conta.numero);
    await this.page.locator('input[placeholder*="dígito"], input[placeholder*="digito"], input[name="digit"]').first().fill(conta.digito);
    await this.page.locator('input[placeholder*="valor"], input[name="transferValue"]').first().fill(valor);

    const descricaoInput = this.page.locator('input[placeholder*="descrição"], input[placeholder*="descricao"], input[name="description"]').first();
    if (await descricaoInput.count()) {
      await descricaoInput.fill(descricao);
    }
  }

  async confirmarTransferencia(): Promise<void> {
    await this.page.getByRole('button', { name: /Transferir agora|Transferir/i }).click();
  }

  async transferir(conta: Conta, valor: string, descricao = ''): Promise<void> {
    await this.preencherTransferencia(conta, valor, descricao);
    await this.confirmarTransferencia();
  }

  async validarTransferenciaComSucesso(): Promise<void> {
    await expect(this.page.getByText(/transferência realizada|sucesso/i)).toBeVisible();
  }

  async validarErroTransferencia(): Promise<void> {
    await expect(this.page.getByText(/inválida|não encontrada|erro|obrigatório|valor/i)).toBeVisible();
  }
}
