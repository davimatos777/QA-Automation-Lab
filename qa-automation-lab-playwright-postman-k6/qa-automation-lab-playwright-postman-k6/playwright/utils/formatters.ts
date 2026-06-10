export function normalizarMoeda(valor: string): string {
  return valor.replace(/\s/g, '').replace('R$', '').replace(',', '.');
}

export function paraMoedaBR(valor: number): string {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
