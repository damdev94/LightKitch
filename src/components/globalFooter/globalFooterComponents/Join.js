import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import '../../../css/components/globalFooter/globalFooterComponent/join.scss'

function Join() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_rm0f57g',
      'template_zcxe394',
      form.current,
      '2gCBvqQQD35UrTqt_'
    )
    .then((result) => {
      console.log(result.text);
      alert("your message has been send with succes.");
    }, (error) => {
      console.log(error.text);
      alert("Error, retry.");
    });
  };


  return (
    <div className='join-component'>

      <div className='join-content'>
            <h2>Êtes-vous prêt à nous rejoindre?</h2>
            <p>Découvrez le potentiel de votre restaurant virtuel</p>
            <Link to='/devenir-partenaire'>Prendre RDV</Link>
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
                <Link className='apointement' to='/devenir-partenaire'>Prendre RDV</Link>
              </div>
            </div>
            <div className='form-container'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='inputs'>
                  <input type='text' placeholder='Nom' name='name' required></input>
                  <input type='email' placeholder='Email' name='email' required></input>
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
