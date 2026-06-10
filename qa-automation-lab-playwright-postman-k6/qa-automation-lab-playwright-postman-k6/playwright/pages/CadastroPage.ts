import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Conta, extrairConta, Usuario } from '../utils/dataFactory';

export class CadastroPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async abrirFormularioCadastro(): Promise<void> {
    await this.page.goto('/');
    await this.page.getByText('Registrar', { exact: true }).click();
  }

  async preencherFormulario(usuario: Usuario): Promise<void> {
    const emailInputs = this.page.locator('input[type="email"], input[name="email"]');
    const passwordInputs = this.page.locator('input[type="password"], input[name="password"]');
    const nameInput = this.page.locator('input[name="name"], input[placeholder*="Nome"], input[placeholder*="nome"]').last();

    await emailInputs.last().fill(usuario.email);
    await nameInput.fill(usuario.nome);
    await passwordInputs.nth(1).fill(usuario.senha);
    await passwordInputs.nth(2).fill(usuario.confirmarSenha);

    if (usuario.criarComSaldo) {
      const toggle = this.page.locator('#toggleAddBalance, [for="toggleAddBalance"], text=Criar conta com saldo').first();
      if (await toggle.count()) {
        await toggle.click();
      }
    }
  }

  async confirmarCadastro(): Promise<void> {
    await this.page.getByRole('button', { name: /Cadastrar/i }).click();
  }

  async cadastrarUsuario(usuario: Usuario): Promise<Conta> {
    await this.abrirFormularioCadastro();
    await this.preencherFormulario(usuario);
    await this.confirmarCadastro();
    return await this.validarContaCriadaERetornarConta();
  }

  async validarContaCriadaERetornarConta(): Promise<Conta> {
    const modal = this.page.locator('.styles__ContainerContent-sc-8zteav-1, [role="dialog"], body');
    await expect(this.page.getByText(/criada com sucesso/i)).toBeVisible();
    const texto = await modal.last().innerText();
    return extrairConta(texto);
  }

  async validarErroCampoObrigatorio(): Promise<void> {
    await expect(this.page.getByText(/é campo obrigatório|campo obrigatório|preencha/i)).toBeVisible();
  }

  async validarErroSenhasDiferentes(): Promise<void> {
    await expect(this.page.getByText(/senhas não são iguais|senhas diferentes|não conferem/i)).toBeVisible();
  }
}
