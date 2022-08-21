# Projeto API Rick and Morty

- [x] Primeira Entrega 22/08/2022

  - [x] [GET] Leitura de todas os personagens
  - [x] [GET] Leitura de personagens individuais (por ID)
  - [x] [POST] Criação de personagens
  - [x] [PUT] Edição de personagens por ID
  - [x] [DELETE] Exclusão de personagens por ID

- Requisitos:

  - [x] Formatação do código utilizando Prettier;
  - [x] Persistência de dados no MongoDB [Atlas](https://account.mongodb.com/account/login).

---

- [ ] Segunda Entrega 29/08/2022

  - [ ] [POST] Criar Usuários
  - [ ] [GET] Buscar Todos os usuários
  - [ ] [POST] Login de usuários
  - [ ] [Get] Buscar personagens por nome

- Requisitos:

  - [x] Persistência de dados no MongoDB [Atlas](https://account.mongodb.com/account/login);
  - [x] Formatação do código utilizando Prettier;
  - [ ] Documentação Swagger;
  - [ ] Status Code corretos em todos os endpoints;
  - [ ] Deploy no Heroku;
  - [ ] Autenticação JWT.

## Entidades

### Users

- name: `String`,
- username: `String`,
- email: `String`,
- password: `String`,
- photo: `String`,

### Character

- user: `String`,
- name: `String`,
- imageUrl: `String`,

## Tela de login:

O projeto conta com uma tela de login bem básica, apenas com os campos de e-mail, senha, botão de logar e um de cadastro.

## Tela de cadastro de usuários

Na tela de cadastro os campos requisitados são nome, nome de usuário, e-mail, senha e um campo para inserir uma url de imagem de perfil.

## Tela de personagens

Na tela de personagens é onde podemos visualizar todos os personagens, ela também conta com um campo de pesquisa, botoes de adicionar e listar personagens, botões laterais para navegar entre páginas e um botão de sair.

## Tela de cadastro de personagens

Aqui é possível adicionar um novo personagem, contém os campos nome e URL da imagem e um botão adicionar, ele também possui uma funcionalidade de mostrar a imagem a partir da URL inserida (funcionalidade já implementada no front-end).
As informações de personagens podem ser obtidas a partir da [API oficial do Rick and Morty](https://rickandmortyapi.com/).

## Tela de personagens by id

Essa tela permite a visualização de um único personagem quando clicamos no nome dele dentro do card, ela conta com botões para editar e remover um personagem do banco de dados.

## Tela de edição

Ao clicar no botão "Editar" na tela de personagens by id, será levado a tela de edição, que conta com os campos nome e URL da imagem e com um botão para confirmar a edicao.

## Tela de exclusão de personagens

Ao clicar no botão "Remover" dentro na tela de personagens by id, será redirecionado até a tela onde podemos remover o personagem, que conta com uma mensagem de confirmação com os botões "Remover" e "Cancelar".

## Download do Front-end

Para baixar o projeto, basta clicar [aqui](https://drive.google.com/file/d/1FAutpdj3nYIuwzfeoLwUOhWmybOvecSi/view?usp=sharing)

## Rotas

![Rotas](https://media.discordapp.net/attachments/798520358977929226/1010842418528137297/api-docs.PNG?width=1245&height=676 'Documentação de Rotas')

Elas também podem ser encontras neste [endereço](https://rick-and-morty-server.herokuapp.com/api-docs)
