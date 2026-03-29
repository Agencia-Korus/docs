---
sidebar_position: 1
---

# Requisitos Funcionais

## Introdução

Esta página reúne todos os requisitos funcionais elicitados por meio da técnica de **entrevista** para o sistema da **Agência Korus**.

## Metodologia

Os requisitos foram organizados em tabelas agrupadas por módulo do sistema. Cada requisito possui um identificador único (**ID**) e sua respectiva descrição.

**Legenda:**

- **RFxx** — Requisito Funcional nº xx

---

## 1. Site Institucional

A Tabela 1 apresenta os requisitos funcionais relacionados ao site institucional da Agência Korus.

<center><b>Tabela 1</b> — Requisitos Funcionais do Site Institucional</center>

| ID   | Descrição |
| ---- | --------- |
| RF01 | O sistema deve exibir uma landing page responsiva da Agência Korus. |
| RF02 | O sistema deve apresentar, na página inicial, informações sobre a Agência Korus. |
| RF03 | O sistema deve apresentar a seção de principais serviços oferecidos pela agência. |
| RF04 | O sistema deve apresentar a seção de metodologia de trabalho da agência. |
| RF05 | O sistema deve disponibilizar um menu de navegação para acesso às principais seções do site. |
| RF06 | O sistema deve exibir a identidade visual da empresa no cabeçalho, incluindo logo e acesso à página inicial. |
| RF07 | O sistema deve disponibilizar uma seção de portfólio, contendo trabalhos, fotos, vídeos, imagens ou documentos produzidos pela agência. |
| RF08 | O sistema deve disponibilizar uma seção para eventos e coberturas realizadas pela empresa. |
| RF09 | O sistema deve apresentar os seguintes serviços: gestão de redes sociais, produção de conteúdo, fotografia, tráfego pago, web design e cobertura de eventos. |
| RF10 | O sistema deve permitir que administradores alterem a lista de serviços cadastrados. |
| RF11 | O sistema deve disponibilizar uma área com e-books, cursos ou materiais digitais da agência. |
| RF12 | Ao clicar em um e-book, curso ou material pago, o sistema deve redirecionar o usuário para a plataforma externa de venda (ex.: Hotmart ou Kiwify). |
| RF13 | O sistema deve exibir botões de contato rápido para WhatsApp e Instagram. |
| RF14 | O sistema deve manter os botões de WhatsApp e/ou Instagram em posição de fácil acesso durante toda a navegação. |
| RF15 | O sistema deve permitir que o visitante escolha o serviço desejado e seja direcionado ao formulário correspondente. |

---

## 2. Captação e Qualificação de Leads

A Tabela 2 apresenta os requisitos funcionais relacionados à captação e qualificação de leads.

<center><b>Tabela 2</b> — Requisitos Funcionais de Captação e Qualificação de Leads</center>

| ID   | Descrição |
| ---- | --------- |
| RF16 | O sistema deve disponibilizar um formulário de qualificação de leads para coleta de informações do potencial cliente. |
| RF17 | O formulário deve permitir a coleta de dados pessoais e de contato do interessado. |
| RF18 | O formulário deve permitir identificar o tipo de demanda do cliente (ex.: cobertura de evento, gestão de redes sociais, produção de conteúdo, tráfego pago, web design ou outro serviço). |
| RF19 | O formulário deve permitir a coleta de informações específicas da demanda (ex.: tipo de evento ou projeto, quantidade estimada de pessoas, orçamento disponível, prazo desejado, objetivo do serviço e informações adicionais). |
| RF20 | O sistema deve permitir a criação de perguntas condicionais, exibindo campos diferentes conforme o tipo de serviço selecionado. |
| RF21 | O sistema deve enviar as respostas do formulário para o WhatsApp da agência. |
| RF22 | O sistema deve enviar as respostas do formulário para o e-mail da agência. |
| RF23 | O sistema deve registrar os dados preenchidos pelo lead em uma base de dados para consulta posterior. |
| RF24 | O sistema deve exibir uma mensagem de confirmação ao usuário após o envio do formulário. |
| RF25 | O sistema deve impedir o envio do formulário com campos obrigatórios vazios. |
| RF26 | O sistema deve permitir que a agência edite as perguntas do formulário de qualificação. |
| RF27 | O sistema deve classificar e organizar os leads conforme critérios como tipo de serviço, faixa de orçamento ou prioridade comercial. |

---

## 3. Autenticação e Perfis de Acesso

A Tabela 3 apresenta os requisitos funcionais relacionados à autenticação e ao controle de perfis de acesso.

<center><b>Tabela 3</b> — Requisitos Funcionais de Autenticação e Perfis de Acesso</center>

| ID   | Descrição |
| ---- | --------- |
| RF28 | O sistema deve permitir o cadastro e login de usuários autorizados. |
| RF29 | O sistema deve possuir três perfis de acesso: administrador, funcionário e cliente. |
| RF30 | O sistema deve restringir funcionalidades conforme o perfil do usuário autenticado. |
| RF31 | O sistema deve permitir a recuperação de acesso por meio de mecanismo seguro (ex.: redefinição de senha por e-mail). |
| RF32 | O sistema deve permitir que administradores criem, editem, removam e desativem contas de usuários. |
| RF33 | O sistema deve permitir que administradores definam o perfil de acesso de cada usuário. |
| RF34 | O sistema deve permitir que administradores alterem permissões de usuários conforme categoria, cargo ou nível interno. |
| RF35 | O sistema deve impedir que usuários acessem áreas não autorizadas ao seu perfil. |

