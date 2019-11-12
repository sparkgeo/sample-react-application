import React from 'react'
import ReactDOM from 'react-dom'
import SampleWidget from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<SampleWidget />, div)
  ReactDOM.unmountComponentAtNode(div)
})
