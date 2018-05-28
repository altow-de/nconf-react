export interface ITodo {
  done: boolean
  topic: string
}
export interface ITodosState {
  todos: ITodo[]
  draft: string
}

const todoMatch = (match: string) => (todo: ITodo) => todo.topic === match

export default class TodosState {
  public draft = ''
  public todos: ITodo[] = []

  public updateInput(draft: string) {
    this.draft = draft
  }

  public addTodo(topic: string) {
    const isNotDuplicate = this.todos.findIndex(todoMatch(topic)) < 0
    const isNotEmpty = topic !== ''
    const shouldBeAdded = isNotDuplicate && isNotEmpty
    const todos = [{ done: false, topic }].concat(this.todos)
    return shouldBeAdded ? ((this.todos = todos), (this.draft = '')) : null
  }

  public toggleTodo(topic: string) {
    const todoIndex = this.todos.findIndex(todoMatch(topic))
    this.todos[todoIndex].done = !this.todos[todoIndex].done
  }
}
