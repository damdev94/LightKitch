import React from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import '../css/pages/apropos.scss'
import { Link } from 'react-router-dom';
import MarqueeComponent from '../components/globalFooter/globalFooterComponents/MarqueeComponent';
import GlobalFooter from '../components/globalFooter/GlobalFooter'

function APropos({pageVariants}) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='apropos-container'>

        <div className="apropos-top">
          <div className="apropos-title">
            <h1>À propos de <strong>nous</strong></h1>
            <p>Le coeur de Light Kitch</p>
          </div>
          <div className="apropos-text">
            <p>Le marché de livraison de plats préparés est en expansion continue, que ce soit dans les centres villes ou dans les milieux ruraux.
            Light Kitch, c’est une équipe jeune, dynamique et pleine d’ambition qui n’arrête pas de s’agrandir.</p>

            <br/>
            <br/>

            <p>Les multiples partenariats effectués par Light Kitch avec d’autres entreprises permettent de proposer une offre complète aux restaurateurs, que ce soit dans les centres villes, dans les milieux ruraux, ainsi que dans les lieux mal desservis par la livraison.</p>
          </div>
          <div className="apropos-button">
            <Link to="/rejoignez-nous" className='appointement'>Prendre RDV <FontAwesomeIcon style={{marginLeft : "3px"}} icon={faPenToSquare} /></Link>
          </div>
        </div>

        <div className='apropos-marquee'>
          <MarqueeComponent backgroundColor='#313131' color='white'/>
        </div>

        <div className="business-guidance">

          <div className="guidance-left">

          <div className="paragraphes">
              <p>Nous offrons aux restaurants la possibilité de créer facilement et rapidement des vitrines virtuelles, grâce à notre solide expérience dans les applications de livraison. Nous prenons en charge tous les leviers pour optimiser vos résultats, en nous adaptant à la localisation géographique de votre établissement pour proposer des offres adaptées à votre future clientèle.</p>

              <br/>

              <p>Nos restaurants virtuels sont conçus selon les habitudes de consommation spécifiques de votre zone, car nous comprenons que chaque marché est unique. </p>

              <br/>

              <p>La livraison a révolutionné les modes de consommation et représente l’avenir de la restauration. Notre concept permet à votre restaurant, qu’il soit déjà présent ou non sur ces plateformes, de livrer vos produits via de nouveaux canaux de vente.</p>

              <br/>

              <p>Nos vitrines virtuelles vous offrent une opportunité sans précédent de générer plus de chiffre d’affaires et d’acquérir une clientèle supplémentaire. Nous sommes là pour vous guider à chaque étape du processus, afin que votre entreprise prospère dans cet environnement en constante évolution.</p>
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
            <p>Chers restaurateurs,</p>
            <br/>
            <p>Chez Light Kitch, notre mission est simple : vous aider à augmenter vos ventes et à atteindre de nouveaux clients grâce à nos restaurants virtuels; Nous savons à quel point la livraison a transformé les modes de consommation, et nous croyons fermement que son poids continuera à peser davantage dans l’ avenir de la restauration.</p>
            <br/>
            <p>Nous comprenons parfaitement les défis auxquels vous êtes confrontés aujourd’hui dans la gestion des applications de livraison. C’est pourquoi nous nous spécialisons dans la gestion intégrale de toutes ces plateformes, afin de vous libérer de cette charge et de vous permettre de vous concentrer sur ce que vous faites de mieux : cuisiner et satisfaire vos clients.
            Le marché de la livraison de plats préparés est en expansion continue, que ce soit dans les centres-villes ou dans les milieux ruraux.</p>
            <br/>
            <p>Light Kitch, c’est une équipe jeune, dynamique et pleine d’ambition qui n’arrête pas de s’agrandir. Toujours disponible et à votre écoute, nous nous adaptons au cas par cas pour tous nos clients. Forts de notre expérience dans les applications de livraison, nous mettons tout en œuvre pour optimiser vos résultats. Notre équipen est dédiée à créer des solutions adaptées à la localisation géographique de votre restaurant, en tenant compte des habitudes de consommation de votre zone. Que vous soyez en centre-ville, en milieu rural, ou dans une zone mal desservie par la livraison, nous avons les outils et les partenariats nécessaires pour vous offrir une solution complète.</p>
            <br/>
            <p>Nous sommes passionnés par notre travail et animés par l’ambition de voir votre restaurant prospérer. En choisissant Light Kitch, vous optez pour une croissance de votre chiffre d’affaires et une acquisition de nouvelle clientèle, tout en profitant de la croissance continue du marché de livraison de plats préparés.</p>
            <br/>
            <p>Rejoignez-nous dans cette aventure et laissez-nous vous aider à réaliser votre plein potentiel.</p>
            <br/>
            <p>Cordialement,</p>
            <br/>
            <p>Louis Rebattu</p>
            <p>CEO et Fondateur de Light Kitch</p>
          </div>
        </div>

        <GlobalFooter />
    </motion.div>
  )
}

export default APropos
