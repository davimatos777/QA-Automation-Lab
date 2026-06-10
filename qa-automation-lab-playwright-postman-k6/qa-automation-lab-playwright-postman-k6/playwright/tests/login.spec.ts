import { test } from '../fixtures/app.fixture';
import { gerarUsuario } from '../utils/dataFactory';

test.describe('Login', () => {
  test('CT-008 - Deve realizar login com usuário válido', async ({ cadastroPage, loginPage, homePage }) => {
    const usuario = gerarUsuario();
    await cadastroPage.cadastrarUsuario(usuario);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(usuario.email, usuario.senha);
    await homePage.validarUsuarioLogado();
  });

  test('CT-009 - Deve impedir login com senha inválida', async ({ cadastroPage, loginPage }) => {
    const usuario = gerarUsuario();
    await cadastroPage.cadastrarUsuario(usuario);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(usuario.email, 'senha-invalida');
    await loginPage.validarErroLogin();
  });

  test('CT-010 - Deve impedir login com e-mail não cadastrado', async ({ loginPage }) => {
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(`nao.cadastrado.${Date.now()}@teste.com`, 'Senha@123');
    await loginPage.validarErroLogin();
  });

  test('CT-011 - Deve impedir login com campos vazios', async ({ loginPage }) => {
    await loginPage.acessarLogin();
    await loginPage.realizarLogin('', '');
    await loginPage.validarErroLogin();
  });

  test('CT-012 - Deve realizar logout com sucesso', async ({ cadastroPage, loginPage, homePage }) => {
    const usuario = gerarUsuario();
    await cadastroPage.cadastrarUsuario(usuario);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(usuario.email, usuario.senha);
    await homePage.logout();
    await loginPage.validarPaginaLogin();
  });

  test('CT-013 - Usuário deslogado não deve acessar área interna diretamente', async ({ page, loginPage }) => {
    await page.goto('/home');
    await loginPage.validarPaginaLogin();
  });
});
