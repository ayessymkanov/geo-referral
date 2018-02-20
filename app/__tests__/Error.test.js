import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Error from '../components/form/Error'

configure({ adapter: new Adapter() })

describe('Error component test', () => {
  it('message prop', () => {
    const component = shallow(<Error message='wrong password'/>)
    expect(component).toMatchSnapshot()
  })
})