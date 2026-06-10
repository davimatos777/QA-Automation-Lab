import { expect, Locator, Page } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  async acessar(path = '/'): Promise<void> {
    await this.page.goto(path);
  }

  protected locator(selector: string): Locator {
    return this.page.locator(selector);
  }

  protected async clicarPorTexto(texto: string | RegExp): Promise<void> {
    await this.page.getByText(texto, { exact: typeof texto === 'string' }).click();
  }

  protected async clicarBotao(nome: string | RegExp): Promise<void> {
    await this.page.getByRole('button', { name: nome }).click();
  }

  protected async validarTextoVisivel(texto: string | RegExp): Promise<void> {
    await expect(this.page.getByText(texto)).toBeVisible();
  }

  protected async preencherPrimeiroDisponivel(selectors: string[], valor: string): Promise<void> {
    for (const selector of selectors) {
      const campo = this.page.locator(selector).first();
      if (await campo.count()) {
        await campo.fill(valor);
        return;
      }
    }

    throw new Error(`Nenhum seletor encontrado: ${selectors.join(', ')}`);
  }
}
