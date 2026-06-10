# Plano de Testes

## Objetivo

Validar a qualidade funcional, de integração, automação E2E e performance dos sistemas utilizados no laboratório de QA Automation.

## Sistemas em teste

| Sistema | Finalidade | Ferramenta principal |
|---|---|---|
| ServeRest | API de loja virtual para estudo | Postman, Newman e k6 |
| BugBank | Aplicação web bancária para prática de testes | Playwright |

## Escopo

- Testes de API;
- Testes funcionais;
- Testes negativos;
- Testes de autenticação;
- Testes de autorização;
- Testes E2E;
- Testes de regressão;
- Testes de performance.

## Fora de escopo

- Testes de segurança ofensiva;
- Testes de acessibilidade completos;
- Testes em ambiente produtivo real;
- Testes com dados reais de usuários.

## Tipos de teste

- API testing;
- Functional testing;
- End-to-end testing;
- Regression testing;
- Smoke testing;
- Load testing;
- Stress testing;
- Spike testing;
- Soak testing.

## Critérios de entrada

- ServeRest disponível localmente;
- Dependências instaladas;
- Ambientes configurados;
- Massa dinâmica definida;
- Browser engines instalados para Playwright.

## Critérios de saída

- Collections executadas com sucesso;
- Testes E2E executados;
- Relatórios gerados;
- Bugs documentados;
- Evidências registradas;
- Métricas de performance analisadas.

## Riscos

| Risco | Impacto | Mitigação |
|---|---|---|
| Dados públicos da API serem alterados | Alto | Usar ServeRest local |
| Seletores do BugBank mudarem | Médio | Centralizar seletores em Page Objects |
| Testes flakies | Médio | Evitar `waitForTimeout` e usar asserts web-first |
| Ambiente local inconsistente | Médio | Documentar setup e dependências |

## Ferramentas

- Postman;
- Newman;
- Playwright;
- k6;
- Node.js;
- GitHub Actions.
