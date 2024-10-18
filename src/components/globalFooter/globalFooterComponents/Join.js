import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import '../../../css/components/globalFooter/globalFooterComponent/join.scss'
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation('join')

  return (
    <div className='join-component'>

      <div className='join-content'>
            <h2>{t('join_component.header.title')}</h2>
            <p>{t('join_component.header.description')}</p>
            <Link to='/devenir-partenaire'>{t('join_component.header.appointment_link')}</Link>
      </div>

      <div className='menu-container'>
            <div className='links-container'>
              <h3>{t('join_component.menu_container.links_container.main_menu_title')}</h3>
              <div className='links'>
                <Link>{t('join_component.menu_container.links_container.menu_links.0')}</Link>
                <Link className='second-link' to='/comment-ca-marche'>{t('join_component.menu_container.links_container.menu_links.1')}</Link>
              </div>
              <div className='links'>
                <Link>{t('join_component.menu_container.links_container.menu_links.2')}</Link>
                <Link className='second-link' to='/blog'>{t('join_component.menu_container.links_container.menu_links.3')}</Link>
              </div>
              <div className='apointement-button'>
                <Link className='apointement' to='/devenir-partenaire'>{t('join_component.menu_container.links_container.appointment_button')}</Link>
              </div>
            </div>
            <div className='form-container'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='inputs'>
                  <input type='text' placeholder={t('join_component.menu_container.form_container.form.fields.0')} name='name' required></input>
                  <input type='email' placeholder={t('join_component.menu_container.form_container.form.fields.1')} name='email' required></input>
                </div>
                <br/>
                <div className='button-container'>
                  <button type='submit'>{t('join_component.menu_container.form_container.form.submit_button')}</button>
                </div>
              </form>
            </div>
      </div>

    </div>
  )
}

export default Join
