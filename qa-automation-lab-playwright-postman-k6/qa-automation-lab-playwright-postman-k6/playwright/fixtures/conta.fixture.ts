import { Conta } from '../utils/dataFactory';

export function contaInexistente(): Conta {
  return {
    numero: '999999',
    digito: '9',
  };
}

export function contaSemNumero(): Conta {
  return {
    numero: '',
    digito: '1',
  };
}

export function contaSemDigito(): Conta {
  return {
    numero: '12345',
    digito: '',
  };
}
