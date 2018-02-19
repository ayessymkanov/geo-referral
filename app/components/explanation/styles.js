import styled from 'styled-components'

export const Title = styled.div`
  display: flex;
  flex: 3;
  justify-content: center;
  align-items: flex-end;
  & > h1 {
    margin-bottom: 2rem;
    color: white;
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
  }
`

const ColumnDirection = styled.div`
  display: flex;
  flex-direction: column;
`
export const Main = styled(ColumnDirection)`
  justify-content: space-around;
  flex: 5;
`

export const Thing = styled(ColumnDirection)`
  align-items: center;
  line-height: 1.6rem;
  font-size: 1.1rem;
  text-align: center;
  font-weight: bold;
`

export const Para = styled.p`
  color: white;
`
export const Question = styled.span`
  font-size: 1.2rem;
  margin: 1.0rem;
  color: black;
`
export const AnswerButton = styled.button`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: none;
  border-radius: 3px;
  font-size: 1.0rem;
  font-weight: bold;
  background: #1A527A;
  color: white;
  text-align: center;
  outline: none;
`
