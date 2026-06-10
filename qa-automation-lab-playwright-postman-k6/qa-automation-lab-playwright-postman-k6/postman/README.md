# Desafio Postman — ServeRest Advanced API Quality Gate

Este desafio valida a API ServeRest com foco em qualidade de API para cenário de entrevista técnica.

## Objetivo

Construir uma collection avançada contendo:

- Testes positivos;
- Testes negativos;
- Autenticação;
- Autorização;
- Contrato básico;
- Massa dinâmica;
- Encadeamento de requests;
- Fluxo E2E;
- Execução por Newman;
- Relatório HTML.

## Como rodar

Suba a ServeRest local:

```bash
npm run serverest
```

Em outro terminal, execute:

```bash
npm run test:postman
```

## Arquivos

```bash
postman/
├── collections/
│   └── ServeRest-Advanced.postman_collection.json
├── environments/
│   └── ServeRest-Local.postman_environment.json
└── reports/
```

## Cobertura

| Módulo | Cobertura |
|---|---|
| Health Check | API online, JSON e tempo de resposta |
| Usuários | Criar, listar, buscar, atualizar, negativos |
| Login | Admin, usuário comum e cenários inválidos |
| Produtos | CRUD, autorização e negativos |
| Carrinhos | Criar, consultar, concluir e negativos |
| Fluxo E2E | Admin → produto → comprador → carrinho → compra |
| Segurança | Token ausente, inválido e perfil sem permissão |
| Limpeza | Remoção de massa criada |

## O que estudar neste desafio

- Como uma variável salva em um request alimenta outro request;
- Diferença entre autenticação e autorização;
- Como criar massa dinâmica;
- Como validar contrato mínimo;
- Como executar collection em linha de comando.

## Critérios de sucesso

- Collection executa via Newman;
- Relatório HTML é gerado;
- Fluxo E2E passa;
- Cenários negativos validam status de erro;
- Tokens e IDs são salvos automaticamente.
