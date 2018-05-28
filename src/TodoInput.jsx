import * as React from 'react'

export default ({ add }) => {
  const onEnter = target => {
    add(target.value)
    target.value = ''
  }
  const onKeyPress = ({ key, currentTarget }) =>
    key === 'Enter' ? onEnter(currentTarget) : null

  const inputProps = { onKeyPress, type: 'text' }
  return <input {...inputProps} />
}
