import * as React from 'react'
import TodoInput from '../components/TodoInput'
import TodoItem from '../components/TodoItem'

import { Consumer, ITodoProviderState } from '../store/state'

export interface ITodo {
  done: boolean
  topic: string
}
export interface ITodosState {
  todos: ITodo[]
  draft: string
}

export default class Todos extends React.Component<any, ITodosState> {
  public state: ITodosState = {
    draft: 'enterme',
    todos: [],
  }

  public render() {
    const connect = ({ value }: ITodoProviderState) => {
      const add = (topic: string) => value.addTodo(topic)
      const onChange = (fieldValue: string) => value.updateInput(fieldValue)
      const input = <TodoInput {...{ add, onChange, value: value.draft }} />
      const items = <ul>{value.todos.map(this.renderTodo.bind(this))}</ul>
      return React.createElement(React.Fragment, {}, input, items)
    }
    return React.createElement(Consumer, { children: connect })
  }
  public renderTodo({ topic, done }: ITodo) {
    const connect = ({ value }: ITodoProviderState) => {
      const toggle = () => value.toggleTodo(topic)
      return <TodoItem {...{ topic, done, toggle }} />
    }
    return React.createElement(Consumer, { key: topic, children: connect })
  }
}
