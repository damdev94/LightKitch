import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../../../css/components/globalFooter/globalFooterComponent/deliveryPlatform.scss'

gsap.registerPlugin(ScrollTrigger);

function DeliveryPlatforms() {

  const yassir = useRef(null);
  const uber = useRef(null);
  const deliveroo = useRef(null);
  const justEat = useRef(null);
  const lightKitch =  useRef(null);

  useLayoutEffect(() => {
    gsap.to(yassir.current, {
      yPercent: -350,
      duration: 2,
        scrollTrigger: {
          trigger: yassir.current,
          toggleActions: 'play reverse play reverse',
          start: 'top 1350px',
          scrub: 2,
        }
    })

    gsap.to(uber.current, {
      yPercent: -350,
      duration: 2,
        scrollTrigger: {
          trigger: uber.current,
          toggleActions: 'play reverse play reverse',
          start: 'top 1350px',
          scrub: 2,
        }
    })

    gsap.to(deliveroo.current, {
      yPercent: -350,
      duration: 2,
        scrollTrigger: {
          trigger: deliveroo.current,
          toggleActions: 'play reverse play reverse',
          start: 'top 1350px',
          scrub: 2,
        }
    })

    gsap.to(justEat.current, {
      yPercent: -350,
      duration: 2,
        scrollTrigger: {
          trigger: justEat.current,
          toggleActions: 'play reverse play reverse',
          start: 'top 1350px',
          scrub: 2,
        }
    })

    gsap.to(lightKitch.current, {
      yPercent: -300,
      duration: 6,
        scrollTrigger: {
          trigger: lightKitch.current,
          toggleActions: 'play reverse play reverse',
          start: 'top 1350px',
          scrub: 2,
        }
    })
  }, [])

  return (
    <div className='deliveryPlatforms-content'>
      <img className='main-image' src='https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984569/LightKitch/imgtrans_irluyg.png'alt='delivery'/>

      <img
        className='logo-image yassir-logo'
        src='https://res.cloudinary.com/dt04wtcwf/image/upload/v1728283882/LightKitch/yassir_rwhgxl.png'
        alt='yassir'
        ref={yassir}
      />

      <img
        className='logo-image uber-logo'
        src='https://res.cloudinary.com/dt04wtcwf/image/upload/v1728283882/LightKitch/uberEat_dsmpg3.png'
        alt='uber-logo'
        ref={uber}
      />

      <img
        className='logo-image deliveroo-logo'
        src='https://res.cloudinary.com/dt04wtcwf/image/upload/v1728283882/LightKitch/deliveroo_u2ie5x.png'
        alt='deliveroo-logo'
        ref={deliveroo}
      />

      <img
        className='logo-image justEat-logo'
        src='https://res.cloudinary.com/dt04wtcwf/image/upload/v1728283882/LightKitch/justEat_mpnj6k.png'
        alt='justEat-logo'
        ref={justEat}
      />

      <img
        className='logo-image lightKitch-logo'
        src='https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984569/LightKitch/logolksmall_orq5fg.png' alt='lightKitch-logo'
        ref={lightKitch}
      />
    </div>
  )
}

export default DeliveryPlatforms
