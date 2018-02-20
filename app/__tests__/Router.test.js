import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import Login from '../components/login'
import NotFound from '../components/notfound'
import App from '../App'

describe('Router tests', () => {
  test('non-existing route test', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/404' ]}>
        <App/>
      </MemoryRouter>
    )
    expect(wrapper.find(Login)).toHaveLength(0)
    expect(wrapper.find(NotFound)).toHaveLength(1)
  })
  
  test('existing route test', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    )
    expect(wrapper.find(Login)).toHaveLength(1)
    expect(wrapper.find(NotFound)).toHaveLength(0)
  })
})

