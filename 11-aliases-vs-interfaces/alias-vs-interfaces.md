# Type Alias vs Interface

## Comparação de sintaxe

Definição:

```ts
// Alias
type Game = {
  title: string
}

type DLC = {
  extra: string
}
```

```ts
// Interface
interface Game {
  title: string
}

interface DLC {
  extra: string
}
```

Intersecção:

```ts
// Alias
type GameCollection = Game & DLC
```

```ts
// Interface
interface GameCollection extends Game, DLC {}
```

Implements:

```ts
// Alias
class CreateGames implements GameCollection {}
```

```ts
// Interface
class CreateGame implements GameCollection {}
```

Declaração de função:

```ts
// Alias
type getSimilars = (title: string) => void
```

```ts
// Interface
interface getSimilars {
  (title: string): void
}
```

## Diferenças

O Type Alias permite declarar tipos primitivos. a interface não:

```ts
type ID = string | number
```

O Type Alias permite declaração de [tuplas](../5-types/types.md), a interface não:

```ts
type Tupla = [number, number]
;[1, 2] as Tupla
```

O Type Alias permite apenas uma declaração por escopo, ou seja, não permite que com o mesmo nome, esse alias seja extendido.

Já em Interfaces, é possível extender e reaproveitar o nome, caso duas interfaces com o mesmo nome sejam criadas, é feito um merge de suas propriedades.

Então se estiver criando uma biblioteca que pode ser reaproveitada, pense na utilização de interfaces, pois elas são mais "extensíveis".

```ts
// alias

type JQuery = { a: string }
type JQuery = { b: string } // Error: Duplicate identifier 'JQuery'.
```

```ts
interface JQuery {
  a: string
}

interface JQuery {
  b: string
}

const $: JQuery = {
  a: 'foo',
  b: 'bar'
}
```

## Dicas

> Programação orientada a objeto costuma utilizar mais as interfaces durante a criação de classes/objetos.

> O Type Alias consegue de forma mais simples, extender uma propriedade avulsa, exemplo: `type GameCollection = Game & DLC & { content: boolean }`.

> O Type Alias funciona melhor com tipos primitivos e implementações mais simples, ou seja, é o recomendado na maioria das vezes.

> E a dica principal é **CONSISTÊNCIA**, se o projeto já estiver utilizando interfaces por exemplo, siga o que foi implementado.
