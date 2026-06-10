# Desafio k6 — Performance Quality Gate

Testes de performance para a API ServeRest local.

## Objetivo

Demonstrar domínio em:

- Smoke test;
- Load test;
- Stress test;
- Spike test;
- Soak test;
- Fluxo E2E de performance;
- Checks;
- Thresholds;
- Métricas de performance.

## Como rodar

Suba a ServeRest local:

```bash
npm run serverest
```

Execute:

```bash
npm run k6:smoke
npm run k6:load
npm run k6:stress
npm run k6:spike
npm run k6:soak
npm run k6:e2e
```

Também é possível trocar a URL:

```bash
BASE_URL=http://localhost:3000 k6 run k6/scripts/smoke-test.js
```

## Scripts

| Script | Objetivo |
|---|---|
| smoke-test.js | Validar disponibilidade com baixa carga |
| load-test.js | Simular carga esperada |
| stress-test.js | Aumentar carga até degradação |
| spike-test.js | Simular pico repentino |
| soak-test.js | Validar estabilidade por mais tempo |
| e2e-flow-test.js | Validar fluxo de negócio sob carga |

## Métricas importantes

| Métrica | Significado |
|---|---|
| http_req_duration | Tempo total das requisições HTTP |
| http_req_failed | Taxa de requisições com falha |
| http_reqs | Total de requisições realizadas |
| vus | Usuários virtuais ativos |
| iterations | Quantidade de iterações executadas |
| checks | Taxa de validações aprovadas |
| p(90) | 90% das requisições responderam até esse tempo |
| p(95) | 95% das requisições responderam até esse tempo |
| p(99) | 99% das requisições responderam até esse tempo |

## Como analisar

Exemplo de conclusão técnica:

> Durante o load test, a API manteve p95 abaixo de 800ms e taxa de erro inferior a 2%, atendendo aos thresholds definidos. No stress test, a degradação começou acima de determinado volume de VUs, indicando possível gargalo em criação de usuários/produtos.

## Observação

Não execute testes de carga em APIs públicas sem autorização. Use a ServeRest local.
