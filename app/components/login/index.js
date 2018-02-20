import React from 'react'
import validator from 'validator'
import Form from '../form/Form'
import Input from '../form/Input'
import Header from '../shared/Header'
import Error from '../form/Error'
import { Submit } from '../form/styles'
import { LinkDotted, CloseIcon } from '../shared/styles'
import BackButton from '../shared/BackBtn';
import { login } from '../../utils/auth'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: '',
        login: ''
      }
    }
  }
  handleChange = (e) => {
    e.persist()
    this.setState({ [e.target.name]: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (!validator.isEmail(this.state.email)) {
      this.setState({ errors: { email: 'Enter proper email' } })
    } else if (validator.isEmpty(this.state.password)){
      this.setState({ errors: { password: 'Please provide password' } })
    } else {
      const res = login({ email: this.state.email, password: this.state.password })
      if (res.status === 'Success') {
        this.setState({ errors: {}}, () => {
          this.props.history.push('/waiting')
        })
      } else {
        this.setState({ errors: { login: res.error}})
      }
    }
  }
  render() {
    const { errors: { email, password, login } } = this.state
    console.log(email)
    return (
      <Form onSubmit={this.handleSubmit}>
        <Header
          label="Existing member"
          LeftButton={BackButton}
          leftBtnOnClick={this.props.history.goBack}
          leftBtnShown
          RightButton={CloseIcon}
          rightBtnOnClick={this.props.history.goBack}
          rightBtnShown
        />
        <Input
          type="email"
          name="email"
          value={this.state.email}
          placeholder="Your Email"
          onChange={this.handleChange}
        />
        <Error message={email} />
        <Input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Phone(used as password)"
          onChange={this.handleChange}
        />
        <Error message={password} />
        <Submit
          type="submit"
          name="submit"
          value="Login"
        />
        <Error message={login} />
        <LinkDotted to="/signup">Sign up</LinkDotted>
      </Form>
    )
  }
}