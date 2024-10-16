import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faComment, faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons';
import KeyStatsCard from '../components/KeyStatsCard';
import '../css/pages/home.scss';
import Slider from '../components/Slider';
import SkillCard from '../components/LittleSkillCard';
import GlobalFooter from '../components/globalFooter/GlobalFooter';

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


  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='home-container'>
      <div className='background-video-container' id='top'>
        <video autoPlay muted loop className="background-video">
          <source src="https://res.cloudinary.com/dt04wtcwf/video/upload/v1727984684/LightKitch/videobg_umr80r.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
        <div className='video-overlay'>
          <div className='text-overlay'>
            <h1>Boostez votre chiffre d’affaires en créant des <strong>restaurants virtuels</strong></h1>
            <p>Élargissez votre clientèle grâce à notre accompagnement d’experts <strong>en plateformes de livraison</strong></p>

            <div className='link-overlay'>
              <Link to="/devenir-partenaire" className='appointement'>Prendre RDV <FontAwesomeIcon style={{marginLeft : "3px"}} icon={faPenToSquare} /></Link>
              <Link to="/contactez-nous" className='contact'>Contactez-nous <FontAwesomeIcon className='icon-comment' icon={faComment} style={{marginLeft : "3px"}} /></Link>
            </div>

          </div>
        </div>
        <div className='video-dark-overlay'></div>
      </div>
      <div className='home-content'>
        <div className='key-stats-container'>
          <div className='key-stats-content'>
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
              title = "Expertise en optimisation des résultats"
              text = "Fort de notre expérience dans les applications de livraison, nous nous occupons de tous les leviers pour optimiser vos résultats."
              height = "370px"
              width = "380px"
              top = "80px"
            />
            <SkillCard
              img ="https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984561/LightKitch/2149870751_ejyodf.jpg"
              title = "Vitrines virtuelles pour restaurants"
              text = "Light Kitch, permet aux restaurants de créer facilement et rapidement des vitrines virtuelles."
              height = "370px"
              width = "380px"
              top = "200px"
              left = "500px"
            />
             <SkillCard
              img ="https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984560/LightKitch/2149250122_a9xgrz.jpg"
              title = "Restaurants virtuels sur mesure"
              text = "Nous proposons des restaurants virtuels imaginés selon les habitudes de consommation de votre zone."
              height = "370px"
              width = "380px"
              top = "600px"
              left = "850px"
            />
             <SkillCard
              img ="https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984560/LightKitch/2148145553_ok0d56.jpg"
              title = "La livraison, avenir de la restauration"
              text = "La livraison a changé les modes de consommation et se présente comme l’avenir de la restauration."
              height = "370px"
              width = "380px"
              top = "1000px"
              left = "850px"
            />
            <SkillCard
              img ="https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984561/LightKitch/2149834253_kkevob.jpg"
              title = "Nouveaux canaux de vente"
              text = "Ce concept permet à votre restaurant, qu’il soit déjà présent ou non sur ces plateformes, de livrer les produits via de nouveaux canaux de vente."
              height = "400px"
              width = "440px"
              top = "1400px"
              left = "500px"
            />
            <SkillCard
              img ="https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984561/LightKitch/2149893725_ghqrp6.jpg"
              title = "Augmentez votre chiffre d’affaires et votre clientèle"
              text = "Ces vitrines virtuelles vous offriront la possibilité de générer plus de chiffre d’affaires et d’acquérir une clientèle supplémentaire."
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
                <h2>Ce que Brahim pense de nous</h2>
              </div>
              <div className='brahim-text'>

                <p><FontAwesomeIcon icon={faQuoteLeft} className='quoteLeft'/>Light Kitch est une très belle découverte, qui nous a amené à la conquête d’une nouvelle clientèle. Grâce à leurs conseils et à leur expertise, l’équipe nous a accompagné dans une période compliquée pour la restauration. Light Kitch a mis en lumière le potentiel de ma livraison, merci.<FontAwesomeIcon icon={faQuoteRight} className='quoteRight'/></p>

              </div>
              <div className='brahim-testimonial'>
                <p>— Brahim, restaurateur possédant plusieurs comptes optimisés par Light Kitch, sur les différentes applications de livraison.</p>
              </div>
            </div>
        </div>
        </div>
        <div className='elriadh-feedback'>
          <div className='elriadh-content'>
            <div className='elriadh-left'>
              <div className='elriadh-title'>
                <h2>Ce que Mohamed pense de nous</h2>
              </div>
              <div className='elriadh-text'>
                <p><FontAwesomeIcon icon={faQuoteLeft} className='quoteLeft'/>Grâce à Light Kitch on a pu multiplier le nombre de ventes. On a touché une nouvelle clientèle et ça nous a permis de gagner en notoriété, on était déjà connus à Lille mais maintenant encore plus ! Les tablettes sonnent tout le temps et ça fait plaisir</p>
                <br/>
                <p>À chaque fois qu’on les appelle ils sont là, le service est nickel. Je continuerai avec Light Kitch avec grand plaisir !<FontAwesomeIcon icon={faQuoteRight} className='quoteRight'/></p>
              </div>
              <div className='elriadh-testimonial'>
                <p>— Le témoignage de Mohamed Lille</p>
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
