import styled from 'styled-components'

export const Pic = styled.div`
  position: relative;
  height: 300px;
  margin: -11px;
  margin-bottom: 0;
  background-color: #172A4B;
  overflow: hidden;
`
export const Man = styled.img`
  position: absolute;
  bottom: 80px;
  left: 20%;
  width: 200px;
  height: auto;
`
export const Pillar = styled.img`
  position: absolute;
  height: 80%;
  left: 60%;
`
export const Star = styled.div`
  position: absolute;
  border-radius: 50%;
  background: white;
  width: 5px;
  height: 5px;
  &:nth-child(1) {
    top: 50px;
    width: 3px;
    height: 3px;
    left: 123px;
  }
  &:nth-child(2) {
    top: 43px;
    left: 58px;
  }
  &:nth-child(3) {
    top: 28px;
    left: 253px;
    width: 4px;
    height: 4px;
  }
  &:last-child {
    top: 123px;
    left: 149px;
  }
`
export const SemiCircle = styled.div`
  position: absolute;
  top: calc(100% - 100px);
  left: 50%;
  transform: translateX(-50%);
  width: 1000px;
  height: 300px;
  border-radius: 50%;
  background-color: #14223C;;
`

export const Queue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 4;
`
export const QueueItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
`
export const QueueItemSpan = styled.span`
  margin-bottom: 0.5rem;
  font-size: ${props => props.count ? '3.5rem' : '1.0rem'} ;
  text-align: center;
  letter-spacing: ${props => props.count ? '0.1rem' : ''};
  color: ${props => props.count ? '#50B9DC' : 'white'};
`

export const FooterLabel = styled.span`
  margin-bottom: 1rem;
  padding: 0 0.5rem;
  line-height: 1.55;
  text-align: center;
  color: white;
  font-weight: bold;
`
