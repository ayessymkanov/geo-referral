import styled from 'styled-components'

const ColumnDirection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const IconContainer = styled(ColumnDirection)`
  justify-content: flex-end;
  flex: 4;
  & > img {
    width: 45%;
    height: auto;
  }
`

export const ShareInfo = styled(ColumnDirection)`
  justify-content: center;
  flex: 3;
`
export const ShareSpan = styled.span`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  line-height: 1.6;
  color: white;
  font-weight: bold;
  text-align: center;
`
export const ShareLink = styled(ShareSpan)`
  font-size: 1.4rem;
  color: #50B9DC;
`

export const ShareBtn = styled.button`
  padding: 1.0rem;
  border-radius: 3px;
  border: none;
  background-color: #00A3DB;
  color: white;
  font-size: 1.0rem;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  outline: none;
  cursor: pointer;
`

export const ShareContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`
