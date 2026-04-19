# 📅 Sistema de Agendamento de Serviços

## 👥 Integrantes

* Marcelo da Silva 
* Vinícius França
* Pedro Nunes Moreira

**Curso:** Análise e Desenvolvimento de Sistemas  
**Turma:** Tópicos Especiais em Sistemas - Segunda - 2026.01 - noite

---

## 📌 Resumo

Este projeto consiste no desenvolvimento de um sistema de agendamento de serviços, permitindo o cadastro de clientes, serviços disponíveis e o gerenciamento de agendamentos. A aplicação possibilita que usuários registrem e consultem horários marcados, organizando de forma eficiente a prestação de serviços. O sistema implementa operações de CRUD (Create, Read, Update, Delete), garantindo a manipulação completa dos dados. O projeto foi estruturado com foco em simplicidade, organização e aplicação prática dos conceitos estudados em sala de aula.

---

## ⚙️ Funcionalidades

* Cadastro, edição, listagem e remoção de clientes
* Cadastro e gerenciamento de serviços oferecidos
* Criação de agendamentos vinculando clientes e serviços
* Listagem de agendamentos com informações completas
* Disponibilização de endpoints REST para acesso às funcionalidades

---

## 🧩 Descrição das Funcionalidades

### 👤 Gestão de Clientes

O sistema permite o cadastro completo de clientes, incluindo informações básicas. Também é possível editar, excluir e listar os clientes cadastrados, garantindo um controle eficiente dos usuários que utilizam os serviços.

**Endpoints e atributos:**

```json
GET /api/clientes
→ Não requer corpo

GET /api/clientes/{id}
→ Não requer corpo

POST /api/clientes
{
  "nome": "string",
  "email": "string",
  "telefone": "string"
}

PUT /api/clientes/{id}
{
  "nome": "string",
  "email": "string",
  "telefone": "string"
}

DELETE /api/clientes/{id}
→ Não requer corpo
```

---

### 🛠️ Gestão de Serviços

Os serviços oferecidos podem ser cadastrados com nome, preço e duração, permitindo sua organização dentro do sistema. Essa funcionalidade possibilita manter um catálogo atualizado dos serviços disponíveis para agendamento.

**Endpoints e atributos:**

```json
GET /api/servicos
→ Não requer corpo

GET /api/servicos/{id}
→ Não requer corpo

POST /api/servicos
{
  "nome": "string",
  "preco": 0.0,
  "duracao": 0
}

PUT /api/servicos/{id}
{
  "nome": "string",
  "preco": 0.0,
  "duracao": 0
}

DELETE /api/servicos/{id}
→ Não requer corpo
```

---

### 📅 Gestão de Agendamentos

Os agendamentos são o núcleo do sistema, permitindo vincular um cliente a um serviço em uma data e horário específicos. Essa funcionalidade utiliza o relacionamento entre entidades, garantindo integridade e organização das informações.

O sistema permite:

* Criar novos agendamentos
* Listar todos os agendamentos
* Atualizar informações de um agendamento
* Cancelar agendamentos

**Endpoints e atributos:**

```json
GET /api/agendamentos
→ Não requer corpo

GET /api/agendamentos/{id}
→ Não requer corpo

POST /api/agendamentos
{
  "IdServico": "string (GUID)",
  "IdCliente": "string (GUID)",
  "DataCadastro": "2026-01-01T10:00:00",
  "Situacao": "string"
}

PUT /api/agendamentos/{id}
{
  "DataCadastro": "datetime",
  "Situacao": "string"
}

```

---

### 🔗 Relacionamento entre Entidades

O sistema implementa relacionamento entre as entidades:

* Um agendamento está associado a um cliente
* Um agendamento está associado a um serviço

Isso garante que não seja possível criar agendamentos sem dados previamente cadastrados, respeitando a lógica do sistema.

---

## 🤖 Uso de IA

**Ferramenta utilizada:**

* ChatGPT (OpenAI)

**Forma de uso:**

* Geração da estrutura do README
* Criação dos textos de resumo, funcionalidades e descrições
* Sugestões de organização da documentação

**Revisões realizadas pela equipe:**

* Ajustes nos nomes das entidades e endpoints
* Adaptação da linguagem para o contexto do projeto
* Conferência das funcionalidades implementadas no sistema
