# <strong>VUTTR - very useful tool to remember</strong> 📌

<strong>VUTTR</strong> é um projeto feito em Typescript que te ajuda a lembrar e gerenciar suas ferramentas favoritas.
<br>

## Objetivo 🎯

- Gerenciar suas ferramentas e apps favoritos
<br><br>
<h2>Ferramentas e tecnologias utilizadas ⚙️</h2>
<h3><img src="https://img.icons8.com/offices/25/000000/react.png"/><strong>ReactJS</strong></h3>
<h3><img src="https://img.icons8.com/color/25/000000/typescript.png"/>
<strong>Typescript</strong></h3>
<h3><img src="https://img.icons8.com/color/25/000000/nodejs.png"/><strong>Nodejs</strong></h3>
<h3><img src="https://img.icons8.com/material-two-tone/25/000000/json.png"/><strong>Json server</strong></h3>
<h3><img src="https://img.icons8.com/color/25/000000/heroku.png"/><strong>Heroku</strong></h3>

![file_type_netlify_icon_130354](https://user-images.githubusercontent.com/48018898/119031307-58670b80-b981-11eb-8750-2c14c02aa351.png) <span><strong>Netlify</strong></span>

<br>

## Execute o projeto 🚀

Você pode rodar o projeto tanto localmente como acessando o link que está na parte sobre o projeto.

<strong>OBS:</strong> o projeto está configurado com ferramentas de CI/CD do serviço da netlify e heroku.

### Rodando localmente 🖥️

1. Clone esse repositório para o diretório de sua preferência
2. Clone esse outro repositório <a href="https://gitlab.com/bossabox/challenge-fake-api/tree/master">VUTTR BACKEND</a> também para um diretório de sua preferência
3. Execute a aplicação Backend primeiro, entrando na pasta do projeto e executando o comando `npm install` depois de instalado todas as dependências do projeto execute o comando `npx json-server db.json` e pronto a aplicação backend estará rodando em
   <a href="http://localhost:3000">http://localhost:3000</a>
4. Execute a aplicação frontend, entrando na pasta do projeto e executando o comando `npm install` ou `yarn install` se você utiliza o yarn, depois de instalado todas as dependências do projeto execute o comando `yarn start`, caso de conflito nas portas em que irá rodar, aceite rodar em outra porta que será redirecinado para a `3001` e pronto a aplicação frontend estará rodando em
   <a href="http://localhost:3001">http://localhost:3001</a>

<br>

## Funcionalidades do projeto 🔥

1. Criar ferramenta
2. Deletar ferramenta
3. Pesquisar as ferramentas pelo nome
4. Pesquisar as ferramentas pela tag delas
5. Ver o número total de ferramentas cadastradas
6. Ver as informações sobre cada ferramenta
7. Acessar a página de sua ferramenta favorita através do link dela na página de detalhes

## Extras :octocat:

- [x] Adicionado a página de detalhes da ferramenta.
- [x] Configurado ferramentas de CI/CD no servidor da netlify.
- [x] Configurado ferramentas de CD no servidor da heroku.
- [x] Feito o deploy da aplicação Frontend no servidor da netlify.
- [x] Feito o deploy da aplicação Backend no servidor da heroku.
- [x] Adicionado um sistema de páginação, com um limite de 5 ferramentas por página e 3 páginas a mostra.
- [x] Adicionado a funcionalidade que permite visualizar o número total de ferramentas que o usuário tem.
