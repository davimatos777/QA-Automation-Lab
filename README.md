# QA Automation Lab — Postman, Playwright e k6

Projeto de portfólio criado para demonstrar domínio prático em **testes de API**, **automação E2E** e **testes de performance**.

Este repositório foi estruturado como um laboratório técnico no estilo de desafio de entrevista para QA Automation, dividido em três frentes:

1. **Postman + Newman** — testes de API na ServeRest;
2. **Playwright + TypeScript** — automação E2E no BugBank;
3. **k6** — testes de performance na ServeRest.

> Observação importante: este projeto foi criado como base de estudo e portfólio. Antes de publicar como projeto final, execute os testes, ajuste seletores quando necessário, registre evidências reais e personalize a documentação com seus aprendizados.

---

## Objetivos do projeto

Demonstrar capacidade para:

- Criar collections profissionais no Postman;
- Trabalhar com variáveis de ambiente e massa dinâmica;
- Validar autenticação, autorização, contratos e regras de negócio;
- Executar testes de API via linha de comando com Newman;
- Criar framework E2E com Playwright e TypeScript;
- Aplicar Page Object Model, fixtures e dados dinâmicos;
- Configurar trace, screenshot, vídeo e relatório HTML;
- Criar testes de performance com k6;
- Usar checks, thresholds, cenários de carga e análise de métricas;
- Documentar plano de testes, bugs e evidências.

---

## Tecnologias utilizadas

- Postman
- Newman
- Playwright
- TypeScript
- k6
- JavaScript
- Node.js
- ServeRest
- BugBank
- GitHub Actions

---

## Estrutura do projeto

```bash
qa-automation-lab-playwright-postman-k6/
│
├── postman/
│   ├── collections/
│   ├── environments/
│   ├── reports/
│   └── README.md
│
├── playwright/
│   ├── tests/
│   ├── pages/
│   ├── fixtures/
│   ├── utils/
│   ├── reports/
│   └── README.md
│
├── k6/
│   ├── scripts/
│   ├── scenarios/
│   ├── utils/
│   ├── reports/
│   └── README.md
│
├── docs/
│   ├── plano-de-testes.md
│   ├── casos-de-teste.md
│   ├── estrategia-de-automacao.md
│   ├── bugs-encontrados.md
│   └── evidencias.md
│
└── README.md
```

---

## Pré-requisitos

Instale:

- Node.js LTS;
- Postman;
- Newman;
- k6;
- Git.

Instalação rápida das dependências Node:

```bash
npm install
```

---

## Subindo a API ServeRest local

Recomendado para Postman e k6:

```bash
npm run serverest
```

A API ficará disponível em:

```bash
http://localhost:3000
```

---

## Executar testes Postman com Newman

```bash
npm run test:postman
```

Relatório HTML:

```bash
postman/reports/newman-report.html
```

---

## Executar testes Playwright

```bash
cd playwright
npm install
npx playwright install
npm test
```

Relatório HTML:

```bash
npm run report
```

---

## Executar testes k6

Com a ServeRest local rodando:

```bash
npm run k6:smoke
npm run k6:load
npm run k6:stress
npm run k6:spike
npm run k6:soak
npm run k6:e2e
```

---

## Desafio 1 — Postman

A collection cobre:

- Health check;
- Usuários;
- Login;
- Produtos;
- Carrinhos;
- Fluxo E2E de API;
- Testes negativos;
- Segurança básica;
- Limpeza de massa.

Principais técnicas usadas:

- Variáveis de ambiente;
- Pre-request scripts;
- Tests com `pm.expect`;
- Massa de dados dinâmica;
- Encadeamento de requests;
- Token JWT/Bearer;
- Execução via Newman;
- Relatório HTML.

---

## Desafio 2 — Playwright

A suíte E2E cobre:

- Cadastro;
- Login;
- Home/conta;
- Transferência;
- Extrato;
- Regressão crítica.

Principais técnicas usadas:

- TypeScript;
- Page Object Model;
- Fixtures customizadas;
- Massa dinâmica;
- Testes independentes;
- Trace em falha;
- Screenshot em falha;
- Vídeo em falha;
- Relatório HTML;
- Execução em Chromium, Firefox e WebKit.

---

## Desafio 3 — k6

Scripts incluídos:

- Smoke test;
- Load test;
- Stress test;
- Spike test;
- Soak test;
- Fluxo E2E de performance.

Principais técnicas usadas:

- Checks;
- Thresholds;
- Massa dinâmica;
- Autenticação;
- Cenários progressivos;
- Análise de métricas.

---

## Como apresentar em entrevista

> Desenvolvi um laboratório de QA Automation com três frentes: testes de API com Postman/Newman, automação E2E com Playwright/TypeScript e testes de performance com k6. No Postman, validei fluxos positivos, negativos, autenticação, autorização, contratos básicos e fluxo E2E. No Playwright, estruturei um framework com Page Object Model, fixtures, massa dinâmica e evidências. No k6, criei testes smoke, load, stress, spike, soak e um fluxo E2E com thresholds e checks.

---

## Melhorias futuras

- Adicionar relatório Allure;
- Integrar k6 com Grafana Cloud;
- Criar testes visuais no Playwright;
- Adicionar contract testing com schema JSON;
- Criar pipeline completa com execução sequencial dos três desafios;
- Criar dashboard com resultados históricos.
