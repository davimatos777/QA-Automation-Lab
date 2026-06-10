import { test } from '../fixtures/app.fixture';
import { gerarUsuario } from '../utils/dataFactory';

test.describe('Home e conta', () => {
  test('CT-014 - Deve validar usuário logado', async ({ cadastroPage, loginPage, homePage }) => {
    const usuario = gerarUsuario();
    await cadastroPage.cadastrarUsuario(usuario);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(usuario.email, usuario.senha);
    await homePage.validarUsuarioLogado();
  });

  test('CT-015 - Deve validar saldo visível em conta com saldo', async ({ cadastroPage, loginPage, homePage }) => {
    const usuario = gerarUsuario({ criarComSaldo: true });
    await cadastroPage.cadastrarUsuario(usuario);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(usuario.email, usuario.senha);
    await homePage.validarSaldoVisivel();
  });

  test('CT-016 - Deve validar saldo visível em conta sem saldo', async ({ cadastroPage, loginPage, homePage }) => {
    const usuario = gerarUsuario({ criarComSaldo: false });
    await cadastroPage.cadastrarUsuario(usuario);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(usuario.email, usuario.senha);
    await homePage.validarSaldoVisivel();
  });

  test('CT-017 - Deve validar número da conta visível', async ({ cadastroPage, loginPage, homePage }) => {
    const usuario = gerarUsuario();
    await cadastroPage.cadastrarUsuario(usuario);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(usuario.email, usuario.senha);
    await homePage.validarNumeroContaVisivel();
  });

  test('CT-018 - Deve navegar para transferência', async ({ cadastroPage, loginPage, homePage, page }) => {
    const usuario = gerarUsuario();
    await cadastroPage.cadastrarUsuario(usuario);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(usuario.email, usuario.senha);
    await homePage.acessarTransferencia();
    await page.getByText(/transferir|transferência/i).isVisible();
  });

  test('CT-019 - Deve navegar para extrato', async ({ cadastroPage, loginPage, homePage, extratoPage }) => {
    const usuario = gerarUsuario();
    await cadastroPage.cadastrarUsuario(usuario);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(usuario.email, usuario.senha);
    await homePage.acessarExtrato();
    await extratoPage.validarExtratoVisivel();
  });
});
