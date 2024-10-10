import React from 'react'
import '../css/components/cardSavoirFaire.scss'
import CardIntegration from './CardIntegration'

function CardSavoirFaire({backgroundColor, imageUrl}) {

  const texts = [
    <>
    <h2>Qu’est-ce qu’un <strong>restaurant virtuel?</strong></h2>
    </>
  ];

  return (
    <div className='cardSavoirFaire-container' style={{backgroundColor: backgroundColor}}>

      <div className="cardSavoirFaire-left">

        <div className="title">

          <CardIntegration
            number='1'
            text= {texts[0]}
            textSide={true}
            top= '5vw'
            left= '5vw'
          />

        </div>

        <div className="text">
          <p>Un restaurant virtuel est la vitrine en ligne d’un établissement physique, qui propose exclusivement de la nourriture en livraison, via les plateformes de commande en ligne (Ubereats, Deliveroo, LyvEat …).</p>
          <br/>
          <p>Créer un restaurant virtuel vous permet de diffuser facilement votre cuisine à travers de nouvelles marques exclusivement en ligne.</p>
        </div>

      </div>

      <div className="cardSavoirFaire-right" style={{backgroundImage: imageUrl, backgroundSize: 'cover', backgroundPosition: 'center'}}>

      </div>

    </div>
  )
}

export default CardSavoirFaire
