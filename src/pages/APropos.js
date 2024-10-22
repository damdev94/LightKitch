import React, {useRef, useLayoutEffect} from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../css/pages/apropos.scss'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import MarqueeComponent from '../components/globalFooter/globalFooterComponents/MarqueeComponent';
import GlobalFooter from '../components/globalFooter/GlobalFooter'

function APropos({pageVariants}) {

  const { t } = useTranslation('apropos');
  const aproposContainer = useRef();
  const aproposTop = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aproposContainer.current,
        start: 'top top',
        end: 'bottom 150px',
        scrub: 1,
      },
    });

    tl.to(aproposTop.current, {  backgroundPosition: 'center 20%', duration: 1 }, 0); // ajuster la hauteur en même temps

    return () => {
      // Clean up on unmount
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <motion.div ref={aproposContainer} initial="initial" animate="animate" exit="exit" variants={pageVariants} className='apropos-container' >

        <div className="apropos-top" id='top' style={{ backgroundPosition: 'center 115%' }} ref={aproposTop}>
          <div className="apropos-title">
            <h1>{t('apropos.title.text')} <strong>{t('apropos.title.strong')}</strong></h1>
            <p>{t('apropos.subtitle')}</p>
          </div>
          <div className="apropos-text">
            <p>{t('apropos.text1')}</p>

            <br/>
            <br/>

            <p>{t('apropos.text2')}</p>
          </div>
          <div className="apropos-button">
            <Link to="/devenir-partenaire" className='appointement'>{t('apropos.button')} <FontAwesomeIcon style={{marginLeft : "3px"}} icon={faPenToSquare} /></Link>
          </div>
        </div>

        <div className='apropos-marquee'>
          <MarqueeComponent backgroundColor='#313131' color='white'/>
        </div>

        <div className="business-guidance">

          <div className="guidance-left">

          <div className="paragraphes">
              <p>{t('apropos.business_guidance.paragraph1')}</p>

              <br/>

              <p>{t('apropos.business_guidance.paragraph2')} </p>

              <br/>

              <p>{t('apropos.business_guidance.paragraph3')}</p>

              <br/>

              <p>{t('apropos.business_guidance.paragraph4')}</p>
            </div>

          </div>

          <div className="guidance-right">
            <div className="image-container">
              <img src='https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984569/LightKitch/test_izqcdu.png' alt='guidance_image'/>
            </div>
          </div>

        </div>

        <div className="personnal-message">
          <div className="personnal-left">
            <img src='https://res.cloudinary.com/dt04wtcwf/image/upload/v1713628623/sample.jpg' alt='random-image'/>
          </div>

          <div className="personnal-right">
            <p>{t('apropos.personnal_message.greeting')}</p>
            <br/>
            <p>{t('apropos.personnal_message.paragraph1')}</p>
            <br/>
            <p>{t('apropos.personnal_message.paragraph2')}</p>
            <br/>
            <p>{t('apropos.personnal_message.paragraph3')}</p>
            <br/>
            <p>{t('apropos.personnal_message.paragraph4')}</p>
            <br/>
            <p>{t('apropos.personnal_message.closing')}</p>
            <br/>
            <p>{t('apropos.personnal_message.signoff')}</p>
            <br/>
            <p>{t('apropos.personnal_message.signatureName')}</p>
            <p>{t('apropos.personnal_message.signature')}</p>
          </div>
        </div>

        <GlobalFooter />
    </motion.div>
  )
}

export default APropos
