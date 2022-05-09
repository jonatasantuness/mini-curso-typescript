// boolean

let isOpen: boolean

isOpen = true

// string

let message: string
let user: string

message = 'Hello'
user = 'Jonatas'

console.log(`Hello ${user}`)

// number

let total: number = 23

console.log(total)

let hexNum: number = 0xf00

console.log(hexNum)

// array

let items: string[]

items = ['Iphone x', 'carregador Apple', 'Fone de ouvido']

console.log(items)

let prices: Array<number>

prices = [3500, 350, 200]

console.log(prices)

// tuple

let soccerPlayer: [number, string]

soccerPlayer = [9, 'ronaldo']

console.log(soccerPlayer)

// enum

enum Colors {
  white = '#fff',
  black = '#000'
}

console.log(Colors)

// any

let coisa: any

coisa = 'qualquer coisa'

console.log(coisa)

// void

function logger(): void {
  console.log('Função sem retorno!')
}

console.log(logger())

// null | undefined

type Bla = string | undefined

// never

function testError(): never {
  throw new Error('Erro de teste')
}

// Object

let cart: object

cart = {
  items: ['Banana', 'Leite', 'Bolo'],
  total: 50.0
}

console.table(cart)
