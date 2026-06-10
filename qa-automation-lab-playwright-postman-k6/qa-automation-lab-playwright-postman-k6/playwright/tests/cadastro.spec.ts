import { test, expect } from '../fixtures/app.fixture';
import { gerarUsuario } from '../utils/dataFactory';

test.describe('Cadastro de conta', () => {
  test('CT-001 - Deve cadastrar conta com saldo', async ({ cadastroPage }) => {
    const usuario = gerarUsuario({ criarComSaldo: true });
    const conta = await cadastroPage.cadastrarUsuario(usuario);
    expect(conta.numero).toBeTruthy();
    expect(conta.digito).toBeTruthy();
  });

  test('CT-002 - Deve cadastrar conta sem saldo', async ({ cadastroPage }) => {
    const usuario = gerarUsuario({ criarComSaldo: false });
    const conta = await cadastroPage.cadastrarUsuario(usuario);
    expect(conta.numero).toBeTruthy();
    expect(conta.digito).toBeTruthy();
  });

  test('CT-003 - Deve validar erro ao cadastrar sem nome', async ({ cadastroPage }) => {
    const usuario = gerarUsuario({ nome: '' });
    await cadastroPage.abrirFormularioCadastro();
    await cadastroPage.preencherFormulario(usuario);
    await cadastroPage.confirmarCadastro();
    await cadastroPage.validarErroCampoObrigatorio();
  });

  test('CT-004 - Deve validar erro ao cadastrar sem e-mail', async ({ cadastroPage }) => {
    const usuario = gerarUsuario({ email: '' });
    await cadastroPage.abrirFormularioCadastro();
    await cadastroPage.preencherFormulario(usuario);
    await cadastroPage.confirmarCadastro();
    await cadastroPage.validarErroCampoObrigatorio();
  });

  test('CT-005 - Deve validar erro ao cadastrar sem senha', async ({ cadastroPage }) => {
    const usuario = gerarUsuario({ senha: '', confirmarSenha: '' });
    await cadastroPage.abrirFormularioCadastro();
    await cadastroPage.preencherFormulario(usuario);
    await cadastroPage.confirmarCadastro();
    await cadastroPage.validarErroCampoObrigatorio();
  });

  test('CT-006 - Deve validar erro quando senha e confirmação forem diferentes', async ({ cadastroPage }) => {
    const usuario = gerarUsuario({ confirmarSenha: 'OutraSenha@123' });
    await cadastroPage.abrirFormularioCadastro();
    await cadastroPage.preencherFormulario(usuario);
    await cadastroPage.confirmarCadastro();
    await cadastroPage.validarErroSenhasDiferentes();
  });

  test('CT-007 - Deve gerar número da conta após cadastro', async ({ cadastroPage }) => {
    const usuario = gerarUsuario();
    const conta = await cadastroPage.cadastrarUsuario(usuario);
    expect(conta.numero).toMatch(/\d+/);
    expect(conta.digito).toMatch(/\d+/);
  });
});
