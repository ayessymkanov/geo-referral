import React from 'react'
import PropTypes from 'prop-types'
import { Header, HeaderLeft, HeaderCenter, HeaderRight } from './styles'

const Component = ({
  label,
  LeftButton,
  leftBtnOnClick,
  leftBtnShown,
  RightButton,
  rightBtnOnClick,
  rightBtnShown
}) => {
  return (
    <Header>
      <HeaderLeft>{leftBtnShown && <LeftButton onClick={leftBtnOnClick} />}</HeaderLeft>
      <HeaderCenter>{label}</HeaderCenter>
      <HeaderRight>{rightBtnShown && <RightButton onClick={rightBtnOnClick} />}</HeaderRight>
    </Header>
  )
}

Component.propTypes = {
  label: PropTypes.string,
  LeftButton: PropTypes.element,
  leftBtnOnClick: PropTypes.func,
  leftBtnShown: PropTypes.bool,
  RightButton: PropTypes.element,
  rightBtnOnClick: PropTypes.func,
  rightBtnShown: PropTypes.bool
}

Component.defaultProps = {
  label: '',
  LeftButton: null,
  leftBtnOnClick: () => {},
  leftBtnShown: false,
  RightButton: null,
  rightBtnOnClick: () => {},
  rightBtnShown: false
}

export default Component
