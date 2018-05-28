import * as React from 'react'
import TodoInput from '../components/TodoInput'
import TodoItem from '../components/TodoItem'

export interface ITodo {
  done: boolean
  topic: string
}
export interface ITodosState {
  todos: ITodo[]
  draft: string
}

const todoMatch = (match: string) => (todo: ITodo) => todo.topic === match

export default class Todos extends React.Component<any, ITodosState> {
  public state: ITodosState = {
    draft: 'enterme',
    todos: [],
  }

  public updateInput(draft: string) {
    this.setState({ draft })
  }

  public addTodo(topic: string) {
    const isNotDuplicate = this.state.todos.findIndex(todoMatch(topic)) < 0
    const todos = [{ done: false, topic }].concat(this.state.todos)
    return isNotDuplicate ? this.setState({ todos, draft: '' }) : null
  }

  public toggleTodo(topic: string) {
    const todoIndex = this.state.todos.findIndex(todoMatch(topic))
    type updateTodoHandler = ((prevState: Readonly<ITodosState>) => ITodosState)
    const updateTodo: updateTodoHandler = state => {
      state.todos[todoIndex].done = !state.todos[todoIndex].done
      return state
    }
    this.setState(updateTodo)
  }

  public render() {
    const inputProps = {
      add: (value: string) => this.addTodo(value),
      onChange: (value: string) => this.updateInput(value),
      value: this.state.draft,
    }
    const input = <TodoInput {...inputProps} />
    const items = <ul>{this.state.todos.map(this.renderTodo.bind(this))}</ul>
    return React.createElement(React.Fragment, {}, input, items)
  }
  public renderTodo({ topic, done }: ITodo) {
    const toggle = () => this.toggleTodo(topic)
    const props = { key: topic, topic, done, toggle }
    return <TodoItem {...props} />
  }
}
