# Bytebank | FIAP Tech Challenge

## Contexto do projeto

Este projeto é uma aplicação de gerenciamento financeiro desenvolvida como parte de um desafio técnico da FIAP Tech, utilizando Next.js. O objetivo é permitir que os usuários gerenciem suas transações financeiras de forma intuitiva e eficiente.

&nbsp;


## Tecnologias utilizadas

### Front-end
Next.js: Framework React para construção de aplicações web, permitindo renderização do lado do servidor (SSR) e geração de sites estáticos (SSG).

React: Biblioteca JavaScript para construção de interfaces de usuário.

Material-UI: Biblioteca de componentes React que implementa o Material Design, proporcionando uma interface consistente e responsiva.

Sass: Pré-processador CSS que facilita a escrita de estilos com recursos como variáveis e aninhamento.

Day.js: Biblioteca leve para manipulação de datas, facilitando operações relacionadas a datas e horários.

&nbsp;

### Back-end
JSON Server: Ferramenta que simula uma API RESTful a partir de um arquivo JSON, permitindo testes e desenvolvimento sem a necessidade de um servidor back-end completo.

bcrypt: Biblioteca para hashing de senhas, utilizada para proteger informações sensíveis.

Jose: Biblioteca para manipulação de tokens JWT (JSON Web Tokens), que pode ser utilizada para autenticação e autorização.

&nbsp;

### Documentação

Storybook: Ferramenta de desenvolvimento para criar e documentar componentes UI isoladamente, facilitando a visualização e teste dos mesmos.

&nbsp;


## Como Executar o Projeto

### Variáveis de ambiente

Para executar a aplicação, é preciso criar um arquivo `.env` seguindo o `.example.env` localizado na raiz do projeto

Além do .env, faça uma cópia do arquivo `example.db.json` para um arquivo `db.json` localizado dentro de `src/mock/server`

&nbsp;

### Para configurar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
```shell
git clone https://github.com/raulpesilva/tech-challenge-finance-app.git
```

2. Instale as dependências:
```shell
pnpm install
```

3. Inicie o mock e o projeto:
```shell
pnpm dev:mock
```

4. Acesse a aplicação no navegador em http://localhost:3000/

&nbsp;

### Para o StoryBook, siga os passos abaixo:

1. Para acessar o StoryBook, inicie o mock:
```shell
pnpm mock
```

2. E inicie a documentação:
```shell
pnpm storybook
```

3. Acesse a documentação no navegador em http://localhost:6006/
