class UserAccount {
  public name: String
  protected age: Number

  constructor(name: String, age: Number) {
    this.name = name
    this.age = age
  }

  logDetails(): void {
    console.log(`O jogador ${this.name} possui ${this.age} anos de idade.`)
  }
}

const jonatas = new UserAccount('Jonatas', 30)

console.log(jonatas)
console.log(jonatas.name)

jonatas.logDetails()

class CharAccount extends UserAccount {
  private nickname: String
  readonly level: Number

  constructor(name: String, age: Number, nickname: String, level: Number) {
    super(name, age)

    this.nickname = nickname
    this.level = level
  }

  get getLevel() {
    console.log('obtendo o level!')
    return this.level
  }

  set setName(name: String) {
    this.name = name
  }

  showNickname(): void {
    console.log(`O nickname do user ${this.name} é ${this.nickname}`)
  }

  showBirthdayUser(): void {
    console.log(`O jogador tem ${this.age} anos de idade`)
  }
}

const johnnyaccount = new CharAccount('Jonatas', 29, 'johnnysk8', 10)

johnnyaccount.logDetails()

// johnnyaccount.nickname = 'johnnycash'

johnnyaccount.showNickname()

console.log(johnnyaccount.level)

// johnnyaccount.level = 23

johnnyaccount.showBirthdayUser()

// console.log(johnnyaccount.age)

console.log(johnnyaccount.getLevel)

johnnyaccount.setName = 'Johnny'

console.log(johnnyaccount.name)

abstract class ClasseAbstrata {
  readonly teste: String

  constructor(teste: String) {
    this.teste = teste
  }
}

// const testeClasseAbstrada = new ClasseAbstrata('teste')
