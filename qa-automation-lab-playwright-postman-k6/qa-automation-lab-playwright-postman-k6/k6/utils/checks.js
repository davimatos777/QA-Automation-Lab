import { check } from 'k6';

export function checkJsonResponse(response, expectedStatus = 200) {
  return check(response, {
    [`status ${expectedStatus}`]: (r) => r.status === expectedStatus,
    'resposta é JSON': (r) => String(r.headers['Content-Type']).includes('application/json'),
    'tempo menor que 1000ms': (r) => r.timings.duration < 1000,
  });
}

export function checkSuccessStatus(response) {
  return check(response, {
    'status de sucesso': (r) => [200, 201].includes(r.status),
    'sem erro HTTP': (r) => r.status < 400,
  });
}
