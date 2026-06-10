import { test } from '../fixtures/app.fixture';
import { contaInexistente, contaSemDigito, contaSemNumero } from '../fixtures/conta.fixture';
import { gerarDescricaoTransferencia, gerarUsuario, gerarValorTransferencia } from '../utils/dataFactory';

test.describe('Transferência', () => {
  test('CT-020 - Deve transferir valor válido para conta existente', async ({ cadastroPage, loginPage, homePage, transferenciaPage }) => {
    const origem = gerarUsuario({ criarComSaldo: true });
    const destino = gerarUsuario({ criarComSaldo: true });
    const contaDestino = await cadastroPage.cadastrarUsuario(destino);

    await loginPage.acessarLogin();
    await cadastroPage.cadastrarUsuario(origem);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(origem.email, origem.senha);
    await homePage.acessarTransferencia();
    await transferenciaPage.transferir(contaDestino, gerarValorTransferencia(), gerarDescricaoTransferencia());
    await transferenciaPage.validarTransferenciaComSucesso();
  });

  test('CT-021 - Deve transferir valor com descrição', async ({ cadastroPage, loginPage, homePage, transferenciaPage }) => {
    const origem = gerarUsuario({ criarComSaldo: true });
    const destino = gerarUsuario({ criarComSaldo: true });
    const contaDestino = await cadastroPage.cadastrarUsuario(destino);
    const descricao = gerarDescricaoTransferencia();

    await loginPage.acessarLogin();
    await cadastroPage.cadastrarUsuario(origem);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(origem.email, origem.senha);
    await homePage.acessarTransferencia();
    await transferenciaPage.transferir(contaDestino, '50', descricao);
    await transferenciaPage.validarTransferenciaComSucesso();
  });

  test('CT-022 - Deve impedir transferência para conta inexistente', async ({ cadastroPage, loginPage, homePage, transferenciaPage }) => {
    const origem = gerarUsuario({ criarComSaldo: true });
    await cadastroPage.cadastrarUsuario(origem);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(origem.email, origem.senha);
    await homePage.acessarTransferencia();
    await transferenciaPage.transferir(contaInexistente(), '100', 'Conta inexistente');
    await transferenciaPage.validarErroTransferencia();
  });

  test('CT-023 - Deve impedir transferência com valor zerado', async ({ cadastroPage, loginPage, homePage, transferenciaPage }) => {
    const origem = gerarUsuario({ criarComSaldo: true });
    const destino = gerarUsuario({ criarComSaldo: true });
    const contaDestino = await cadastroPage.cadastrarUsuario(destino);
    await loginPage.acessarLogin();
    await cadastroPage.cadastrarUsuario(origem);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(origem.email, origem.senha);
    await homePage.acessarTransferencia();
    await transferenciaPage.transferir(contaDestino, '0', 'Valor zerado');
    await transferenciaPage.validarErroTransferencia();
  });

  test('CT-024 - Deve impedir transferência com valor negativo', async ({ cadastroPage, loginPage, homePage, transferenciaPage }) => {
    const origem = gerarUsuario({ criarComSaldo: true });
    const destino = gerarUsuario({ criarComSaldo: true });
    const contaDestino = await cadastroPage.cadastrarUsuario(destino);
    await loginPage.acessarLogin();
    await cadastroPage.cadastrarUsuario(origem);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(origem.email, origem.senha);
    await homePage.acessarTransferencia();
    await transferenciaPage.transferir(contaDestino, '-100', 'Valor negativo');
    await transferenciaPage.validarErroTransferencia();
  });

  test('CT-025 - Deve impedir transferência sem número da conta', async ({ cadastroPage, loginPage, homePage, transferenciaPage }) => {
    const origem = gerarUsuario({ criarComSaldo: true });
    await cadastroPage.cadastrarUsuario(origem);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(origem.email, origem.senha);
    await homePage.acessarTransferencia();
    await transferenciaPage.transferir(contaSemNumero(), '100', 'Sem número');
    await transferenciaPage.validarErroTransferencia();
  });

  test('CT-026 - Deve impedir transferência sem dígito', async ({ cadastroPage, loginPage, homePage, transferenciaPage }) => {
    const origem = gerarUsuario({ criarComSaldo: true });
    await cadastroPage.cadastrarUsuario(origem);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(origem.email, origem.senha);
    await homePage.acessarTransferencia();
    await transferenciaPage.transferir(contaSemDigito(), '100', 'Sem dígito');
    await transferenciaPage.validarErroTransferencia();
  });

  test('CT-027 - Deve impedir transferência sem valor', async ({ cadastroPage, loginPage, homePage, transferenciaPage }) => {
    const origem = gerarUsuario({ criarComSaldo: true });
    const destino = gerarUsuario({ criarComSaldo: true });
    const contaDestino = await cadastroPage.cadastrarUsuario(destino);
    await loginPage.acessarLogin();
    await cadastroPage.cadastrarUsuario(origem);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(origem.email, origem.senha);
    await homePage.acessarTransferencia();
    await transferenciaPage.transferir(contaDestino, '', 'Sem valor');
    await transferenciaPage.validarErroTransferencia();
  });

  test('CT-028 - Deve validar mensagem de sucesso após transferência', async ({ cadastroPage, loginPage, homePage, transferenciaPage }) => {
    const origem = gerarUsuario({ criarComSaldo: true });
    const destino = gerarUsuario({ criarComSaldo: true });
    const contaDestino = await cadastroPage.cadastrarUsuario(destino);
    await loginPage.acessarLogin();
    await cadastroPage.cadastrarUsuario(origem);
    await loginPage.acessarLogin();
    await loginPage.realizarLogin(origem.email, origem.senha);
    await homePage.acessarTransferencia();
    await transferenciaPage.transferir(contaDestino, '25', 'Sucesso');
    await transferenciaPage.validarTransferenciaComSucesso();
  });
});
