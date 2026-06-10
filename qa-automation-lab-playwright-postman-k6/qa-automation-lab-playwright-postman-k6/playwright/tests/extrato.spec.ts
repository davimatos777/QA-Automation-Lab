import { test } from '../fixtures/app.fixture';
import { gerarDescricaoTransferencia, gerarUsuario } from '../utils/dataFactory';

test.describe('Extrato', () => {
  test('CT-029 - Deve validar tela de extrato visível', async ({ cadastroPage, loginPage, homePage, extratoPage }) => {
    const usuario = gerarUsuario();
    await cadastroPage.cadastrarUsuario(usuario);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(usuario.email, usuario.senha);
    await homePage.acessarExtrato();
    await extratoPage.validarExtratoVisivel();
  });

  test('CT-030 - Deve validar transferência no extrato', async ({ cadastroPage, loginPage, homePage, transferenciaPage, extratoPage }) => {
    const origem = gerarUsuario({ criarComSaldo: true });
    const destino = gerarUsuario({ criarComSaldo: true });
    const contaDestino = await cadastroPage.cadastrarUsuario(destino);
    const descricao = gerarDescricaoTransferencia();

    await loginPage.acessarLogin();
    await cadastroPage.cadastrarUsuario(origem);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(origem.email, origem.senha);
    await homePage.acessarTransferencia();
    await transferenciaPage.transferir(contaDestino, '10', descricao);
    await transferenciaPage.validarTransferenciaComSucesso();
    await homePage.acessarExtrato();
    await extratoPage.validarExtratoVisivel();
  });

  test('CT-031 - Deve validar descrição da transferência no extrato', async ({ cadastroPage, loginPage, homePage, transferenciaPage, extratoPage }) => {
    const origem = gerarUsuario({ criarComSaldo: true });
    const destino = gerarUsuario({ criarComSaldo: true });
    const contaDestino = await cadastroPage.cadastrarUsuario(destino);
    const descricao = gerarDescricaoTransferencia();

    await loginPage.acessarLogin();
    await cadastroPage.cadastrarUsuario(origem);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(origem.email, origem.senha);
    await homePage.acessarTransferencia();
    await transferenciaPage.transferir(contaDestino, '10', descricao);
    await transferenciaPage.validarTransferenciaComSucesso();
    await homePage.acessarExtrato();
    await extratoPage.validarDescricaoNoExtrato(descricao);
  });

  test('CT-032 - Deve validar valor no extrato', async ({ cadastroPage, loginPage, homePage, transferenciaPage, extratoPage }) => {
    const origem = gerarUsuario({ criarComSaldo: true });
    const destino = gerarUsuario({ criarComSaldo: true });
    const contaDestino = await cadastroPage.cadastrarUsuario(destino);

    await loginPage.acessarLogin();
    await cadastroPage.cadastrarUsuario(origem);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(origem.email, origem.senha);
    await homePage.acessarTransferencia();
    await transferenciaPage.transferir(contaDestino, '10', 'Valor no extrato');
    await transferenciaPage.validarTransferenciaComSucesso();
    await homePage.acessarExtrato();
    await extratoPage.validarExtratoVisivel();
  });

  test('CT-033 - Deve validar saldo após operação', async ({ cadastroPage, loginPage, homePage }) => {
    const usuario = gerarUsuario({ criarComSaldo: true });
    await cadastroPage.cadastrarUsuario(usuario);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(usuario.email, usuario.senha);
    await homePage.validarSaldoVisivel();
  });
});
