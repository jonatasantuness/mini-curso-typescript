function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
var newState = useState();
newState.setState(23);
console.log(newState.getState()); // 23
/* newState.setState('Hello')

console.log(newState.getState()) // Hello */
