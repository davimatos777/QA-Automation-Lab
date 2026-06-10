export function randomId() {
  return `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
}

export function createUserPayload(administrador = 'false') {
  const id = randomId();
  return {
    nome: administrador === 'true' ? `Admin k6 ${id}` : `User k6 ${id}`,
    email: administrador === 'true' ? `admin.k6.${id}@teste.com` : `user.k6.${id}@teste.com`,
    password: 'Senha@123',
    administrador,
  };
}

export function createProductPayload() {
  const id = randomId();
  return {
    nome: `Produto k6 ${id}`,
    preco: 100,
    descricao: `Produto criado via k6 ${id}`,
    quantidade: 1000,
  };
}
