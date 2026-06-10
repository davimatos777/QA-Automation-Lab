# Bugs Encontrados

> Preencha este arquivo com evidências reais após executar os testes. Abaixo estão exemplos de como documentar.

## Bug 001 — Mensagem de erro genérica em login inválido

### Ambiente

BugBank Web

### Severidade

Média

### Prioridade

Alta

### Passos para reproduzir

1. Acessar o BugBank;
2. Informar e-mail inválido;
3. Informar senha inválida;
4. Clicar em acessar.

### Resultado esperado

Sistema deve informar de maneira clara que as credenciais são inválidas.

### Resultado obtido

Sistema apresenta mensagem genérica ou pouco orientativa.

### Evidência

Adicionar print ou vídeo em `docs/evidencias.md`.

---

## Bug 002 — Validação insuficiente em campo de transferência

### Ambiente

BugBank Web

### Severidade

Alta

### Prioridade

Alta

### Passos para reproduzir

1. Criar usuário remetente;
2. Criar usuário destinatário;
3. Acessar transferência;
4. Informar valor negativo;
5. Confirmar transferência.

### Resultado esperado

Sistema deve bloquear valores negativos.

### Resultado obtido

Preencher após execução.

---

## Bug 003 — Comportamento inconsistente em extrato

### Ambiente

BugBank Web

### Severidade

Média

### Prioridade

Média

### Passos para reproduzir

1. Realizar transferência;
2. Acessar extrato;
3. Validar movimentação exibida.

### Resultado esperado

Movimentação deve exibir valor, data e descrição corretamente.

### Resultado obtido

Preencher após execução.
