import 'chai/register-should'
import { shallow, mount } from 'enzyme'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('able to add todos', () => {
  const app = mount(<App />)
  const value = 'hey'
  const syntheticKeyEvent = { currentTarget: { value }, key: 'Enter' }
  app.html().should.not.contain('checkbox')
  app.find('input').simulate('keyPress', syntheticKeyEvent)
  app.html().should.contain('checkbox')
})
