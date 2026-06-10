# Guia de Estudo do Projeto

Use este guia para estudar o projeto antes de divulgar no GitHub.

## 1. Postman

Estude nesta ordem:

1. Environment;
2. Pre-request scripts;
3. Tests com `pm.expect`;
4. Como o token é salvo;
5. Como o ID do usuário/produto/carrinho é reaproveitado;
6. Fluxo E2E;
7. Newman.

Perguntas que você precisa saber responder:

- O que é autenticação?
- O que é autorização?
- Por que usar massa dinâmica?
- O que é contrato básico de API?
- Como rodar uma collection por terminal?

## 2. Playwright

Estude nesta ordem:

1. `playwright.config.ts`;
2. Page Objects;
3. Fixtures;
4. Data factory;
5. Testes por funcionalidade;
6. Trace e relatório.

Perguntas que você precisa saber responder:

- Por que usar Page Object Model?
- O que é teste independente?
- Por que evitar `waitForTimeout`?
- O que é trace viewer?
- Como reduzir teste flaky?

## 3. k6

Estude nesta ordem:

1. Smoke test;
2. Load test;
3. Stress test;
4. Spike test;
5. Soak test;
6. Thresholds;
7. Checks.

Perguntas que você precisa saber responder:

- O que é p95?
- O que significa `http_req_failed`?
- Qual diferença entre load e stress test?
- Por que não rodar teste de carga em ambiente público?
- O que faz um threshold reprovar um teste?
