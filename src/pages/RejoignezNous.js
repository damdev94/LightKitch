import React, { useRef, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import MarqueeComponent from '../components/globalFooter/globalFooterComponents/MarqueeComponent';
import GlobalFooter from '../components/globalFooter/GlobalFooter'
import emailjs from '@emailjs/browser';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../css/pages/rejoignezNous.scss';

function RejoignezNous({pageVariants}) {

  const [isMessageSent, setIsMessageSent] = useState(false)

  const form = useRef();
  const rejoignezNousTop = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rejoignezNousTop.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
      },
    });

    tl.to(rejoignezNousTop.current, {  height: '38vw', duration: 0.1}, 0); // ajuster la hauteur en même temps

    return () => {
      // Clean up on unmount
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_rm0f57g',
      'template_526fgh9',
      form.current,
      '2gCBvqQQD35UrTqt_'
    )
    .then((result) => {
      console.log(result.text);
      setIsMessageSent(true)
    }, (error) => {
      console.log(error.text);
      alert("Error, try again.");
    });
  };

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='rejoignezNous-content'>
      <div className="rejoignezNous-top" style={{height: '42vw'}} id='top' ref={rejoignezNousTop}>

        <div className="rejoignezNous-title">
          <h1><strong>Propulsez</strong> votre virtuel restaurant vers de nouveaux sommets avec <strong>Light Kitch</strong></h1>
          <p>Développez votre activité, optimisez vos opérations et atteignez une nouvelle clientèle grâce à nos solutions de restaurants virtuels.</p>
        </div>

        <div className="deliveryMan-image">
          <img src='https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984570/LightKitch/img-1_cyrbst.png' alt='delivery-man'/>
        </div>

      </div>


      <div className='rejoignezNous-form'>

        <form ref={form} onSubmit={sendEmail}>

        {isMessageSent ? (
          <div className="message-confirmation">
            <p>Votre message a été envoyé avec succès !</p>
          </div>
        ) : (
          <>
            <div className="inputs">
              <input type='text' name='name' placeholder='Nom' required />
              <input type='email' name='email' placeholder='Email' required />
            </div>
            <br/>
            <textarea name="message" rows="10" placeholder='Message' required />
            <br/>
            <button type='submit'>Soumettre</button>
          </>
  )}

        </form>

      </div>

      <MarqueeComponent  backgroundColor='rgb(255, 186, 0)'/>

      <GlobalFooter />

    </motion.div>
  )
}

export default RejoignezNous
