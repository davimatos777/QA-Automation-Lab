export type Usuario = {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  criarComSaldo: boolean;
};

export type Conta = {
  numero: string;
  digito: string;
};

export function gerarUsuario(overrides?: Partial<Usuario>): Usuario {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 100000);

  return {
    nome: `Davi QA ${timestamp}`,
    email: `davi.qa.${timestamp}.${random}@teste.com`,
    senha: 'Senha@123',
    confirmarSenha: 'Senha@123',
    criarComSaldo: true,
    ...overrides,
  };
}

export function gerarValorTransferencia(): string {
  return '100';
}

export function gerarDescricaoTransferencia(): string {
  return `Transferência automatizada ${Date.now()}`;
}

export function extrairConta(texto: string): Conta {
  const match = texto.match(/(\d+)[-–](\d+)/);

  if (!match) {
    throw new Error(`Não foi possível extrair conta do texto: ${texto}`);
  }

  return {
    numero: match[1],
    digito: match[2],
  };
}
