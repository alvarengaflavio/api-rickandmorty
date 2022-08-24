# API Rick and Morty

This is a CRUD for Rick and Morty characters, with a login system and cryptographic password.
Online Swagger Documentation: [https://alva-rickandmorty.herokuapp.com/api-docs/](https://alva-rickandmorty.herokuapp.com/api-docs/)

## Routes

### Users

#### POST

PATH: `/users/create`
Route responsible for creating a new user.
Example Json:

```json
{
  "name": "New User",
  "username": "newuser",
  "email": "newuser@email.com",
  "password": "12345",
  "photo": "https://img-9gag-fun.9cache.com/photo/a3Q5VW5_460s.jpg"
}
```

---

#### GET

PATH: `/users`
Route responsible for getting all users.
Response body

```json
{
  "users": [
    {
      "_id": "63c1c2c1e30005318661372cc6",
      "name": "Name of the User",
      "username": "username",
      "email": "secure@email.com",
      "photo": "https://myphoto.com/picture/Image-10.jpg",
      "__v": 0
    }
  ]
}
```

---

### Auth

#### POST

PATH: `/auth/login`
Route responsible for login users.
Request body:

```json
{
  "email": "secure@email.com",
  "password": "12345"
}
```

---

### Character

#### POST

PATH: `/character/create`
Route responsible for creating a new character.

Request body:

```json
{
  "user": "",
  "name": "Rick Sanchez",
  "imageUrl": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
}
```

---

#### GET

PATH: `/character`
Route responsible for creating new characters
Parameters:

- `query`
  - `limit` - Number
  - `offset` - Number

Response body:

```json
{
  "nextUrl": "/characters?limit=8&offset=8",
  "previousUrl": null,
  "limit": 8,
  "offset": 0,
  "total": 15,
  "results": [
    {
      "id": "63034a0b358f8b1a91516784",
      "user": {
        "_id": "63033c1e3111531881372cc6",
        "name": "Flávio Alvarenga",
        "username": "flaviocode",
        "email": "email@email.com",
        "photo": "https://veja.abril.com.br/wp-content/uploads/2020/09/1-GettyImages-517387700.jpg",
        "__v": 0
      },
      "name": "Morty Smith",
      "imageUrl": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
      "id": "63034a72358f8b1a91516788",
      "user": {
        "_id": "63033c1e3111531881372cc6",
        "name": "Flávio Alvarenga",
        "username": "flaviocode",
        "email": "email@email.com",
        "photo": "https://veja.abril.com.br/wp-content/uploads/2020/09/1-GettyImages-517387700.jpg",
        "__v": 0
      },
      "name": "Nake Terminator",
      "imageUrl": "https://rickandmortyapi.com/api/character/avatar/577.jpeg"
    }
  ]
}
```

---

#### GET

PATH: `/character/find/{id}`
Route responsible for getting a character by ID.
Parameters:

- `path`
  - `id` - String

---

#### PUT

PATH: `/character/update/{id}`
Route responsible for updating a character by ID.

Parameters:

- `path`

  - `id` - String

- `body`
  - `character` - Object

```json
{
  "name": "Rick Sanchez",
  "imageUrl": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
}
```

---

#### DELETE

PATH: `/character/delete/{id}`
Route responsible for deleting a character by ID.

Parameters:

- `path`

  - `id` - String

---

#### GET

PATH: `/character/search`
Route responsible for getting characters containing the search term sent via query params.
Parameters:

- `query`

  - `name` - String

---

## Schemas

### User

```
User    {
    name        string
    username    string
    email       string
    password    string
    photo       string
}
```

### Character

```
    user        string
    name        string
    imageUrl    string
```

---

Language: JavaScript  
Tecnology: NodeJs, Express, MongoDB  
Workload: 20 + 20 hours

---
