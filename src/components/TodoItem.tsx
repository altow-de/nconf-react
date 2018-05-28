import * as React from 'react'
import { style } from 'typestyle'

const fontSize = 22

const liStyle = style({
  fontSize: `${fontSize}px`,
  listStyleType: 'none',
  marginBottom: '8px',
  textAlign: 'left',
})

const inputStyle = style({
  height: `${fontSize}px`,
  transform: 'scale(2)',
  verticalAlign: 'middle',
  width: `${fontSize}px`,
})

export interface ITodoItem {
  done: boolean
  topic: string
  toggle: () => any
}
export default ({ done, topic, toggle }: ITodoItem) => {
  const props = { checked: done, onChange: toggle }
  const input = <input className={inputStyle} type="checkbox" {...props} />
  return React.createElement('li', { className: liStyle }, input, topic)
}
