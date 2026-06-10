# Estratégia de Automação

## Objetivo

Criar uma suíte técnica que demonstre domínio em três camadas importantes de qualidade de software:

1. API Testing;
2. E2E Testing;
3. Performance Testing.

## Estratégia Postman

A automação de API foi organizada por recurso: usuários, login, produtos, carrinhos, fluxo E2E, segurança e limpeza de massa.

Boas práticas aplicadas:

- Massa dinâmica por script;
- Encadeamento de requests;
- Variáveis de ambiente;
- Validação de status code;
- Validação de contrato básico;
- Validação de regras de negócio;
- Validação de tempo de resposta;
- Execução por Newman.

## Estratégia Playwright

A automação E2E foi estruturada com Page Object Model para reduzir duplicidade, centralizar seletores e facilitar manutenção.

Boas práticas aplicadas:

- Testes independentes;
- Dados dinâmicos;
- Fixtures;
- Page Objects;
- Assertions web-first;
- Trace, vídeo e screenshot em falha;
- Execução multi-browser.

## Estratégia k6

Os testes de performance foram separados por objetivo:

- Smoke: validar disponibilidade básica;
- Load: validar carga esperada;
- Stress: encontrar limite;
- Spike: validar picos;
- Soak: validar estabilidade;
- E2E Flow: validar fluxo de negócio sob carga.

Boas práticas aplicadas:

- Checks;
- Thresholds;
- Massa dinâmica;
- Autenticação;
- Setup;
- Métricas p95/p99;
- Análise de falhas.
