import React from 'react'
import { motion } from 'framer-motion';
import GlobalFooter from '../components/globalFooter/GlobalFooter';
import '../css/pages/commentCaMarche.scss'
import { Link } from 'react-router-dom';
import CardIntegration from '../components/CardIntegration';

function CommentCaMarche({pageVariants}) {

  const texts = [
    <>
      Sélection des <strong>types de cuisine</strong> par nos experts, selon la concurrence, votre situation et vos besoins.
    </>,
    <>
      Prise en charge des <strong>démarches administratives</strong> des plateformes de livraison. Analyse de votre situation et de la concurrence. Création de <strong> comptes adaptés et personnalisés.</strong>
    </>,
    <>
      Envoi du <strong>matériel pour gérer la livraison </strong> de vos restaurants virtuels.
    </>,
    <>
      Amélioration du menu pour avoir un aspect attractif selon la plateforme de livraison. <strong>Expertise et conseils, digitalisation et optimisation du menu.</strong>
    </>,
    <>
      Gestion du <strong>Back-Office. Configuration, optimisation et activation</strong>des comptes.
    </>,
    <>
      Activation de différents <strong>leviers de visibilité</strong> in-app.
    </>,
    <>
      <strong>BOOST: Suivi des commandes et mise en place d’offres Marketing</strong> afin de booster au maximum vos ventes.
    </>,
    <>
      Analyse des <strong>résultats</strong> réponse aux <strong>avis clients</strong> et échanges avec le restaurant en cas de besoin.
    </>,
    <>
      <strong>Suivi régulier</strong> par le support de Light Kitch et <strong>SAV Premium.</strong>
    </>,
    <>
      <strong>Paiement en une seule facture détaillée </strong> regroupant toutes les plateformes.
    </>

  ];


  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='commentCaMarche-container'>

      <div className='commentCaMarche-presentation'>

        <div className='presentation-left'>

          <div className='left-content'>
            <h2>Comment <strong>ça marche</strong></h2>
            <p>Découvrez comment notre solution clé en main peut transformer votre activité.</p>
            <Link to='/rejoignez-nous'>Prendre RDV</Link>
          </div>

        </div>

        <div className='presentation-right'>
          <div className='right-content'>

          </div>
        </div>

      </div>

      <div className='commentCaMarche-promotion'>
        <div className='promotion-content'>
          <p>Propulsez votre restaurant vers de nouveaux sommets grâce à Light Kitch, votre partenaire expert en restaurants virtuels. Nous nous occupons de tout, de la création de marques virtuelles sur mesure à l’optimisation de vos menus et de vos campagnes marketing, afin de maximiser votre visibilité et vos revenus sur les plateformes de livraison.</p>
        </div>
      </div>

      <div className='commentCaMarche-integration'>
        <div className='integration-container'>
          <div className='integaration-string-image'>
            <img src='https://res.cloudinary.com/dt04wtcwf/image/upload/v1728483956/LightKitch/svg-3_wnpmji.svg' alt='string'/>
          </div>
          <div className='integration-chef-image'>
            <img src='https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984564/LightKitch/chef2-1-1_hheoio.png' alt='chef' />
          </div>

          <div className='integration-title'>
            <h2>Comment propulser votre restaurant vers le succès sur les <strong>applications de livraisons?</strong></h2>
          </div>

          <div className='integration-step'>
            <CardIntegration
              number = "1"
              top = "15%"
              left = "7.5%"
              text =  {texts[0]}
              textSide= {true}
            />

            <CardIntegration
              number = "2"
              top = "22%"
              left = "30.5%"
              text =  {texts[1]}
              textSide= {true}
            />

            <CardIntegration
              number = "3"
              top = "31%"
              left = "55%"
              text =  {texts[2]}
              textSide= {true}
            />

             <CardIntegration
              number = "4"
              top = "38%"
              left = "38.5%"
              text =  {texts[3]}
              textSide= {true}
            />

            <CardIntegration
              number = "5"
              top = "47.5%"
              left = "35%"
              text =  {texts[4]}
              textSide= {false}
            />

            <CardIntegration
              number = "6"
              top = "55%"
              left = "57.5%"
              text =  {texts[5]}
              textSide= {false}
            />

            <CardIntegration
              number = "7"
              top = "62.5%"
              left = "57.5%"
              text =  {texts[6]}
              textSide= {false}
            />

            <CardIntegration
              number = "8"
              top = "70.5%"
              left = "57.5%"
              text =  {texts[7]}
              textSide= {false}
            />

            <CardIntegration
              number = "9"
              top = "77.5%"
              left = "57.5%"
              text =  {texts[8]}
              textSide= {true}
            />

            <CardIntegration
              number = "10"
              top = "85%"
              left = "46%"
              text =  {texts[8]}
              textSide= {true}
            />

          </div>
        </div>
      </div>

      <GlobalFooter />

    </motion.div>
  )
}

export default CommentCaMarche
