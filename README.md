# Game Manager

## Descrição
Uma aplicação RESTful que se conecta a um banco de dados (arquivo JSON) para centralizar as informações dos jogos.

## Features
- Listar todos os jogos
- Listar jogos por console (ex: Nintendo DS, PSP, PS2)
- Editar um jogo específico
- Deletar um jogo específico
- Adicionar um jogo


### Listar Todos os Jogos
**Endpoint:**

```
GET /api/games
```

**Response:**

```json
[
  {
    "nameGame": "Pokemon FireRed",
    "yearRelease": 2004,
    "platforms": ["Game Boy Advance"],
    "categories": ["RPG"]
  },
  {
    "nameGame": "League of Legends",
    "yearRelease": 2009,
    "platforms": ["Windows", "MacOS"],
    "categories": ["MOBA"]
  }
]
```

### Listar Jogos por Console
**Endpoint:**

```
GET /api/platform?name=Game%20Boy%20Advance
```

**Response:**

```json
[
  {
    "nameGame": "Pokemon FireRed",
    "yearRelease": 2004,
    "platforms": ["Game Boy Advance"],
    "categories": ["RPG"]
  }
]
```

### Editar um Jogo Específico
**Endpoint:**

```
PUT /api/name?name=Pokemon%20FireRed
```

**Request:**

```json
{
  "nameGame": "Pokemon FireRed",
  "yearRelease": 2004,
  "platforms": ["Game Boy Advance"],
  "categories": ["RPG", "Adventure"]
}
```

**Response:**

```json
{
  "message": "Jogo atualizado com sucesso!",
  "game": {
    "nameGame": "Pokemon FireRed",
    "yearRelease": 2004,
    "platforms": ["Game Boy Advance"],
    "categories": ["RPG", "Adventure"]
  }
}
```

### Deletar um Jogo Específico
**Endpoint:**

```
DELETE /api/remove?name=Pokemon%20FireRed
```

**Response:**

```json
{
  "message": "Jogo deletado com sucesso!"
}
```

### Adicionar um Jogo
**Endpoint:**

```
POST /api/add
```

**Request:**

```json
{
  "nameGame": "The Legend of Zelda: Breath of the Wild",
  "yearRelease": 2017,
  "platforms": ["Nintendo Switch", "Wii U"],
  "categories": ["Action-adventure"]
}
```

**Response:**

```json
{
  "message": "Jogo adicionado com sucesso!",
  "data": {
    "nameGame": "The Legend of Zelda: Breath of the Wild",
    "yearRelease": 2017,
    "platforms": ["Nintendo Switch", "Wii U"],
    "categories": ["Action-adventure"]
  }
}
```
