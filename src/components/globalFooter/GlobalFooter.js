import React from 'react'
import Faq from './globalFooterComponents/Faq'
import MarqueeComponent from './globalFooterComponents/MarqueeComponent'
import DeliveryPlatforms from './globalFooterComponents/DeliveryPlatforms'
import Join from './globalFooterComponents/Join'
import '../../css/components/globalFooter/globalFooter.scss'

function GlobalFooter() {
  return (
    <div className='globalFooter-content'>

      <div className='faq-container'>

        <div className='faq-content'>
            <Faq />
        </div>

      </div>

      <div className='marquee-container'>
          <MarqueeComponent backgroundColor='rgba(255, 180, 0, 1)' color= 'black'/>
      </div>

      <div className='deliveryPlatforms-container' >
          <DeliveryPlatforms />
      </div>

      <div className='join-container'>
          <Join />
      </div>

    </div>
  )
}

export default GlobalFooter
