import React from 'react'
import '../css/components/cardSavoirFaire.scss'
import CardIntegration from './CardIntegration'
import cookies from 'js-cookie';

function CardSavoirFaire({backgroundColor, imageUrl, textTitle, text, number, backgroundSize, rotateBackground}) {

  const languageCode = cookies.get('i18next');

  return (
    <div className='cardSavoirFaire-container' style={{backgroundColor: backgroundColor}}>

      <div className="cardSavoirFaire-left">

        <div className="title">

          <CardIntegration
            number={number}
            text= {textTitle}
            textSide={true}
            top= '5vw'
            right={languageCode === 'ar' ? '5vw' : undefined}
            left={languageCode === 'ar' ? undefined : '5vw'}
          />

        </div>

        <div className="text" style={{fontSize: '18px', marginTop: '20px'}}>
         {text}
        </div>

      </div>

      <div
        className={`cardSavoirFaire-right ${rotateBackground ? 'rotate-background' : ''}`}
        style={{
          backgroundImage: imageUrl,
          backgroundSize: backgroundSize,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'}}>

      </div>

    </div>
  )
}

export default CardSavoirFaire
