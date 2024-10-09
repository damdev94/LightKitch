import React from 'react'
import '../css/components/cardIntegration.scss'

function CardIntegration({number, top, bottom, right, left, text, textSide}) {

  const side = textSide
  return (
    <div className='cardIntegration-container' style={{top: top, bottom: bottom, right: right, left: left}}>
      {side ? (
        <>
          <div className='cardIntegration-left'>
            {number}
          </div>

          <div className='cardIntegration-right'>
          <p>{text}</p>
          </div>
        </>
      ) :
        <>
        <div className='cardIntegration-right' style={{textAlign: "end", marginLeft: "10px"}}>
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
