type Uid = number | string

function logDetails(uid: Uid, item: string) {
  console.log(`O produto ${item} tem o uid ${uid}`)
}

function logInfo(uid: Uid, user: string) {
  console.log(`O usuário com id ${uid} se chama ${user}`)
}

logDetails(123, 'camiseta')
logDetails('123', 'camiseta')

logInfo(23, 'Jonatas')

type Platform = 'Windows' | 'Linux' | 'Mac'

function renderPlatform(platform: Platform) {
  return `Você vai receber um computador com o sistema ${platform}!`
}

renderPlatform('Linux')
// renderPlatform('ios')
