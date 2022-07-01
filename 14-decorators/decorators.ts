// Class Decorator

function setAPIVersion(apiVersion: String) {
  return constructor => {
    return class extends constructor {
      version = apiVersion
    }
  }
}

@setAPIVersion('1.0.0')
class API {}

console.log(new API())

// Property Decorator

function titleMinLength(length: number) {
  return (target: any, key: string) => {
    let lengthValue = target[key]

    const getter = () => lengthValue

    const setter = (value: string) => {
      if (value.length < length) {
        console.log(
          `Erro: A propriedade ${key} deve ter pelo menos ${length} caracteres!`
        )
      } else {
        lengthValue = value
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter
    })
  }
}

class Movie {
  @titleMinLength(50)
  title: string

  constructor(t: string) {
    this.title = t
  }
}

const titanic = new Movie('Titanic')

console.log(titanic)

// Method Decorator

function delay(ms: number) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value // O value é a função original

    descriptor.value = function (...args: any) {
      console.log(`Esperando ${ms / 1000} segundos para executar...`)

      setTimeout(() => {
        originalMethod.apply(this, args)
      }, ms)

      return descriptor
    }
  }
}

class Greeter {
  greeting: string

  constructor(g: string) {
    this.greeting = g
  }

  @delay(3000)
  greet() {
    console.log(`Hello! ${this.greeting}`)
  }
}

const fulano = new Greeter('Fulano da Silva')

fulano.greet()
