import styled from 'styled-components'

export const Form = styled.form`
  width: 300px;
  margin: 0 auto;
  padding: 0.5rem;
  display: flex;
  height: 400px;
  flex-direction: column;
  border-radius: 3px;
  background-color: white;
`
export const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  outline: none;

  &:not([type='submit']) {
    border: 1px solid #ccc;
    &:focus {
      border: 1px solid #14233D;
    }
  }
`
export const Submit = styled(Input)`
  background-color: #D82738;
  color: white;
`

export const Error = styled.span`
  margin-bottom: 0.5rem;
  margin-top: -0.5rem;
  color: #D82738;
  font-size: 0.8rem;
`
