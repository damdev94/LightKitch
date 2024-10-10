import React from 'react'
import '../css/components/cardSavoirFaire.scss'
import CardIntegration from './CardIntegration'

function CardSavoirFaire({backgroundColor, imageUrl, textTitle, text, number, backgroundSize, rotateBackground}) {

console.log(rotateBackground)
  return (
    <div className='cardSavoirFaire-container' style={{backgroundColor: backgroundColor}}>

      <div className="cardSavoirFaire-left">

        <div className="title">

          <CardIntegration
            number={number}
            text= {textTitle}
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
