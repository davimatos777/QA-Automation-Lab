import http from 'k6/http';
import { sleep } from 'k6';
import { checkJsonResponse, checkSuccessStatus } from '../utils/checks.js';
import { createUser, login, authHeaders } from '../utils/auth.js';
import { createProductPayload } from '../utils/dataFactory.js';

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';

export const options = {
  vus: 10,
  duration: '1m',
  thresholds: {
    http_req_failed: ['rate<0.02'],
    http_req_duration: ['p(95)<1000', 'p(99)<2000'],
    checks: ['rate>0.95'],
  },
};

export default function () {
  const admin = createUser(BASE_URL, 'true');
  const tokenAdmin = login(BASE_URL, admin.email, admin.password);

  const product = http.post(`${BASE_URL}/produtos`, JSON.stringify(createProductPayload()), {
    ...authHeaders(tokenAdmin),
    tags: { name: 'E2E - Criar produto' },
  });
  checkJsonResponse(product, 201);

  const user = createUser(BASE_URL, 'false');
  const tokenUser = login(BASE_URL, user.email, user.password);

  const listProducts = http.get(`${BASE_URL}/produtos`, {
    tags: { name: 'E2E - Listar produtos' },
  });
  checkJsonResponse(listProducts, 200);

  const cartPayload = {
    produtos: [
      {
        idProduto: product.json('_id'),
        quantidade: 1,
      },
    ],
  };

  const cart = http.post(`${BASE_URL}/carrinhos`, JSON.stringify(cartPayload), {
    ...authHeaders(tokenUser),
    tags: { name: 'E2E - Criar carrinho' },
  });
  checkJsonResponse(cart, 201);

  const checkout = http.del(`${BASE_URL}/carrinhos/concluir-compra`, null, {
    ...authHeaders(tokenUser),
    tags: { name: 'E2E - Concluir compra' },
  });
  checkSuccessStatus(checkout);

  sleep(1);
}
