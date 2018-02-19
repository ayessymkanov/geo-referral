import React from 'react'
import resetStyles from './resetStyles'
import Router from './router'
import { Container } from './components/shared/styles'

export default () => {
  resetStyles()
  return (
    <Container>
      <Router />
    </Container>
  )
}
