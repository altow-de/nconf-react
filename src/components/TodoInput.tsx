import * as React from 'react'

export interface ITodoInput {
  add: (topic: string) => any
  onChange: (a: string) => any
  value: string
}

type KeyPressEvent = React.KeyboardEvent<HTMLInputElement>
type ChangeEvent = React.ChangeEvent<HTMLInputElement>
const enterKeyHandler = (handler: ITodoInput['add']) => (e: KeyPressEvent) =>
  e.key === 'Enter' ? handler(e.currentTarget.value) : null

export default (props: ITodoInput) => {
  const onKeyPress = enterKeyHandler(props.add)
  const onChange = (e: ChangeEvent) => props.onChange(e.currentTarget.value)
  const inputProps = { onKeyPress, onChange, value: props.value, type: 'text' }
  return <input {...inputProps} />
}
