import React from 'react'
import Marquee from "react-fast-marquee";
import '../../../css/components/globalFooter/globalFooterComponent/marqueeComponent.scss'

function MarqueeComponent({backgroundColor, color}) {
  return (
    <Marquee className='marqueeComponent-container' style={{backgroundColor: backgroundColor, color : color}}>
      <p className='point'>·</p>
      <p className='word'>Croissance</p>
      <p className='point'>·</p>
      <p className='word'>Simplicité</p>
      <p className='point'>·</p>
      <p className='word'>Optimisation</p>
      <p className='point'>·</p>
      <p className='word'>Visibilité</p>
      <p className='point'>·</p>
      <p className='word'>Rentabilité</p>
      <p className='point'>·</p>
      <p className='word'>Innovation</p>
      <p className='point'>·</p>
      <p className='word'>Expertise</p>
      <p className='point'>·</p>
      <p className='word'>Partenariat</p>
      <p className='point'>·</p>
      <p className='word'>Succès</p>
      <p className='point'>·</p>
      <p className='word'>Accompagnement</p>
      <p className='point'>·</p>
      <p className='word'>Performance</p>
      <p className='point'>·</p>
      <p className='word'>Transformation</p>
    </Marquee>
  )
}

export default MarqueeComponent
