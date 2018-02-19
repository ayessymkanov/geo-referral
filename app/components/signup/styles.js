import styled from 'styled-components'
import Form from '../form/Form'
import { Footer } from '../shared/styles'

export const SignupForm = styled(Form)`

`

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.0rem 0.75rem;
  margin-bottom: 1rem;
  border-radius: 3px;
  background-color: #eee;
  border: 1px solid #ccc;
  outline: none;
  text-align: center;

  & > img {
    position: absolute;
    left: 5px;
    height: 45px;
    widht: 45px;
  }
`

export const FBButton = styled(Button)`
  border: none;
  background-color: #3C5A96;
  color: white;
`

export const GoogleButton = styled(Button)`
  background-color: white;
  color: #639BF5;
`

export const SignupFooter = styled(Footer)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 0.1rem;
  color: #aaa;
  font-size: 0.8rem;
  text-align: center;
`
