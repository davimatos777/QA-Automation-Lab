import { stressOptions } from '../scenarios/stress.options.js';
export const options = stressOptions;

import http from 'k6/http';
import { sleep } from 'k6';
import { checkJsonResponse, checkSuccessStatus } from '../utils/checks.js';
import { createUser, login, authHeaders } from '../utils/auth.js';
import { createProductPayload } from '../utils/dataFactory.js';

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';

export function setup() {
  const admin = createUser(BASE_URL, 'true');
  const tokenAdmin = login(BASE_URL, admin.email, admin.password);

  const productResponse = http.post(`${BASE_URL}/produtos`, JSON.stringify(createProductPayload()), {
    ...authHeaders(tokenAdmin),
    tags: { name: 'POST /produtos' },
  });

  checkJsonResponse(productResponse, 201);

  return {
    productId: productResponse.json('_id'),
  };
}

export default function (data) {
  const user = createUser(BASE_URL, 'false');
  const tokenUser = login(BASE_URL, user.email, user.password);

  const products = http.get(`${BASE_URL}/produtos`, {
    tags: { name: 'GET /produtos' },
  });
  checkJsonResponse(products, 200);

  const cartPayload = {
    produtos: [
      {
        idProduto: data.productId,
        quantidade: 1,
      },
    ],
  };

  const cart = http.post(`${BASE_URL}/carrinhos`, JSON.stringify(cartPayload), {
    ...authHeaders(tokenUser),
    tags: { name: 'POST /carrinhos' },
  });
  checkSuccessStatus(cart);

  const checkout = http.del(`${BASE_URL}/carrinhos/concluir-compra`, null, {
    ...authHeaders(tokenUser),
    tags: { name: 'DELETE /carrinhos/concluir-compra' },
  });
  checkSuccessStatus(checkout);

  sleep(1);
}
