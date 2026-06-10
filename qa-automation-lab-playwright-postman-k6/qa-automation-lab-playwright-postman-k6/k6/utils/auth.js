import http from 'k6/http';
import { checkJsonResponse } from './checks.js';
import { createUserPayload } from './dataFactory.js';

export function createUser(baseUrl, administrador = 'false') {
  const payload = createUserPayload(administrador);
  const response = http.post(`${baseUrl}/usuarios`, JSON.stringify(payload), {
    headers: { 'Content-Type': 'application/json' },
    tags: { name: 'POST /usuarios' },
  });

  checkJsonResponse(response, 201);

  return {
    ...payload,
    id: response.json('_id'),
  };
}

export function login(baseUrl, email, password) {
  const response = http.post(`${baseUrl}/login`, JSON.stringify({ email, password }), {
    headers: { 'Content-Type': 'application/json' },
    tags: { name: 'POST /login' },
  });

  checkJsonResponse(response, 200);
  return response.json('authorization');
}

export function authHeaders(token) {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };
}
