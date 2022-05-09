# Types

Além dos tipos primitivos de JavaScript o TypeScript possui seu novos tipos.

## Boolean

Começando pelo primitivo Boolean (true/false), para criar uma variável com tipagem basta inserir `:` seguido do nome do tipo logo após a declaração.

```ts
let isOpen: boolean

isOpen = true
```

> Este tipo só aceita true/false, se colocar "true" como uma string o TypeScript gerar um erro.

## String

Aceita tanto string com aspas simples/duplas como template string:

```ts
let message: string
let user: string

message = 'Hello'
user = 'Jonatas'

console.log(`Hello ${user}`)
```

## Number

Podem ser int, float, hexadecimais, números binários, etc.

```ts
let total: number = 23

console.log(total)

let hexNum: number = 0xf00

console.log(hexNum)
```

## Array

Para tipar Array é necessário informar qual o tipo de dado que será inserido no nele, existem diferentes notações para declarar esse tipo:

```ts
let items: string[]

items = ['Iphone x', 'carregador Apple', 'Fone de ouvido']

console.log(items)

let prices: Array<number>

prices = [3500, 350, 200]

console.log(prices)
```

## Tuple

Esse tipo não existe no JavaScript, a tupla funciona como um Array, porém neste caso nós já sabemos o número de items dentro dele e a tipagem de cada um.

```ts
let soccerPlayer: [number, string]

soccerPlayer = [9, 'ronaldo']

console.log(soccerPlayer)
```

## Enum

É uma enumeração, que serve para criar conjuntos de chave/valor, no exemplo abaixo vamos supor que precisamos exibir um select onde o usuário escolherá cores que devemos pegar como hexadecimal, porém para o usuário é mais fácil entender o nome das cores do que o código, então podemos utilizar o `enum` para facilitar a comunicação:

```ts
enum Colors {
  white = '#fff',
  black = '#000'
}

console.log(Colors)
```

## Any

Significa literalmente qualquer dado, não é uma boa pratica utilizar essa tipagem pois seria o mesmo que não tipar, no arquivo de configuração inclusive, podemos setar a propriedade `noImplicitAny` como `true` para o TypeScript não deixar declarar `any` mesmo que implícitamente.

```ts
let coisa: any

coisa = 'qualquer coisa'

console.log(coisa)
```

## Void

O void significa algo em retorno, uma função que simplemesnte exibe um log por exemplo, pode ser declarada como void:

```ts
function logger(): void {
  console.log('Função sem retorno!')
}

console.log(logger())
```

> Neste exemplo nem precisaria tipar porque o próprio TypeScript é inteligente o suficiente para entender que implicitamente essa função é void, é só para exemplificar mesmo, porém em funções mais complexas que não terão retorno isso será necessário.

## Null | Undefined

Pode ser útil quando formos criar _types alias_ (veremos isso mais pra frente) e essa estrutura pode ser tanto uma string como pode ainda não estar definida (undefined):

```ts
type Bla = string | undefined
```

## Never

É o tipo que indica que algo nunca terá retorno, por exemplo, uma função que lança um erro não tem um retorno:

```ts
function testError(): never {
  throw new Error('Erro de teste')
}
```

## Object

Qualquer coisa que não seja um dos tipos primitivos pode ser um objeto.

```ts
let cart: object

cart = {
  items: ['Banana', 'Leite', 'Bolo'],
  total: 50.0
}

console.table(cart)
```
