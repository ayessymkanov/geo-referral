import React from 'react'
import { Question, AnswerButton } from './styles'

export default class Component extends React.Component {
  remark = (value) => {
    document.cookie = `Remarked=${value}, expires=31 Dec 2019`
    this.props.onClick()
  }
  render() {
    const { onClick } = this.props
    return [
      <Question key="1">Do you sell Residential Real Estate?</Question>,
      <AnswerButton key="2" onClick={() => this.remark(true)}>Yes</AnswerButton>,
      <AnswerButton key="3" onClick={() => this.remark(false)}>No</AnswerButton>
    ]
  }
}