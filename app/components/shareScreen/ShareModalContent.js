import React from 'react'
import PropTypes from 'prop-types'
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  GooglePlusShareButton,
  GooglePlusIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share'
import { ShareContent } from './styles'

const quote = 'The referrals of the future Geo Referral are coming. Get early access with my link: '

const Component = ({ url }) => (
  <ShareContent>
    <FacebookShareButton url={url} quote={quote}>
      <FacebookIcon round size={30} />
    </FacebookShareButton>
    <TwitterShareButton url={url} title={quote}>
      <TwitterIcon round size={30} />
    </TwitterShareButton>
    <GooglePlusShareButton url={url} >
      <GooglePlusIcon round size={30} />
    </GooglePlusShareButton>
    <LinkedinShareButton url={url} title={quote}>
      <LinkedinIcon round size={30} />
    </LinkedinShareButton>
    <WhatsappShareButton url={url} title={quote}>
      <WhatsappIcon round size={30} />
    </WhatsappShareButton>
    <TelegramShareButton url={url} title={quote}>
      <TelegramIcon round size={30} />
    </TelegramShareButton>
    <EmailShareButton subject='Geo Referral' body={`${quote} ${url}`}>
      <EmailIcon round size={30} />
    </EmailShareButton>
  </ShareContent>
)

Component.propTypes = {
  url: PropTypes.string.isRequired
}

export default Component
