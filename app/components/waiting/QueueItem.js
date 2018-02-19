import React from 'react'
import PropTypes from 'prop-types'
import { QueueItem, QueueItemSpan } from './styles'

const Component = ({ count, label }) => {
  const countToRender = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return (
    <QueueItem>
      <QueueItemSpan count>{count === 0 ? 'no one' : countToRender}</QueueItemSpan>
      <QueueItemSpan>{label}</QueueItemSpan>
    </QueueItem>
  )
}

Component.propTypes = {
  count: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
}

export default Component
