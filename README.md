# Materiais de Estudo - Grupo 09

## Integrantes
* Arthur Lima Araújo
* João Henrique Nascimento Rodrigues, Victor Henrique Santos Acis, Joyce Aryes

* Eu nn sei o nome desses povo véi nn, mas só tem um João H, um Victor H, e uma Joyce

## Aviso para o Professor

* Eu te adicionei no FIREBASE pelo email (andre.vieira2@escolar.ifrn.edu.br) caso queira olhar o banco de dados lá.

## Problema atendido e público beneficiado
O projeto visa organizar guias, resumos, listas de exercícios e outros materiais acadêmicos. O público-alvo são estudantes que precisam de um repositório centralizado e de fácil acesso para consultar conteúdos de estudo por disciplina.

## Entidade Principal e Campos
A entidade principal é `Material`, armazenada no Firebase Firestore. Os campos são:
*   **titulo** (STRING): Identifica o material.
*   **disciplina** (STRING): Informa o componente curricular.
*   **tipo** (STRING): Classifica guia, resumo, lista ou apresentação.
*   **data** (DATE): Registra a data de publicação.
*   **descricao** (TEXT): Explica o conteúdo e sua finalidade.

## Tecnologias Utilizadas
*   Node.js e Express
*   Handlebars (Template Engine)
*   Firebase (Firestore e Firebase Admin SDK)
*   Node Test e Supertest (Testes automatizados)

## Pré-requisitos
*   Node.js instalado (v18 ou superior).
*   Conta no Firebase com um projeto criado e o Firestore ativado.
*   Arquivo de credenciais `firebase-key.json` na raiz do projeto.

## Instalação das Dependências
```bash
npm install