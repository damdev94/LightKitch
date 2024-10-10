import React from 'react'
import { motion } from 'framer-motion';
import GlobalFooter from '../components/globalFooter/GlobalFooter';
import '../css/pages/nosSavoirsFaire.scss'
import { Link } from 'react-router-dom';
import CardSavoirFaire from '../components/CardSavoirFaire';

function NosSavoirsFaire({pageVariants}) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='nosSavoirsFaire-container'>

      <div className='nosSavoirsFaire-presentation'>

        <div className='presentation-left'>

        </div>

        <div className='presentation-right'>

          <div className="right-content">

            <h2>Restaurants <strong>Virtuels</strong></h2>
            <p>Découvrez comment notre solution clé en main peut transformer votre activité</p>
            <Link to='/rejoignez-nous'>Prendre RDV</Link>

          </div>

        </div>

      </div>

      <div className="nosSavoirsFaire-promotion">

        <div className='promotion-title'>
          <p>Propulsez votre restaurant vers de nouveaux sommets grâce à Light Kitch, votre partenaire expert en restaurants virtuels. Nous nous occupons de tout, de la création de marques virtuelles sur mesure à l’optimisation de vos menus et de vos campagnes marketing, afin de maximiser votre visibilité et vos revenus sur les plateformes de livraison.</p>
        </div>

        <div className="promotion-cards">

          <CardSavoirFaire
            backgroundColor= "rgb(255, 186, 0)"
            imageUrl='url(https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984570/LightKitch/whatis_edtjd5.png)'
            className='card'
          />

          <CardSavoirFaire
            backgroundColor= "rgb(255, 186, 0)"
            imageUrl='url(https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984570/LightKitch/whatis_edtjd5.png)'
          />

          <CardSavoirFaire
            backgroundColor= "rgb(255, 186, 0)"
            imageUrl='url(https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984570/LightKitch/whatis_edtjd5.png)'
          />

          <CardSavoirFaire
            backgroundColor= "rgb(255, 186, 0)"
            imageUrl='url(https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984570/LightKitch/whatis_edtjd5.png)'
          />
        </div>

      </div>

      <GlobalFooter />
    </motion.div>
  )
}

export default NosSavoirsFaire
