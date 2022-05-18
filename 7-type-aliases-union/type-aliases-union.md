# Type Aliases e Union

## Type Union

O tipo Union pode ser utilizado quando um dado pode ter mais de 1 tipo, no exemplo abaixo a função recebe um argumento `uid` que pode ser tanto um `number` quanto uma `string`:

```js
function logDetails(uid: number | string, item: string) {
  console.log(`O produto com ${uid} tem o título de ${item}`)
}

logDetails(123, 'camiseta')
logDetails('123', 'camiseta')
```

## Type Alias

Com base no mesmo exemplo acima, vamos supor que precisamos de outra função que também receba como argumento o `uid`, para não ficar repetindo o mesmo código, um type Alias pode ser criado para reutilizar o conjunto de tipos:

```js
type Uid = number | string // type alias

function logDetails(uid: Uid, item: string) {
  console.log(`O produto ${item} tem o uid ${uid}`)
}

function logInfo(uid: Uid, user: string) {
  console.log(`O usuário com id ${uid} se chama ${user}`)
}

logDetails(123, 'camiseta')
logDetails('123', 'camiseta')

logInfo(23, 'Jonatas')
```

O type Alias também pode definir tipos customizados não primitivos, no exemplo abaixo estamos definindo um tipo chamado `Platform` que só será valido dentro dessas 3 strings:

```js
type Platform = 'Windows' | 'Linux' | 'Mac'

function renderPlatform(platform: Platform) {
  return `Você vai receber um computador com o sistema ${platform}!`
}

renderPlatform('Linux')
renderPlatform('ios') // Isso irá gerar um erro
```
