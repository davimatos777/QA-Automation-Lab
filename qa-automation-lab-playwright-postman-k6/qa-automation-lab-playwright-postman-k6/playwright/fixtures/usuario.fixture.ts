import { test as base } from '@playwright/test';
import { Conta, gerarUsuario, Usuario } from '../utils/dataFactory';
import { CadastroPage } from '../pages/CadastroPage';
import { LoginPage } from '../pages/LoginPage';

export type UsuarioCriado = {
  usuario: Usuario;
  conta: Conta;
};

export const test = base.extend<{
  usuarioCriado: UsuarioCriado;
}>({
  usuarioCriado: async ({ page }, use) => {
    const cadastroPage = new CadastroPage(page);
    const usuario = gerarUsuario({ criarComSaldo: true });
    const conta = await cadastroPage.cadastrarUsuario(usuario);
    await use({ usuario, conta });
  },
});

export async function criarUsuarioViaTela(page: any, criarComSaldo = true): Promise<UsuarioCriado> {
  const cadastroPage = new CadastroPage(page);
  const usuario = gerarUsuario({ criarComSaldo });
  const conta = await cadastroPage.cadastrarUsuario(usuario);
  return { usuario, conta };
}

export async function logarUsuario(page: any, usuario: Usuario): Promise<void> {
  const loginPage = new LoginPage(page);
  await loginPage.acessarLogin();
  await loginPage.realizarLogin(usuario.email, usuario.senha);
}
