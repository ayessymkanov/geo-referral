import React from 'react'
import PropTypes from 'prop-types'
import { Form } from './styles'

export default class Component extends React.Component {
  render () {
    const { onSubmit, children } = this.props
    return (
      <Form onSubmit={onSubmit}>
        {children}
      </Form>
    )
  }
}

Component.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
