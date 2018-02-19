import React from 'react'
import PropTypes from 'prop-types'
import { ModalContent, Close, Label } from './styles'

export default class Component extends React.Component {
  render () {
    const { label, children, closeModal } = this.props
    return (
      <ModalContent>
        <Close onClick={closeModal} />
        <Label>{label}</Label>
        {children}
      </ModalContent>
    )
  }
}

Component.propTypes = {
  label: PropTypes.string.isRequired,
  closeModal: PropTypes.func
}

Component.defaultProps = {
  closeModal: () => {}
}
