import React from 'react'
import { motion } from 'framer-motion';
import GlobalFooter from '../components/globalFooter/GlobalFooter';
import '../css/pages/nosSavoirsFaire.scss'
import { Link } from 'react-router-dom';
import CardSavoirFaire from '../components/CardSavoirFaire';
import SliderSavoir from '../components/SliderSavoir';
import { cardsData } from '../data/data';

function NosSavoirsFaire({pageVariants}) {

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='nosSavoirsFaire-container'>

      <div className='nosSavoirsFaire-presentation' id='top'>

        <div className='presentation-left'>

        </div>

        <div className='presentation-right'>

          <div className="right-content">

            <h2>Restaurants <strong>Virtuels</strong></h2>
            <p>Découvrez comment notre solution clé en main peut transformer votre activité</p>
            <Link to='/devenir-partenaire'>Prendre RDV</Link>

          </div>

        </div>

      </div>

      <div className="nosSavoirsFaire-promotion">

        <div className='promotion-title'>
          <p>Propulsez votre restaurant vers de nouveaux sommets grâce à Light Kitch, votre partenaire expert en restaurants virtuels. Nous nous occupons de tout, de la création de marques virtuelles sur mesure à l’optimisation de vos menus et de vos campagnes marketing, afin de maximiser votre visibilité et vos revenus sur les plateformes de livraison.</p>
        </div>

        <div className="promotion-cards">
          {cardsData.map((card, index) => (
            <CardSavoirFaire
              key={index}
              number={card.number}
              backgroundColor={card.backgroundColor}
              imageUrl={card.imageUrl}
              textTitle={card.textTitle}
              text={card.text}
              backgroundSize={card.backgroundSize}
              rotateBackground={card.rotateBackground}
            />
          ))}
        </div>

      </div>

      <div className="virtualFranchises-container">

        <div className="virtualFranchises-content">

        <div className="virtualFranchises-left">

          <h2>Nos franchises virtuels</h2>

          <p>Un pannel de marques à proposer, clés en main pour les restaurateurs, avec les différents food types.</p>

          <div className="left-button">

            <Link to='/devenir-partenaire'>Contactez nous pour en savoir plus</Link>

          </div>

        </div>

        <div className="virtualFranchises-right">
          <SliderSavoir />
        </div>

        </div>

      </div>

      <GlobalFooter />
    </motion.div>
  )
}

export default NosSavoirsFaire
