import React from 'react'
import Marquee from "react-fast-marquee";
import '../../../css/components/globalFooter/globalFooterComponent/marqueeComponent.scss'
import { useTranslation } from "react-i18next";

function MarqueeComponent({backgroundColor, color}) {

  const { t } = useTranslation('marquee')

  return (
    <Marquee
      className='marqueeComponent-container'
      style={{backgroundColor: backgroundColor, color : color}}
      >
      <p className='point' >·</p>
      <p className='word'>{t('words.0.word')}</p>
      <p className='point'>·</p>
      <p className='word'>{t('words.1.word')}</p>
      <p className='point'>·</p>
      <p className='word'>{t('words.2.word')}</p>
      <p className='point'>·</p>
      <p className='word'>{t('words.3.word')}</p>
      <p className='point'>·</p>
      <p className='word'>{t('words.4.word')}</p>
      <p className='point'>·</p>
      <p className='word'>{t('words.5.word')}</p>
      <p className='point'>·</p>
      <p className='word'>{t('words.6.word')}</p>
      <p className='point'>·</p>
      <p className='word'>{t('words.7.word')}</p>
      <p className='point'>·</p>
      <p className='word'>{t('words.8.word')}</p>
      <p className='point'>·</p>
      <p className='word'>{t('words.9.word')}</p>
      <p className='point'>·</p>
      <p className='word'>{t('words.10.word')}</p>
      <p className='point'>·</p>
      <p className='word'>{t('words.11.word')}</p>
    </Marquee>
  )
}

export default MarqueeComponent
