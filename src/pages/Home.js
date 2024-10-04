import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faComment } from '@fortawesome/free-solid-svg-icons';
import KeyStatsCard from '../components/KeyStatsCard';
import '../css/pages/home.scss';
import Slider from '../components/Slider';

function Home({ pageVariants }) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='home-container'>
      <div className='background-video-container'>
        <video autoPlay muted loop className="background-video">
          <source src="https://res.cloudinary.com/dt04wtcwf/video/upload/v1727984684/LightKitch/videobg_umr80r.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
        <div className='video-overlay'>
          <div className='text-overlay'>
            <h1>Boostez votre chiffre d’affaires en créant des <strong>restaurants virtuels</strong></h1>
            <p>Élargissez votre clientèle grâce à notre accompagnement d’experts <strong>en plateformes de livraison</strong></p>

            <div className='link-overlay'>
              <Link to="/rejoignez-nous" className='appointement'>Prendre RDV <FontAwesomeIcon style={{marginLeft : "3px"}} icon={faPenToSquare} /></Link>
              <Link to="/contactez-nous" className='contact'>Contactez-nous <FontAwesomeIcon className='icon-comment' icon={faComment} style={{marginLeft : "3px"}} /></Link>
            </div>

          </div>
        </div>
        <div className='video-dark-overlay'></div>
      </div>
      <div className='home-content'>
        <div className='key-stats-container'>
          <div className='title'>
            <h2>Specialiste de plateformes <strong>de livraison</strong></h2>
          </div>
          <div className='stats-cards-container'>

            <KeyStatsCard
              statsText='Potentiel de chiffre d’affaires annuel supplémentaire'
              stats='750 k€+'
            />

            <KeyStatsCard
              statsText='Jours pour mettre en place votre restaurant virtuel'
              stats='15'
            />

            <KeyStatsCard
              statsText='Des restaurants partenaires satisfaits'
              stats='97%'
            />

          </div>
        </div>
        <div className='advantages-container'>
          <div className='advantages-content'>
            <div className='advantages-left'>
              <div className='advantages-title'>
                <h2>Les avantages de choisir <strong>Light Kitch</strong></h2>
              </div>
              <div className='advantages-text'>
                <p>Light Kitch, permet aux restaurants de créer facilement et rapidement des vitrines virtuelles.</p>
              </div>
              <div className='advantages-slider'>
                <Slider></Slider>
              </div>
            </div>
            <div className='advantages-right'>

            </div>
          </div>

        </div>
      </div>

    </motion.div>
  );
}

export default Home;
