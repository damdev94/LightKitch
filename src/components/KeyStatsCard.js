import React from 'react'
import '../css/components/keyStatsCard.scss'

function KeyStatsCard({statsText, stats}) {
  return (
    <div className='key-stats-card-container'>
      <div className='statsText'>
        <h3>{statsText}</h3>
      </div>
      <div className='stats'>
        <p>{stats}</p>
      </div>
    </div>
  )
}

export default KeyStatsCard
