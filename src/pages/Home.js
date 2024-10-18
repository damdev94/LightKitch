import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faComment, faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons';
import KeyStatsCard from '../components/KeyStatsCard';
import Slider from '../components/Slider';
import SkillCard from '../components/LittleSkillCard';
import GlobalFooter from '../components/globalFooter/GlobalFooter';
import { useTranslation } from "react-i18next";

import '../css/pages/home.scss';

gsap.registerPlugin(ScrollTrigger);

function Home({ pageVariants }) {
  const handImage = useRef(null);
  const lightImage = useRef(null);
  const boxImage = useRef(null);

  useLayoutEffect(() => {
    gsap.to(lightImage.current, {
      xPercent: 30,
      duration: 2,
        scrollTrigger : {
          trigger: lightImage.current,
          toggleActions: 'play reverse play reverse',
          start: 'top 1000px',
          scrub: 2,
        }
    });

    gsap.to(handImage.current, {
      xPercent: 20,
      duration: 2,
        scrollTrigger : {
          trigger: handImage.current,
          toggleActions: 'play reverse play reverse',
          start: 'top 1000px',
          scrub: 2,
        }
    });

    gsap.to(boxImage.current, {
      xPercent: 10,
      duration: 2,
        scrollTrigger : {
          trigger: boxImage.current,
          toggleActions: 'play reverse play reverse',
          start: 'top 1000px',
          scrub: 2,
        }
    });
  }, []);

  const { t } = useTranslation('homepage')

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='home-container'>
      <div className='background-video-container' id='top'>
        <video autoPlay muted loop className="background-video">
          <source src="https://res.cloudinary.com/dt04wtcwf/video/upload/v1727984684/LightKitch/videobg_umr80r.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
        <div className='video-overlay'>
          <div className='text-overlay'>
            <h1>{t('header.title.0')} <strong>{t('header.title.1.strong')}</strong></h1>
            <p>{t('header.subtitle.0')} <strong>{t('header.subtitle.1.strong')}</strong></p>

            <div className='link-overlay'>
              <Link to="/devenir-partenaire" className='appointement'>{t('header.appointment_link')} <FontAwesomeIcon style={{marginLeft : "3px"}} icon={faPenToSquare} /></Link>
              <Link to="/contactez-nous" className='contact'>{t('header.contact_link')} <FontAwesomeIcon className='icon-comment' icon={faComment} style={{marginLeft : "3px"}} /></Link>
            </div>

          </div>
        </div>
        <div className='video-dark-overlay'></div>
      </div>
      <div className='home-content'>
        <div className='key-stats-container'>
          <div className='key-stats-content'>
          <div className='title'>
            <h2>{t('key_stats_section.title.0')} <strong>{t('key_stats_section.title.1.strong')}</strong></h2>
          </div>
            <div className='stats-cards-container'>
              <KeyStatsCard
                statsText={t('key_stats_section.stat1_text')}
                stats={t('key_stats_section.stat1_value')}
              />

              <KeyStatsCard
                statsText={t('key_stats_section.stat2_text')}
                stats={t('key_stats_section.stat2_value')}
              />

              <KeyStatsCard
                statsText={t('key_stats_section.stat3_text')}
                stats={t('key_stats_section.stat3_value')}
              />
            </div>
          </div>
        </div>
        <div className='advantages-container'>
          <div className='advantages-content'>
            <div className='advantages-left'>
              <div className='advantages-title'>
                <h2>{t('advantages_section.title.0')} <strong>{t('advantages_section.title.1.strong')}</strong></h2>
              </div>
              <div className='advantages-text'>
                <p>{t('advantages_section.text')}</p>
              </div>
              <div className='advantages-slider'>
                <Slider></Slider>
              </div>
            </div>
            <div className='advantages-right'>
              <div className='delivery-image'>
                <img src='https://res.cloudinary.com/dt04wtcwf/image/upload/f_png/v1727984569/LightKitch/img2_c73vew.png' alt='delivery-man'/>
              </div>
            </div>
          </div>

        </div>
        <div className='skills-container'>
          <div className='skills-content'>
            <SkillCard
              img ="https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984561/LightKitch/2149371197_elzcop.jpg"
              title={t('skills_section.skill1.title')}
              text={t('skills_section.skill1.text')}
              height = "370px"
              width = "420px"
              top = "80px"
            />
            <SkillCard
              img ="https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984561/LightKitch/2149870751_ejyodf.jpg"
              title={t('skills_section.skill2.title')}
              text={t('skills_section.skill2.text')}
              height = "370px"
              width = "420px"
              top = "200px"
              left = "500px"
            />
             <SkillCard
              img ="https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984560/LightKitch/2149250122_a9xgrz.jpg"
              title={t('skills_section.skill3.title')}
              text={t('skills_section.skill3.text')}
              height = "370px"
              width = "380px"
              top = "600px"
              left = "850px"
            />
             <SkillCard
              img ="https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984560/LightKitch/2148145553_ok0d56.jpg"
              title={t('skills_section.skill4.title')}
              text={t('skills_section.skill4.text')}
              height = "370px"
              width = "380px"
              top = "1000px"
              left = "850px"
            />
            <SkillCard
              img ="https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984561/LightKitch/2149834253_kkevob.jpg"
              title={t('skills_section.skill5.title')}
              text={t('skills_section.skill5.text')}
              height = "400px"
              width = "440px"
              top = "1400px"
              left = "500px"
            />
            <SkillCard
              img ="https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984561/LightKitch/2149893725_ghqrp6.jpg"
              title={t('skills_section.skill6.title')}
              text={t('skills_section.skill6.text')}
              height = "400px"
              width = "440px"
              top = "1500px"
            />

            <div className='animate-image'>
              <img
                className='box-image'
                src='https://res.cloudinary.com/dt04wtcwf/image/upload/v1728229102/LightKitch/caisse_fuqkqv.png'
                alt='box'
                ref={boxImage}
              />
              <img
                className = 'hand-image'
                src='https://res.cloudinary.com/dt04wtcwf/image/upload/v1728229102/LightKitch/main_akcrzr.png'
                alt='hand'
                ref={handImage}
              />
              <img
                className = 'light-image'
                src='https://res.cloudinary.com/dt04wtcwf/image/upload/v1728229102/LightKitch/ampoule_htoxar.png'
                alt='light'
                ref={lightImage}
              />
              <img className='backgroundSun-image' src='https://res.cloudinary.com/dt04wtcwf/image/upload/v1728230326/LightKitch/soleil_kl3vda.png' alt='sun'/>
            </div>
          </div>
        </div>
        <div className='brahim-feedback'>
          <div className='brahim-content'>
            <div className='brahim-left'>
              <img src='https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984565/LightKitch/img1_lswall.jpg' alt='brahim-image'/>
            </div>
            <div className='brahim-right'>
              <div className='brahim-title'>
                <h2>{t('testimonials_section.brahim_feedback.title')}</h2>
              </div>
              <div className='brahim-text'>
                <p><FontAwesomeIcon icon={faQuoteLeft} className='quoteLeft'/>{t('testimonials_section.brahim_feedback.text.0.quote')}<FontAwesomeIcon icon={faQuoteRight} className='quoteRight'/></p>
              </div>
              <div className='brahim-testimonial'>
                <p>— {t('testimonials_section.brahim_feedback.author')}</p>
              </div>
            </div>
        </div>
        </div>
        <div className='elriadh-feedback'>
          <div className='elriadh-content'>
            <div className='elriadh-left'>
              <div className='elriadh-title'>
                <h2>{t('testimonials_section.elriadh_feedback.title')}</h2>
              </div>
              <div className='elriadh-text'>
                <p><FontAwesomeIcon icon={faQuoteLeft} className='quoteLeft'/>{t('testimonials_section.elriadh_feedback.text.0.quote')}</p>
                <br/>
                <p>{t('testimonials_section.elriadh_feedback.text.1.quote')}<FontAwesomeIcon icon={faQuoteRight} className='quoteRight'/></p>
              </div>
              <div className='elriadh-testimonial'>
                <p>— {t('testimonials_section.elriadh_feedback.author')}</p>
              </div>
            </div>

            <div className='elriadh-right'>
              <img src='https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984570/LightKitch/Screenshot-2024-05-24-at-12.01.34_PM_xgeq8y.jpg' alt='ElRiadh-image' />
            </div>
          </div>
        </div>
        <GlobalFooter />
      </div>

    </motion.div>
  );
}

export default Home;
