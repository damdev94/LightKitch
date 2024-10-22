import React from 'react'
import { motion } from 'framer-motion';
import GlobalFooter from '../components/globalFooter/GlobalFooter';
import '../css/pages/nosSavoirsFaire.scss'
import { Link } from 'react-router-dom';
import CardSavoirFaire from '../components/CardSavoirFaire';
import SliderSavoir from '../components/SliderSavoir';
import { getCardsData } from '../data/data';
import { useTranslation } from "react-i18next";

function NosSavoirsFaire({pageVariants}) {


  const { t } = useTranslation('nosSavoirsFaire');
  const { t: t2} = useTranslation('cardSavoirsFaire');
  const cardsData = getCardsData(t2);

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='nosSavoirsFaire-container'>

      <div className='nosSavoirsFaire-presentation' id='top'>

        <div className='presentation-left'>

        </div>

        <div className='presentation-right'>

          <div className="right-content">

            <h2>{t('presentation_section.heading.0')} <strong>{t('presentation_section.heading.1.strong')}</strong></h2>
            <p>{t('presentation_section.description.0')}</p>
            <Link to='/devenir-partenaire'>{t('presentation_section.cta_button')}</Link>

          </div>

        </div>

      </div>

      <div className="nosSavoirsFaire-promotion">

        <div className='promotion-title'>
          <p>{t('promotion_section.description')}</p>
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

          <h2>{t('virtual_franchises_section.heading')}</h2>

          <p>{t('virtual_franchises_section.description')}</p>

          <div className="left-button">

            <Link to='/devenir-partenaire'>{t('virtual_franchises_section.cta_button')}</Link>

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
