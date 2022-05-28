# Interfaces

São um conjunto de dados que descrevem a estrutura de algum objeto, diferente do [type aliases](../7-type-aliases-union/type-aliases-union.md) que podem descrever objetos e também pequenos conjuntos de tipos primitivos, as interfaces trabalham exclusivamente com objetos.

Na descrição das propriedades do objeto podemos colocar os tipos que as mesmas recebem, incluindo array de tipos como na propriedade `platform` e assinaturas de funções com o tipo de argumento e retorno:

```ts
interface Game {
  title: string
  description: string
  genre: string
  platform: string[]
  getSimilars: (title: string) => void
}

const residentEvil8: Game = {
  title: 'Resident Evil 8',
  description: 'Beste seller Game 2022',
  genre: 'terror',
  platform: ['PS5', 'Xbox', 'PC'],
  getSimilars: (title: string) => {
    console.log(`Games similares a ${title}: Silent Hill e The Last of Us`)
  }
}

residentEvil8.getSimilars(residentEvil8.title)
```

## Modifiers (Modificadores)

Assim como nas [classes](../9-classes/classes.md), as interfaces também possuem modificadores, por exemplo, podemos adicionar uma propriedade `price` com o modificador `readonly`, dessa forma ela não poderá ser modificada depois que for definida:

```ts
interface Game {
  ...
  readonly price: number
  ...
}

const residentEvil8: Game = {
  ...
  price: 350,
  ...
}

console.log(residentEvil8.price) // 350
console.log(residentEvil8.price = 200) // Error
```

Uma propriedade pode ser opcional, basta colocar a keyword `?` após o nome dela:

```ts
interface Game {
  title: string
  description?: string
  genre: string
  platform: string[]
  readonly price: number
  getSimilars: (title: string) => void
}

const residentEvil8: Game = {
  title: 'Resident Evil 8',
  genre: 'terror',
  platform: ['PS5', 'Xbox', 'PC'],
  price: 350,
  getSimilars: (title: string) => {
    console.log(`Games similares a ${title}: Silent Hill e The Last of Us`)
  }
}
```

## Extendendo Interfaces

As interfaces também permitem extensão, no exemplo abaixo, vamos criar um objeto que representa uma DLC de um game, para isso utilize a keyword `extends`, então as propriedades necessárias para a interface `Game` serão herdadas em `DLC`.

Para exemplificar, uma das propriedades de DLC receberá como tipo a própria interface `Games`, que precisará ser um objeto desse tipo específico:

```ts
interface DLC extends Game {
  originalGame: Game
  newContent: string[]
}

const residentEvil8Mods: DLC = {
  title: 'Resident Evil 8 Fun Mods',
  genre: 'Terror',
  price: 80,
  platform: ['PS5', 'Xbox', 'PC'],
  getSimilars: (title: string) => {
    console.log(`Games similares a ${title}: Silent Hill e The Last of Us`)
  },
  originalGame: residentEvil8,
  newContent: ['Summer zombies', 'Infinite life']
}

console.log(residentEvil8Mods)
```

## Classes a partir de Interfaces

É possível implementar classes a partir de uma interface, com o uso da keyword `implements`, dizemos ao TypeScript que a classe deverá receber as propriedades que a interface define:

```ts
class CreateGame implements Game {
  title: string
  genre: string
  platform: string[]
  price: number
  getSimilars: (title: string) => void

  constructor(
    title: string,
    genre: string,
    platform: string[],
    price: number,
    getSimilars: (title: string) => void
  ) {
    this.title = title
    this.genre = genre
    this.platform = platform
    this.price = price
    this.getSimilars = getSimilars
  }
}

const newgame: Game = new CreateGame(
  'Mortal Kombat',
  'Fight',
  ['Mega Drive', 'Super Nintendo'],
  50,
  (title: string) => console.log(`Eu amo ${title}`)
)

console.log(newgame)
console.log(newgame.getSimilars(newgame.title))
```
