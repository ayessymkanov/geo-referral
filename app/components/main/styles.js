import styled from 'styled-components'

export const ImageContainer = styled.div`
  height: 60%;
  margin: 0 auto;

  & > img {
    height: 100%;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  flex: 3;
  color: white;
  text-align: center;
  padding: 1rem 0;

  & > h2 {
    font-size: 2.0rem;
    line-height: 1.7;
    font-weight: bold;
  }
`
