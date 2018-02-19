import React from 'react'
import PropTypes from 'prop-types'
import { BackBtn, Stick } from './styles'

const Component = ({ onClick }) => {
  return (
    <BackBtn onClick={onClick}>
      <Stick />
    </BackBtn>
  )
}

Component.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Component
