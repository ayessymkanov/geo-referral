import React from 'react'
import { Link } from 'react-router-dom'
import { Footer, ButtonLink } from '../shared/styles'
import image from '../../assets/phone.png'
import { ImageContainer, Title } from './styles'

export default class Main extends React.Component {
  render () {
    return [
      <Title>
        <h2>Help us build the referral source you want to use</h2>
      </Title>,
      <ImageContainer>
        <img src={image} />
      </ImageContainer>,
      <Footer>
        <ButtonLink to='/explanation'>Continue</ButtonLink>
        <ButtonLink to='/login' transparent>Already have an account? Log In</ButtonLink>
      </Footer>
    ]
  }
}