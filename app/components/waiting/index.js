import React from 'react'
import QueueItem from './QueueItem'
import { Pic, Queue, Man, Pillar, Star, SemiCircle, FooterLabel } from './styles'
import { Footer, ButtonLink } from '../shared/styles'
import man from '../../assets/man.png'
import pillar from '../../assets/pillar.png'

const stars = [1,2,3,4];

export default class Waiting extends React.Component {
  renderStars = (item) => {
    return <Star key={item} />
  }
  render () {
    return [
      <Pic key="pic">
        <Man src={man} />
        <Pillar src={pillar} />
        <SemiCircle />
        <div>
          {stars.map((item) => this.renderStars(item))}
        </div>
      </Pic>,
      <Queue key="queue">
        <QueueItem count={34934} label='People ahead of you' />
        <QueueItem count={0} label='Behind' />
      </Queue>,
      <Footer key="footer">
        <FooterLabel>Demand for Geo Referrals has been incredible and we are generating referrals as fast as we can</FooterLabel>
        <ButtonLink to='/share'>Bump Me up the Queue</ButtonLink>
        <ButtonLink to='/' muted>Notify Me When My First Referral is Ready</ButtonLink>
      </Footer>
    ]
  }
}
