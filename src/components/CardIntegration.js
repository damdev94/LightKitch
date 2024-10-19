import React from 'react'
import cookies from 'js-cookie';


import '../css/components/cardIntegration.scss'

function CardIntegration({number, top, bottom, right, left, text, textSide}) {

  const side = textSide
  const languageCode = cookies.get('i18next');

  return (
    <div className='cardIntegration-container' style={{top: top, bottom: bottom, right: right, left: left}}>
      {side ? (
        <>
          <div className='cardIntegration-left'>
            {number}
          </div>

          <div className='cardIntegration-right'style={{textAlign: languageCode === 'ar' ? 'end' : '', marginLeft : '20px'}}>
          <p>{text}</p>
          </div>
        </>
      ) :
        <>
        <div className='cardIntegration-right' style={{textAlign: languageCode === 'ar' ? "" : 'end', marginRight: "20px"}}>
          <p>{text}</p>
        </div>

        <div className='cardIntegration-left'>
          {number}
        </div>

        </>

      }

    </div>
  )
}

export default CardIntegration