---

## 4. Gestão de Projetos e Contratos

A Tabela 4 apresenta os requisitos funcionais relacionados à plataforma de gestão de projetos e contratos.

<center><b>Tabela 4</b> — Requisitos Funcionais de Gestão de Projetos e Contratos</center>

| ID   | Descrição |
| ---- | --------- |
| RF36 | O sistema deve disponibilizar uma área interna de organização de tarefas, inspirada em ferramentas como o Trello. |
| RF37 | Cada contrato ou projeto deve ser representado como um quadro ou espaço individual dentro da plataforma. |
| RF38 | O sistema deve permitir que administradores criem novos projetos/contratos. |
| RF39 | O sistema deve permitir associar um ou mais funcionários a cada projeto. |
| RF40 | O sistema deve permitir associar o cliente ao projeto correspondente. |
| RF41 | O sistema deve permitir a criação de listas/colunas dentro do projeto, representando etapas do trabalho. |
| RF42 | O sistema deve permitir a criação de cards (tarefas) dentro das listas. |
| RF43 | O sistema deve permitir que cards possuam título, descrição e status. |
| RF44 | O sistema deve permitir que cards contenham: etiquetas, cores, responsáveis, prazos, data de início, data de entrega, tipo de prazo e observações. |
| RF45 | O sistema deve permitir anexar imagens, links e outros materiais aos cards, conforme a necessidade do projeto. |
| RF46 | O sistema deve permitir a movimentação de cards entre colunas ou etapas do projeto. |
| RF47 | O sistema deve permitir que administradores adicionem ou removam cards. |
| RF48 | O sistema deve permitir que administradores adicionem ou removam usuários de um projeto. |
| RF49 | O sistema deve permitir o acompanhamento visual do andamento do projeto pelo cliente. |
| RF50 | O cliente deve visualizar apenas o seu próprio projeto. |
| RF51 | O funcionário deve visualizar apenas os projetos aos quais estiver vinculado. |
| RF52 | O cliente não deve poder alterar cards, listas, usuários ou permissões do projeto. |
| RF53 | O funcionário deve visualizar e acompanhar os cards disponíveis para sua atuação, conforme permissões definidas pelo administrador. |
| RF54 | O sistema deve permitir que o administrador defina quais informações cada perfil poderá visualizar em um projeto. |
| RF55 | O sistema deve registrar o histórico de alterações importantes nos projetos. |

---

## 5. Gamificação e Desempenho

A Tabela 5 apresenta os requisitos funcionais relacionados ao módulo de gamificação e acompanhamento de desempenho dos funcionários.

<center><b>Tabela 5</b> — Requisitos Funcionais de Gamificação e Desempenho</center>

| ID   | Descrição |
| ---- | --------- |
| RF56 | O sistema deve manter um perfil de funcionário com informações de desempenho. |
| RF57 | O perfil do funcionário deve exibir informações como nome, descrição, medalhas, nível, desempenho e progressão. |
| RF58 | O sistema deve implementar um sistema de gamificação por níveis para funcionários. |
| RF59 | O sistema deve permitir associar permissões, benefícios ou responsabilidades conforme o nível do funcionário. |
| RF60 | O sistema deve permitir que administradores configurem cargos, categorias ou patentes dos funcionários. |
| RF61 | O sistema deve permitir a visualização do desempenho individual do funcionário dentro da empresa. |
| RF62 | O sistema deve permitir que clientes visualizem informações resumidas do andamento do projeto e, se autorizado, aspectos de desempenho relacionados ao serviço contratado. |

---

## 6. Funcionalidades Adicionais

A Tabela 6 apresenta requisitos funcionais complementares do sistema.

<center><b>Tabela 6</b> — Requisitos Funcionais Adicionais</center>

| ID   | Descrição |
| ---- | --------- |
| RF63 | O sistema deve permitir a publicação de anúncios ou comunicados direcionados a públicos específicos. |
| RF64 | O sistema deve permitir que anúncios sejam direcionados para: funcionários, gerentes, clientes ou todos os usuários. |
| RF65 | O sistema deve permitir integração com ferramentas externas, como: WhatsApp, e-mail, Google Analytics e Google Agenda. |
| RF66 | O sistema deve permitir integração futura com API de IA para apoio na qualificação de leads. |
| RF67 | O sistema deve exibir os termos de uso e a política de privacidade, exigindo a aceitação do usuário antes do uso da plataforma. |
| RF68 | O sistema deve permitir que o usuário configure suas preferências de cookies conforme a LGPD. |
| RF69 | O sistema deve disponibilizar uma área de "Meu Perfil" onde qualquer usuário autenticado possa visualizar e atualizar suas informações pessoais (nome, foto de perfil e senha). |
| RF70 | O sistema deve enviar notificações aos usuários sobre eventos relevantes, como novos leads, alterações em cards e prazos próximos. |
| RF71 | O sistema deve permitir que o usuário configure quais tipos de notificações deseja receber. |

---

## Histórico de Versões

| Versão | Descrição | Autor(es) | Data | Revisor(es) | Data de revisão |
| ------ | --------- | --------- | ---- | ----------- | --------------- |
| 1.0 | Criação da documentação dos Requisitos Funcionais | [Gabriel Lopes](https://github.com/BrzGab) | 29/03/2026 | [Lucas Guimarães](https://github.com/lcsgborges) | 29/03/2026 |
