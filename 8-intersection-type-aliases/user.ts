type AccountInfo = {
  id: number
  name: string
  email?: string
}

const jonatas_account: AccountInfo = {
  id: 23,
  name: 'Jonatas Antunes',
  email: 'jonatas@teste.com.br'
}

console.log(jonatas_account)

type CharInfo = {
  nickname: string
  level: number
}

type PlayerInfo = AccountInfo & CharInfo

const jonatas_char: PlayerInfo = {
  id: 23,
  name: 'Jonatas Antunes',
  email: 'jonatas@teste.com.br',
  nickname: 'Johnny Dark',
  level: 10
}

console.log(jonatas_char)
