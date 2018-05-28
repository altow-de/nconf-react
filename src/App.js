import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

class App extends Component {
  state = { todos: [] }
  render() {
    const addTodo = topic => {
      const isNotDuplicate = this.state.todos.indexOf(topic) < 0
      return isNotDuplicate
        ? this.setState({ todos: [topic].concat(this.state.todos) })
        : null
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoInput add={addTodo} />
        {this.state.todos.map(topic => <TodoItem topic={topic} key={topic} />)}
      </div>
    )
  }
}

export default App
