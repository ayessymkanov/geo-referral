import React from 'react'
import Modal from 'react-modal'
import ModalContent from '../shared/ModalContent'
import ShareModalContent from './ShareModalContent'
import { modalStyles } from '../shared/styles'
import envelope from '../../assets/envelope.png'
import { Footer } from '../shared/styles'
import { IconContainer, ShareInfo, ShareLink, ShareSpan, ShareBtn } from './styles'

// url would probably be generated with some api
const url = 'https://goo.gl/Dbwerj'

export default class ShareScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false
    }
  }
  toggleModal = () => {
    this.setState((prevState, props) => ({ modalIsOpen: !prevState.modalIsOpen }))
  }
  render() {
    return [
      <IconContainer key="1">
        <img src={envelope} alt="" />
      </IconContainer>, 
      <ShareInfo key="2">
        <ShareSpan>This is your personal invitation link</ShareSpan>
        <ShareLink>{url}</ShareLink>
        <ShareSpan>For every friend who signs up, we'll move you up the queue by at least 4000 places.</ShareSpan>
      </ShareInfo>,
      <Footer key="3">
        <ShareBtn onClick={this.toggleModal}>Share</ShareBtn>
      </Footer>,
      <Modal
        key="4"
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.toggleModal}
        style={modalStyles}
      >
        <ModalContent label="Share Referral Link">
          <ShareModalContent url={url} />
        </ModalContent>
      </Modal>
    ]
  }
}