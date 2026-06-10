import { test } from '../fixtures/app.fixture';
import { gerarUsuario } from '../utils/dataFactory';

test.describe('Regressão crítica', () => {
  test('CT-034 - Fluxo crítico: cadastro, login e logout', async ({ cadastroPage, loginPage, homePage }) => {
    const usuario = gerarUsuario();
    await cadastroPage.cadastrarUsuario(usuario);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(usuario.email, usuario.senha);
    await homePage.validarUsuarioLogado();
    await homePage.logout();
    await loginPage.validarPaginaLogin();
  });

  test('CT-035 - Fluxo crítico: cadastro, login e acesso ao extrato', async ({ cadastroPage, loginPage, homePage, extratoPage }) => {
    const usuario = gerarUsuario();
    await cadastroPage.cadastrarUsuario(usuario);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(usuario.email, usuario.senha);
    await homePage.acessarExtrato();
    await extratoPage.validarExtratoVisivel();
  });
});
