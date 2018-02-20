import React from 'react'
import { NotifyContainer } from './styles'
import { Footer, ButtonLink } from '../shared/styles'

export default () => {
  return [
    <NotifyContainer key="notify">Thanks! We'll send an email once your queue will be close.</NotifyContainer>,
    <Footer key="footer">
      <ButtonLink to='/waiting'>Go Back</ButtonLink>
    </Footer>
  ]
}
