import React from 'react'
import { Link } from 'react-router-dom'
import '../../../css/components/globalFooter/globalFooterComponent/join.scss'

function Join() {
  return (
    <div className='join-component'>

      <div className='join-content'>
            <h2>Êtes-vous prêt à nous rejoindre?</h2>
            <p>Découvrez le potentiel de votre restaurant virtuel</p>
            <Link to='/rejoignez-nous'>Prendre RDV</Link>
      </div>

      <div className='menu-container'>
            <div className='links-container'>
              <h3>Main menu</h3>
              <div className='links'>
                <Link>Marques virtuelles</Link>
                <Link className='second-link' to='/comment-ca-marche'>Comment ça marche</Link>
              </div>
              <div className='links'>
                <Link>Histoires de réussite</Link>
                <Link className='second-link' to='/blog'>Blog</Link>
              </div>
              <div className='apointement-button'>
                <Link className='apointement' to='/rejoignez-nous'>Prendre RDV</Link>
              </div>
            </div>
            <div className='form-container'>
              <form>
                <div className='inputs'>
                  <input type='text' placeholder='Nom'></input>
                  <input type='email' placeholder='Email'></input>
                </div>
                <br/>
                <div className='button-container'>
                  <button type='submit'>Soummettre</button>
                </div>
              </form>
            </div>
      </div>

    </div>
  )
}

export default Join
