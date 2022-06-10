type Todo = {
  title: string
  description: string
  completed: boolean
}

const todo: Readonly<Todo> = {
  title: 'Card de produto',
  description: 'Implementar card de produto com o MUI',
  completed: false
}

console.log('todo\n', todo)

// todo.completed = true

function updatedTodo(todo: Todo, isCompleted: Partial<Todo>) {
  return { ...todo, ...isCompleted }
}

const todoUpdated = updatedTodo(todo, { completed: true })

console.log('todoUpdated\n', todoUpdated)

type TodoOverview = Omit<Todo, 'completed'>

const todoOverview: TodoOverview = {
  title: 'Fechar tasks do Jira',
  description: 'Preencher todos os pontos das tasks'
}

console.log('todoOverview\n', todoOverview)
