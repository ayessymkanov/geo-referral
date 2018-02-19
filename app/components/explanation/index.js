import React from 'react'
import Modal from 'react-modal'
import ModalContent from '../shared/ModalContent'
import Question from './Question'
import one from '../../assets/one.png'
import two from '../../assets/two.png'
import { Title, Main, Thing, Para } from './styles'
import { Footer, ButtonLink, modalStyles } from '../shared/styles'

export default class Explanation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: !document.cookie.includes('Remarked')
    }
  }
  closeModal = () => {
    this.setState((prevState, props) => ({ modalIsOpen: !prevState.modalIsOpen}))
  }
  render() {
    return [
      <Modal
        key="0"
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        contentLabel="Please share a little more info"
        style={modalStyles}
        ariaHideApp={false}
      >
        <ModalContent label="Please share a little more info" closeModal={this.closeModal}>
          <Question onClick={this.closeModal} />
        </ModalContent>
      </Modal>,
      <Title key="1">
        <h1>One more thing (actually two)</h1>
      </Title>,
      <Main key="2">
        <Thing>
          <img src={one} alt="" width="70" />
          <Para>
            There's been incredible demand for Geo Referral.We're generating referrals 
            as fast as we can, but there's still a bit of a waiting list
          </Para>
        </Thing>
        <Thing>
          <img src={two} alt="" width="70" />
          <Para>
            Once your referral is ready, we'll ask you to accept or decline the prospect.
            If you accept the referral, you pay a referral fee of 20 - 25% if/when the deal is closed.
          </Para>
        </Thing>
      </Main>,
      <Footer key="3">
        <ButtonLink to="/signup" large>Join Geo Referral</ButtonLink>
        <ButtonLink to="/login" transparent>Already have an account? Log In</ButtonLink>
      </Footer>
    ] 
  }
}