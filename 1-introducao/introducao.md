# Introdução

## O que é TypeScript?

O TypeScript é um supertset de JavaScript criado pela Microsoft que adiciona novas features na linguagem, como por exemplo a "Tipagem estática".

## Por que usar TypeScript?

O TypeScript evita resultados inesperados ao ajudar o desenvoledor dando dicas e alertas de quando algo não está sendo desenvolvido de acordo com as regras.

No exemplo abaixo ao somar dois números, a função retorna corretamente porém se for passado duas strings de números como argumento, o retorno será a concatenação das strings ao invés da soma:

```js
function sum(a, b) {
  return a + b
}

sum(1, 2) // 3
sum('1', '2') // 12 (Não era esse o retorno esperado)
```

O TypeScript pode funcionar como uma documentação, isso porque já temos uma definição bem explícita de como o código deve funcionar, o que as funções podem receber como argumentos, tipos de dados, etc.

```ts
type Platform = 'Windows' | 'Mac OS' | 'Linux'
type Feature = 'Single Player' | 'Multiplayer' | 'Co-op'

interface GameDetails {
  id: string
  title: string
  description: string
  platforms: Platform[]
  features: Feature[]
}
```

## Desvantagens

- Precisa ser compilado, o que pode dar mais trabalho para configurar o build da aplicação.
- Aprendizagem inicial.
- Erros nem sempre são muito claros.
