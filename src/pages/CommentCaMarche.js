import React from 'react'
import { motion } from 'framer-motion';
import GlobalFooter from '../components/globalFooter/GlobalFooter';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import CardIntegration from '../components/CardIntegration';
import { getIntegrationSteps } from '../data/data'
import cookies from 'js-cookie';

import '../css/pages/commentCaMarche.scss'

function CommentCaMarche({pageVariants}) {

  const { t } = useTranslation('commentCaMarche');
  const languageCode = cookies.get('i18next');
  const integrationSteps = getIntegrationSteps(t, languageCode);


  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='commentCaMarche-container'>

      <div className='commentCaMarche-presentation' id='top'>

        <div className='presentation-left'>

          <div className='left-content'>
            <h2>{t('header.title.0')} <strong>{t('header.title.1.strong')}</strong></h2>
            <p>{t('header.subtitle.0')}</p>
            <Link to='/devenir-partenaire'>{t('header.appointment_link')}</Link>
          </div>

        </div>

        <div className='presentation-right'>
          <div className='right-content'>

          </div>
        </div>

      </div>

      <div className='commentCaMarche-promotion'>
        <div className='promotion-content'>
          <p>{t('promotion_section.text')}</p>
        </div>
      </div>

      <div className='commentCaMarche-integration'>
        <div className='integration-container'>
          <div className='integaration-string-image'>
            <img src='https://res.cloudinary.com/dt04wtcwf/image/upload/v1728483956/LightKitch/svg-3_wnpmji.svg' alt='string'/>
          </div>
          <div className='integration-chef-image'>
            <img src='https://res.cloudinary.com/dt04wtcwf/image/upload/v1728498184/chef2-1-1_rcb8tr.png' alt='chef' />
          </div>

          <div className='integration-title'>
            <h2>{t('integration_section.title.0')}<strong> {t('integration_section.title.1.strong')}</strong></h2>
          </div>

          <div className='integration-step'>
            {integrationSteps.map((step) => (
                <CardIntegration
                  key={step.number}
                  number={step.number}
                  top={step.top}
                  left={step.left}
                  text={step.text}
                  textSide={step.textSide}
                />
              ))}
          </div>
        </div>
      </div>

      <GlobalFooter />

    </motion.div>
  )
}

export default CommentCaMarche
