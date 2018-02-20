import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Input from '../components/form/Input'

configure({ adapter: new Adapter() })

describe('Input component test', () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <Input
        type="text"
        name="login"
        value="hello"
        placeholder="Enter login"
        onChange={() => {}}
        required
      />
    )
  })

  it('props test', () => {
    expect(component.prop('type')).toEqual('text')
    expect(component.prop('name')).toEqual('login')
    expect(component.prop('value')).toEqual('hello')
    expect(component.prop('placeholder')).toEqual('Enter login')
  })
})

