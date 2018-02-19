import React from 'react'
import QueueItem from './QueueItem'
import { Pic, Queue, Man, Pillar, Star, SemiCircle, FooterLabel } from './styles'
import { Footer, ButtonLink } from '../shared/styles'
import man from '../../assets/man.png'
import pillar from '../../assets/pillar.png'

export default class Waiting extends React.Component {
  render () {
    return [
      <Pic key='0'>
        <Man src={man} />
        <Pillar src={pillar} />
        <SemiCircle />
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </Pic>,
      <Queue key='1'>
        <QueueItem count={34934} label='People ahead of you' />
        <QueueItem count={0} label='Behind' />
      </Queue>,
      <Footer key='2'>
        <FooterLabel>Demand for Geo Referrals has been incredible and we are generating referrals as fast as we can</FooterLabel>
        <ButtonLink to='/share'>Bump Me up the Queue</ButtonLink>
        <ButtonLink to='/' muted>Notify Me When My First Referral is Ready</ButtonLink>
      </Footer>
    ]
  }
}