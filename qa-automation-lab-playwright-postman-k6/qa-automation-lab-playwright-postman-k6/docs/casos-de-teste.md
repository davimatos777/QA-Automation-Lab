# Casos de Teste

| ID | Ferramenta | Funcionalidade | Cenário | Pré-condição | Resultado esperado | Prioridade |
|---|---|---|---|---|---|---|
| CT-001 | Postman | Usuários | Criar usuário comum com sucesso | API online | Usuário criado com ID | Alta |
| CT-002 | Postman | Usuários | Criar usuário administrador | API online | Administrador criado com ID | Alta |
| CT-003 | Postman | Login | Login com admin válido | Admin criado | Token retornado | Alta |
| CT-004 | Postman | Produtos | Criar produto com admin | Token admin válido | Produto criado | Alta |
| CT-005 | Postman | Produtos | Criar produto sem token | API online | Acesso negado | Alta |
| CT-006 | Postman | Carrinhos | Criar carrinho com produto válido | Usuário e produto criados | Carrinho criado | Alta |
| CT-007 | Postman | Segurança | Criar produto com usuário comum | Token comum válido | Acesso negado | Alta |
| CT-008 | Playwright | Cadastro | Cadastrar conta com saldo | Site disponível | Conta criada com sucesso | Alta |
| CT-009 | Playwright | Login | Login com usuário válido | Usuário cadastrado | Home exibida | Alta |
| CT-010 | Playwright | Transferência | Transferir para conta válida | Duas contas criadas | Transferência realizada | Alta |
| CT-011 | Playwright | Extrato | Validar transferência no extrato | Transferência realizada | Movimento exibido | Média |
| CT-012 | k6 | Smoke | Validar API sob carga mínima | API local online | Erros abaixo do threshold | Alta |
| CT-013 | k6 | Load | Simular carga esperada | API local online | p95 dentro do threshold | Alta |
| CT-014 | k6 | Stress | Aumentar carga progressivamente | API local online | Identificar degradação | Média |
| CT-015 | k6 | Spike | Gerar pico repentino | API local online | API deve se recuperar | Média |
