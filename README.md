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

## Arquivos sensíveis (o git nn quer deixar eu mandar o firebase-key.json)
```
{
  "type": "service_account",
  "project_id": "projeto-andre-ppi",
  "private_key_id": "4fbcb5e231c8b34db177c354e4379a737eeb9617",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQDku+/foxHjEE7l\n9qrqyxwZGBDi0c266hD3+LYyK6RJO4aVg6WNuun6JUVg5gvjuzqF3oxbzp8Xh4QG\nduKs49FhO4TJ5i8U1Lk0PwEqdtpv51rCopieSeb0RoNWHecaADaFBspPx85dGeuW\nt/f5kd3p++gbneGEP0TJ2Ey8gGwASpCqBnPbxEE0fo4V0ruljTxBTPpfYOpQeQ1X\nDYNk4WAHuRqFI5d7uWJuFWUkYDQADHrWE1Oj15bdhu4cE9hxPOytQLU0LMya6fWW\nAbrgwoY44A2VXm2ktBeAljAz7wKKb+SZuH4Go8YlCnRYNpfkF2rE0gHgPes+kYWK\n/lSKrClrAgMBAAECgf8qMx+/hUKz3MSKRlp9RcCuQv14FngtF5+TqifLt1U1kBSm\n43uAW8CnyF/wu7udNJ757GP42ur1RPeM106ElzSngKJhicd0rfHMJ/r7ZHv8KVBt\n+syjooiq12s8UL4q+i3Zv45Ys5f8qPL1eSLkclO56zX7HXR93fNJIp7eT5gTiQYY\n4QQiKQbbLV3Zo/pABbjHqWoAQj1Ch96TV2tZW70nvsbvQ4v/JUwv4Um0/ueNUBKO\nHyKqZVsWnxEsIFCfKNcYFSJvxBX0FXt80QvaUGC0ciVEwAKnO3lyNaYM3N1lBUPx\ngxLJJ10pXoZOuHl2p6MJFNuTKz5pmuUehPZIyIECgYEA/CV8MdM2AasokTFsLglW\nUAT1Bmu/tJe+0iUrG57afXRt8yhE6p29cEmb+NUQIf8BLkgO/7O1dBamGg/MZQl4\nuA0AGncw82ygKd+YjR8C1M+k5mte4WPHeDTBOmEpMT6e/Z1q2HaZZ2tbdq6I+Zxp\ntASqhYQVAZz1GnI9h83iqGECgYEA6DraHNvSLK9sIQR3VKpkGsDvgDPxoJCycTzV\nF1BnjhJWXGGmsosDG0iedTgYOLqnmfy0SQAEAAw2tXqNxhMO1dt1kUDb1N1RBeeo\nKUt4ZdfXe0P/SXE5exkCugs0xDoXijQg8X/Mr5HaYqVuLLV3Yoo6aPVy3A5qzbzd\ni4Ig9UsCgYB0tuVGKv5Ux2V/z+DDbo8Fe0XwMvAKKDOsEohhwKZibAJ5C6ra7ylB\nUNFh3T4afm+NfM10jzrvAYzhg26ZVkkK6PmjRojiJOX+fAGhUTl+SJ+MCSdiLU2n\n1sOawl7O7K2rt7I9gKiBtrAfv6qn4D8NlRtZskoG9SB/nWHd+u9wAQKBgEJ3HZfm\n3keFyZfFlHW58r6pe6Kgu0YuQ7QfKgnrLEhAPVFhbXlqSfBUH24DKQOLgI6VAfBm\nvb5ZwIq+UbdgGv3gOszg2EobMaZUABAZlpLnbLfN5VHaww3VQa+Hp4mF6tjWRJt5\n7VZOk0dqe5b2NP4R+9ewcDhFNBJAPNRB4TbzAoGAWTF18Jo7uz84Lw7ZF6QO8sF6\nwnb3Szv4JsR4raHLb0Go1B21bkzHr0LUyTu284PangHiTojVdHaKvPNqp4/6ScA4\n7HOZIo5pGp1yWgQHBjFRuX0TqQnFS3olLc6OjZ90G6WZG3GxmGiQAaV206tF1rKj\nhSqGocmdWs3F7IbtqWg=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fbsvc@projeto-andre-ppi.iam.gserviceaccount.com",
  "client_id": "115538190090198601544",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40projeto-andre-ppi.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
```

## Instalação das Dependências
```bash
npm install