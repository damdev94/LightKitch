import React from 'react'
import { motion } from 'framer-motion';
import GlobalFooter from '../components/globalFooter/GlobalFooter';
import '../css/pages/nosSavoirsFaire.scss'
import { Link } from 'react-router-dom';
import CardSavoirFaire from '../components/CardSavoirFaire';
import SliderSavoir from '../components/SliderSavoir';

function NosSavoirsFaire({pageVariants}) {

  const textsTitle = [
    <>
      <h2>Qu’est-ce qu’un <strong>restaurant virtuel?</strong></h2>
    </>,
    <>
      <h2>Pourquoi les restaurateurs ouvrent-ils des <strong>restaurants virtuels?</strong></h2>
    </>,
    <>
      <h2>Quel type de <strong>menu</strong> pour les <strong>cuisines virtuelles?</strong></h2>
    </>,
    <>
      <h2>Comment <strong>Light Kitch</strong> aide-t-il les restaurants?</h2>
    </>
  ];

  const texts = [
    <>
      <p>Un restaurant virtuel est la vitrine en ligne d’un établissement physique, qui propose exclusivement de la nourriture en livraison, via les plateformes de commande en ligne (Ubereats, Deliveroo, LyvEat …).</p>
      <br/>
      <p>Créer un restaurant virtuel vous permet de diffuser facilement votre cuisine à travers de nouvelles marques exclusivement en ligne.</p>
    </>,
    <>
      <p>Les restaurateurs peuvent développer de nouveaux concepts depuis leur cuisine.
      Cela permet à votre restaurant, qu’il soit déjà présent ou non sur ces plateformes, de livrer ces produits via de nouveaux canaux de vente. La création de vitrines virtuelles vous offrira plus de visibilité sur les plateformes de livraison et donc la possibilité de générer plus de chiffre d'affaire. Ainsi vous pourrez atteindre une clientèle supplémentaire, tout en conservant votre clientèle habituelle.</p>
    </>,
    <>
      <p>Tous les menus peuvent servir de base aux restaurants virtuels, nos experts sélectionnent les produits les plus adéquats proposés par les restaurateurs pour leur créer des concepts innovants. L’objectif est de faire en sorte que le menu soit cohérent avec les attentes culinaires des consommateurs sur les plateformes de livraison.</p>
    </>,
    <>
      <p>Light Kitch aide les restaurants à performer sur les applications de livraison en créant de nouveaux concepts sous la dénomination de marques virtuelles.</p>
      <br/>
      <p>Light Kitch gère également la partie administrative auprès des applications de livraison, optimise la gestion opérationnelle des restaurants virtuels et prévoit aussi des analyses et des préconisations marketing.</p>
    </>
  ]

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
            backgroundSize='cover'
            number='1'
            backgroundColor= "rgb(255, 186, 0)"
            imageUrl='url(https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984570/LightKitch/whatis_edtjd5.png)'
            textTitle={textsTitle[0]}
            text={texts[0]}
          />

          <CardSavoirFaire
            number='2'
            backgroundColor= "rgba(169, 174, 202, 1)"
            imageUrl='url(https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984560/LightKitch/9059760-scaled_legyuv.jpg)'
            textTitle={textsTitle[1]}
            backgroundSize='contain'
          />

          <CardSavoirFaire
            number='3'
            backgroundColor= "rgba(199, 206, 102, 1)"
            imageUrl='url(https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984560/LightKitch/4267558-scaled_kigrhz.jpg)'
            textTitle={textsTitle[2]}
            backgroundSize= '60%'
            rotateBackground={true}
          />

          <CardSavoirFaire
            number='4'
            backgroundColor= "rgba(63, 173, 192, 1)"
            imageUrl='url(https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984560/LightKitch/1234_uqtwrf.png)'
            textTitle={textsTitle[3]}
            backgroundSize= 'cover'
          />
        </div>

      </div>

      <div className="virtualFranchises-container">

        <div className="virtualFranchises-content">

        <div className="virtualFranchises-left">

          <h2>Nos franchises virtuels</h2>

          <p>Un pannel de marques à proposer, clés en main pour les restaurateurs, avec les différents food types.</p>

          <div className="left-button">

            <Link to='/rejoignez-nous'>Contactez nous pour en savoir plus</Link>

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
