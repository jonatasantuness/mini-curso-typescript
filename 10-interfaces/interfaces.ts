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

residentEvil8.getSimilars(residentEvil8.title)

console.log(residentEvil8.price) // 350
// console.log(residentEvil8.price = 200)

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
