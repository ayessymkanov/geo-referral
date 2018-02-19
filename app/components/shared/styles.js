import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  max-width: 100vw;
  width: 480px;
  height: 100vh;
  display: flex;
  padding: 0.75rem;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  background: #14233D;
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  flex: 3;
  justify-content: flex-end;
`

export const LinkDotted = styled(Link)`
  align-self: center;
  border-bottom: 1px dotted;
  text-decoration: none;
`

export const ButtonLink = styled(Link)`
  display: block;
  margin-bottom: 0.5rem;
  padding: 1rem;
  border-radius: 3px;
  background-color: ${props => props.transparent ? 'transparent' : '#00A3DB'};
  background-color: ${props => props.muted ? '#434F64' : ''}; 
  color: ${props => props.transparent ? '#00A3DB' : 'white'};
  font-size: ${props => props.large ? '1.2rem' : '1.0rem'};
  text-align: center;
  text-decoration: none;
  font-weight: bold;
`

export const CloseIcon = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  cursor: pointer;
  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 14px;
    height: 3px;
    border-radius: 10px;
    background-color: #888;
  }
  &::after {
    left: 0;
    transform-origin: left center;
    transform: rotateZ(45deg);
  }
  &::before {
    right: 0;
    transform-origin: right center;
    transform: rotateZ(-45deg);
  }
`

export const BackBtn = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
`
export const Stick = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  width: 100%;
  height: 4px;
  border-radius: 3px;
  background-color: #888;
  &::before, 
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 50%;
    height: 100%;
    border-radius: 3px;
    background-color: inherit;
    transform-origin: left center;
  }
  &::before {
    top: -1px;
    transform: rotateZ(45deg);
  }
  &::after {
    top: 1px;
    transform: rotateZ(-45deg);
  }
`

export const Header = styled.div`
  padding: 10px 0;
  display: flex;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #ccc;
  text-align: center;
  color: #3C8DBC;
  font-weight: bold;
`
export const HeaderLeft = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
`
export const HeaderCenter = styled.div`
  flex: 5;
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex: 1;
`

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Label = styled.span`
  color: black;
`
export const Close = styled(CloseIcon)`
  position: absolute;
  top: -10px;
  right: -10px;
`
export const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bottom: 'auto',
    width: '400px',
    height: 'auto'
  }
}
