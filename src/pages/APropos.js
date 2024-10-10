import React from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import '../css/pages/apropos.scss'
import { Link } from 'react-router-dom';
import MarqueeComponent from '../components/globalFooter/globalFooterComponents/MarqueeComponent';

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
            .guidance-pragraphes
          </div>

          <div className="guidance-right">

          </div>

        </div>
    </motion.div>
  )
}

export default APropos
