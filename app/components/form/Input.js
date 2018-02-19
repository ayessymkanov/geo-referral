import React from 'react'
import PropTypes from 'prop-types'
import { Input } from './styles'

export default class Component extends React.Component {
  render () {
    const {
      type,
      name,
      value,
      placeholder,
      onChange,
      required
    } = this.props
    return (
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    )
  }
}

Component.propsTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool
}

Component.defaultProps = {
  placeholder: '',
  required: false
}
