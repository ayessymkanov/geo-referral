import React from 'react'
import Main from '../components/main'
import renderer from 'react-test-renderer'

test('Main test', () => {
  const component = renderer.create(
    <Main label="Hello" />
  )
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

})