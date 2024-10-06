import React from 'react'
import "../css/components/littleSkillCard.scss"

function SkillCard({img, title, text, top, left, right, bottom, height, width}) {
  return (

    <div className='skillCard-container' style={{top: `${top}`, left: `${left}`, right: `${right}`, bottom: `${bottom}`, height: `${height}`, width: `${width}`}}>
      <div
        className='skillCard-left'
        style={{backgroundImage : `url(${img})`, backgroundSize : "cover", backgroundRepeat : 'no-repeat', backgroundPosition : 'center', borderRadius : '10px 0 0 10px' }}>
      </div>
      <div className='skillCard-right'>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default SkillCard
