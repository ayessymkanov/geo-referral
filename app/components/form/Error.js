import React from 'react'
import PropTypes from 'prop-types'
import { Error } from './styles'

const Component = ({ message }) => <Error>{ message }</Error>

Component.propTypes = {
  message: PropTypes.string.isRequired
}

export default Component
