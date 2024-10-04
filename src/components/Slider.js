import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../css/components/slider.scss'

function Slider() {

  const image1 = "https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984564/LightKitch/icon1_ynccqo.png";
  const image2 = "https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984564/LightKitch/icon2_xbx7ti.png";
  const image3 = "https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984564/LightKitch/icon3_gjulu0.png";
  const image4 = "https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984564/LightKitch/icon4_edozlo.png";
  const data = [image1, image2, image3, image4]
  return (
    <Carousel className='carousel'>
    {data.map((slide, index) => (  // Utilisation de index pour les clés
      <div key={index}>
        <img src={slide} alt='advantage-image' />
        <div className='slide-text'>
          <h3>Ajoutez des fonctionnalités supplémentaires à votre restaurant virtuel</h3>
        </div>
      </div>
    ))}
  </Carousel>
  )
}

export default Slider
