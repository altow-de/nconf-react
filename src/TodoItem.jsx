import * as React from 'react'

export default class TodoItem extends React.Component {
  state = { done: false }
  toggleCheck() {
    this.setState({ done: !this.state.done })
  }
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={!!this.state.done}
          onChange={() => this.toggleCheck()}
        />
        {this.props.topic}
      </li>
    )
  }
}
