---
id: prototipo-alta-fidelidade
title: Protótipo de Alta Fidelidade
sidebar_label: Protótipo
---

# Protótipo de Alta Fidelidade — Korus

Este documento traz o design em alta fidelidade e as telas desenhadas para o **Korus**. O objetivo é servir como principal referência visual para a equipe de Frontend durante o desenvolvimento.

## 1. Visão Geral

> **Nota:** O protótipo busca simular a aplicação real da forma mais próxima possível, já aplicando as nossas regras de Design System (como cores, tipografia, espaçamentos e sombras).

- **Ferramenta de Prototipação:** Figma
- **Link do Protótipo:** [Acessar Design no Figma](https://www.figma.com/design/kVUhjP8O7ONAII8ueiMwVw/Korus?node-id=0-1&t=8ig7yMjqm0oL79Vl-1)

---

## 2. Mapa do Protótipo e Fluxo de Telas (User Flows)

Considerando as histórias de usuário da Agência Korus, o protótipo cobre as seguintes telas e jornadas:

### 2.1. Portal Público e Captação (Visitantes)
- **Landing Page Institucional:** Apresentação da agência, nossa metodologia, serviços e portfólio (com vídeos, fotos e eventos).
- **Catálogo de Infoprodutos:** Página para visualizar e adquirir e-books, cursos e materiais digitais.
- **Formulários de Captação:** Fluxo focado em serviços, com formulário de contato segmentado para novos leads.
- **Avisos Legais:** Banner de consentimento de Cookies e as páginas de Termos de Uso e Política de Privacidade.

### 2.2. Autenticação e Conta
- **Acesso:** Telas padrão de Login, de Cadastro (e-mail e senha) e o fluxo de Recuperação de Senha.
- **Meu Perfil:** Ajustes da conta do usuário, como foto de perfil, dados pessoais, troca de senha e configuração de preferências de notificações.

### 2.3. Área Interna (Clientes e Equipe)
- **Dashboard de Projetos:** Um resumo central para o cliente acompanhar como está o andamento do seu projeto.
- **Gestão de Tarefas (Kanban):** Quadros no estilo Trello, organizados por etapas, para organizar os cards do dia a dia.
- **Agenda e Produtividade:** Visão de agenda pessoal para controle de prazos e o painel de pontuação de Gamificação (XP).
- **Desempenho e Progressão:** Perfil individual do funcionário, contendo o acompanhamento de níveis adquiridos, medalhas e histórico de performance.
- **Mural e Notificações:** Feed central para anúncios da equipe e central de alertas (atualizações de projetos, eventos e novos leads).

### 2.4. Painel Administrativo (Admin)
- **Gestão de Conteúdo (CMS):** Telas para cadastrar, editar ou remover serviços, itens de portfólio e materiais digitais (cursos/e-books).
- **Gestão Comercial:** Dashboard focado nos Leads, com filtros por serviço, orçamento e prioridade para facilitar o trabalho comercial.
- **Integrações e Relatórios:** Acompanhamento básico de ferramentas externas (como Google Analytics e Pixel da Meta) e métricas.
- **Acessos e Permissões:** Controle da equipe, onde o administrador pode adicionar usuários, alterar perfis e gerenciar roles/permissões.

---

## 3. Boas Práticas para o Frontend

Durante a implementação das telas, pedimos atenção aos seguintes pontos:
1. **Pense em Componentes:** Botões, inputs, modais e cards devem ser isolados em componentes reutilizáveis desde o início, evitando código duplicado.
2. **Cores e Tokens:** Utilize sempre as cores oficiais definidas no código (através de variáveis/tokens) e cheque os hexadecimais no projeto do Figma.
3. **Responsividade:** Fique de olho nos breakpoints definidos no Figma para garantir que a aplicação se adapte bem tanto no Mobile quanto no Desktop.

---

## 4. Capturas Essenciais

*(Serão adicionadas capturas de tela das páginas principais aqui conforme o design final for validado em equipe).*

---

## Histórico de Versões
| Versão | Descrição | Autor(es) | Data | Revisor(es) | Data de Revisão |
|--------|-----------|-----------|------|-------------|-----------------|
| 1.0 | Criação da documentação inicial do protótipo e adição do link oficial do Figma. | [Artur Mendonça Arruda](https://github.com/ArtyMend07) | 29/03/2026 | - | - |
| 1.1 | Alinhamento de fluxos faltantes com a documentação principal (Recuperação de senha, progressão/medalhas e notificações). | [Antigravity AI](https://github.com/google) | 29/03/2026 | - | - |
