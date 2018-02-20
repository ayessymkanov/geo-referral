import React from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import Form from '../form/Form'
import Input from '../form/Input'
import Header from '../shared/Header'
import { Button, FBButton, GoogleButton, SignupFooter } from './styles'
import { Submit, Error } from '../form/styles'
import { LinkDotted, CloseIcon } from '../shared/styles'
import BackButton from '../shared/BackBtn'
import { signup } from '../../utils/auth'

import facebook from '../../assets/facebook.svg'
import google from '../../assets/google.svg'

export default class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      name: '',
      phone: '',
      shown: 1,
      errors: {}
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (validator.isEmpty(this.state.name)) {
      this.setState((prevState, props) => ({ errors: { name: 'Name is required' }}))
    } else if (!validator.isMobilePhone(this.state.phone, 'any')) {
      this.setState((prevState, props) => ({ errors: { phone: 'Please enter proper phone number'}}))
    } else {
      signup(this.state.email)
      this.props.history.push('/waiting')
    }
  }
  handleChange = (e) => {
    e.persist()
    this.setState((prevState, props) => ({ [e.target.name]: e.target.value, errors: {} }))
  }
  goToNext = () => {
    this.setState((prevState, props) => ({ shown: prevState.shown + 1 }))
  }
  goToLast = (e) => {
    e.preventDefault()
    if (validator.isEmail(this.state.email)) {
      this.setState((prevState, props) => ({ shown: prevState.shown + 1, errors: {} }))
    }
    this.setState((prevState, props) => ({ errors: { email: 'Enter proper email' }}))
  }
  back = () => {
    this.setState((prevState, props) => ({ shown: prevState.shown - 1 }))
  }
  renderFirst = () => {
    return [
      <FBButton key="1">
        <img src={facebook} alt="" />
        Continue with Facebook
      </FBButton>,
      <GoogleButton key="2">
        <img src={google} alt=""/>
        Continue with Google
      </GoogleButton>,
      <Button key="3" onClick={this.goToNext}>Continue with Email</Button>,
      <LinkDotted key="4" to="/login">Log In</LinkDotted>
    ]
  }
  renderSecond = () => {
    return [
      <Input
        key="input"
        type="email"
        name="email"
        value={this.state.email}
        placeholder="Your Email"
        onChange={this.handleChange}
      />,
      <Error key="error">{this.state.errors.email}</Error>,
      <Button key="button" onClick={this.goToLast}>Continue with Email</Button>
    ]
  }
  renderLast = () => {
    return [
      <Input
        key="input"
        type="text"
        name="name"
        value={this.state.name}
        placeholder="Your name"
        onChange={this.handleChange}
      />,
      <Error key="error">
        {this.state.errors.name}
      </Error>,
      <Input
        key="input"
        type="tel"
        name="phone"
        value={this.state.phone}
        placeholder="Your phone"
        onChange={this.handleChange}
      />,
      <Error key="error">
        {this.state.errors.phone}
      </Error>,
      <Submit
        key="submit"
        type="submit"
        name="submit"
        value="Signup"
      />
    ]
  }
  render() {
    const { shown } = this.state
    return (
      <Form onSubmit={this.handleSubmit} key="1">
        <Header
          label="Join Geo Referral"
          LeftButton={BackButton}
          leftBtnOnClick={this.back}
          leftBtnShown={shown > 1}
          RightButton={CloseIcon}
          rightBtnOnClick={this.props.history.goBack}
          rightBtnShown
        />
        {shown === 1 && this.renderFirst()}
        {shown === 2 && this.renderSecond()}
        {shown === 3 && this.renderLast()}
        <SignupFooter>
          <p>By registering to our site you agree to the website <Link to="/terms">terms</Link>. We protect you personal privacy and security.</p>
        </SignupFooter>
      </Form>
    )
  }
}