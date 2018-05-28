import * as React from 'react'

export interface ITodoItem {
  done: boolean
  topic: string
  toggle: () => any
}
export default ({ done, topic, toggle }: ITodoItem) => {
  const input = <input type="checkbox" checked={done} onChange={toggle} />
  return React.createElement('li', {}, input, topic)
}
