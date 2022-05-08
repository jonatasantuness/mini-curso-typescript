# Instalando o compilador e escrevendo o primeiro código

Para instalar o TypeScript execute o comando:

```bash
npm install typescript --save-dev
```

No nosso primeiro exemplo de código, vamos utilizar um botão que realizará a soma de dois números e exibir o resultado no console.

```html
<input type="number" name="num1" id="num1" />
<span>+</span>
<input type="number" name="num2" id="num2" />

<button type="button" id="button">Somar</button>
```

```js
const input1 = document.getElementById('num1')
const input2 = document.getElementById('num2')
const button = document.getElementById('button')

function sum(a, b) {
  return a + b
}

button.addEventListener('click', function () {
  console.log(sum(input1.value, input2.value))
})
```

Apesar de não dar nenhum erro durante o desenvolvimento, esse código não funcionará corretamente, isso porque ao somar os valores que vem do input, eles estarão no formato de string, e por padrão o JavaScript vai concatenar os valores ao invés de somar.

## Como o TypeScript pode nos ajudar?

Para realizar um teste, modifique a extensão do arquivo `.js` para `.ts` e tente executar o seguinte comando no diretório deste arquivo:

```bash
tsc app.ts --watch
```

Esse comando tentará compilar o arquivo `.ts` para `.js`, porém se houver algum erro no código, ele será exibido no terminal além dos warning no próprio editor.

Para arrumar o código então precisamos seguir as dicas que o prório editor dá:

- Tipar os inputs como `HTMLInputsElement`.
- Tipar os parâmetros da função `sum()`.
- Converter os valores dos inputs para tipo Number.

```ts
const input1 = document.getElementById('num1') as HTMLInputElement
const input2 = document.getElementById('num2') as HTMLInputElement
const button = document.getElementById('button')

function sum(a: number, b: number) {
  return a + b
}

button.addEventListener('click', function () {
  console.log(sum(Number(input1.value), Number(input2.value)))
})
```

> Repare que não foi necessário tipar o retorno da função `sum()`, isso porque o TypeScript é inteligente o suficiente para deduzir que o retorno só pode ser um número, dados os argumentos.

## Referências

- [TypeScript Doc](https://www.typescriptlang.org/)
