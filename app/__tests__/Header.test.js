import React from 'react'
import Header from '../components/shared/Header'
import renderer from 'react-test-renderer'

test('Header test', () => {
  const component = renderer.create(
    <Header label="Hello" />
  )
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

})