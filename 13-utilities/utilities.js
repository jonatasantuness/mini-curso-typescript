var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todo = {
    title: 'Card de produto',
    description: 'Implementar card de produto com o MUI',
    completed: false
};
console.log('todo\n', todo);
// todo.completed = true
function updatedTodo(todo, isCompleted) {
    return __assign(__assign({}, todo), isCompleted);
}
var todoUpdated = updatedTodo(todo, { completed: true });
console.log('todoUpdated\n', todoUpdated);
var todoOverview = {
    title: 'Fechar tasks do Jira',
    description: 'Preencher todos os pontos das tasks'
};
console.log('todoOverview\n', todoOverview);
