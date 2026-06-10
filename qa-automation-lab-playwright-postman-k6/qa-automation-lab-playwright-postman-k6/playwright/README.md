# Desafio Playwright — BugBank E2E Automation Framework

Framework E2E criado com Playwright e TypeScript para automatizar fluxos críticos do BugBank.

## Objetivo

Demonstrar domínio em:

- Playwright;
- TypeScript;
- Page Object Model;
- Fixtures;
- Dados dinâmicos;
- Testes independentes;
- Relatórios e evidências.

## Como instalar

```bash
cd playwright
npm install
npx playwright install
```

## Como executar

```bash
npm test
```

Executar com navegador aberto:

```bash
npm run test:headed
```

Executar em modo UI:

```bash
npm run test:ui
```

Abrir relatório:

```bash
npm run report
```

## Cobertura

| Módulo | Quantidade aproximada |
|---|---:|
| Cadastro | 7 testes |
| Login | 6 testes |
| Home/Conta | 6 testes |
| Transferência | 9 testes |
| Extrato | 5 testes |
| Regressão | 2 testes |

## Observação sobre seletores

O BugBank é uma aplicação pública para prática. Caso algum seletor mude, ajuste apenas os Page Objects em `pages/`.

Esse é um ponto positivo para estudo: em uma entrevista técnica, explique que centralizar seletores em Page Objects reduz custo de manutenção.
