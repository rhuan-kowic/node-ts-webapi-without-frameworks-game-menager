# Game Manager

## Descricao

Uma aplicação RESTful que se conecta a um banco de dados para centralizar as informações dos jogos.

## Features

- Listar todos os jogos
- Listar jogos por console
  - Exemplo: Nintendo DS, PSP, PS2.
- Editar um jogo especifico.
- Deletar um jogo especifico.
- Adicionar um jogo

## Implementacao

### Listar todos os jogos.

GET: retorna uma lista de jogos.
response:

```
[
  {
    'nameGame': 'Pokemon FireRed',
    'yearRelease': 2004,
    'plataforms': ['Game Boy Advance'],
    'categories': ['RPG'],
  },
  {
    'nameGame': 'League of Legends',
    'yearRelease': 2009,
    'plataforms': ['Windows', 'MacOS'],
    'categories': ['MOBA'],
  }
]
```

### Listar jogos por console

GET: Listar jogos por console. Passa um parametro do console expecifico.
Exemplo: 'Game Boy Advance'.
response:

```
[
  {
    'nameGame': 'Pokemon FireRed',
    'yearRelease': 2004,
    'plataforms': ['Game Boy Advance'],
    'categories': ['RPG'],
  },
]
```

### Editar um jogo especifico

PUT: Atualiza as informações de um jogo específico. Deve passar o nome do jogo na URL e os dados atualizados no corpo da requisição.
Exemplo: 'Pokemon FireRed'
request:

```
{
  "nameGame": "Pokemon FireRed",
  "yearRelease": 2004,
  "plataforms": ["Game Boy Advance"],
  "categories": ["RPG", "Adventure"]
}
```

response:

```
{
  "message": "Jogo atualizado com sucesso!",
  "game": {
    "nameGame": "Pokemon FireRed",
    "yearRelease": 2004,
    "plataforms": ["Game Boy Advance"],
    "categories": ["RPG"]
  }
}

```

### Deletar um jogo especifico

DELETE: Remove um jogo específico do banco de dados. Deve passar o nome do jogo na URL.

response:

```
{
  "message": "Jogo deletado com sucesso!"
}

```

### Adicionar um jogo

require:

```
{
  "nameGame": "The Legend of Zelda: Breath of the Wild",
  "yearRelease": 2017,
  "plataforms": ["Nintendo Switch", "Wii U"],
  "categories": ["Action-adventure"]
}

```

response:

```
{
  "message": "Jogo adicionado com sucesso!",
  "game": {
    "nameGame": "The Legend of Zelda: Breath of the Wild",
    "yearRelease": 2017,
    "plataforms": ["Nintendo Switch", "Wii U"],
    "categories": ["Action-adventure"]
  }
}

```
