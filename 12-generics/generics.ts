type numberOrString = number | string

function useState<S extends numberOrString = number>() {
  let state: S

  function getState() {
    return state
  }

  function setState(newState: S) {
    state = newState
  }

  return { getState, setState }
}

const newState = useState()

newState.setState(23)

console.log(newState.getState()) // 23

/* newState.setState('Hello')

console.log(newState.getState()) // Hello */
