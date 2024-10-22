import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { useTranslation } from "react-i18next";

import '../css/components/navbar.scss';


const languages = [

  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr'
  },

  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  },

  {
    code: 'ar',
    name: 'عربي',
    country_code: 'sa',
    dir: 'rtl'
  },

  {
    code: 'es',
    name: 'Español',
    country_code: 'es',
  }
]

const GlobeIcon = ({width = 24, height = 24}) => (
  <svg style={{color: 'rgba(0, 0, 0, 0.7)', marginLeft: '5px'}} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-globe-europe-africa" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M3.668 2.501l-.288.646a.847.847 0 0 0 1.479.815l.245-.368a.81.81 0 0 1 1.034-.275.81.81 0 0 0 .724 0l.261-.13a1 1 0 0 1 .775-.05l.984.34q.118.04.243.054c.784.093.855.377.694.801-.155.41-.616.617-1.035.487l-.01-.003C8.274 4.663 7.748 4.5 6 4.5 4.8 4.5 3.5 5.62 3.5 7c0 1.96.826 2.166 1.696 2.382.46.115.935.233 1.304.618.449.467.393 1.181.339 1.877C6.755 12.96 6.674 14 8.5 14c1.75 0 3-3.5 3-4.5 0-.262.208-.468.444-.7.396-.392.87-.86.556-1.8-.097-.291-.396-.568-.641-.756-.174-.133-.207-.396-.052-.551a.33.33 0 0 1 .42-.042l1.085.724c.11.072.255.058.348-.035.15-.15.415-.083.489.117.16.43.445 1.05.849 1.357L15 8A7 7 0 1 1 3.668 2.501"/>
</svg>
)




const Navbar = ({pageVariants}) => {

  const location = useLocation()

  const [currentLanguageCode, setCurrentLanguageCode] = useState(cookies.get('i18next') || 'fr');
  const currentLanguage = languages.find(l => l.code === currentLanguageCode);


  /* method that allows updating the language when it is changed */
  useEffect(() => {
    const handleLanguageChange = (code) => {
      setCurrentLanguageCode(code);
      cookies.set('i18next', code);
    };

    i18next.on('languageChanged', handleLanguageChange);


    return () => {
      i18next.off('languageChanged', handleLanguageChange);
    };
  }, []);

  /* method who allow to change writing direction  */
  useEffect(() => {

    document.body.dir = currentLanguage.dir || 'ltr';

  }, [currentLanguage])

  const { t } = useTranslation('navbar')

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='transparent-container'>
      <motion.div className='transparent-container-scale'
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      exit="exit"
      transition={{ duration: 0.5, ease: 'easeOut' }}>
      <div className='navbar-container'>
        <nav className='navs'>
          <div className='nav-logo'>
              <Link to='/'>
              <video width="150" height="150" autoPlay muted>
                <source src="https://res.cloudinary.com/dt04wtcwf/video/upload/v1727985337/LightKitch/logovideo_k3fdhn.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
              </video>
              </Link>
          </div>
          <div className='nav-links'>

            <Link
              style={{marginLeft: currentLanguageCode ? '15px' : ''}}
              to='/comment-ca-marche'
              className={location.pathname === '/comment-ca-marche' ? 'active' : ''}
            > {t('how_it_works')}
            </Link>

            <Link
              to='/nos-savoirs-faire'
              className={location.pathname === '/nos-savoirs-faire' ? 'active' : ''}
            > {t('our_expertise')}
            </Link>

            <Link
              to='/a-propos'
              className={location.pathname === '/a-propos' ? 'active' : ''}
            >{t('about_us')}
            </Link>

            <Link
              to='/devenir-partenaire'
              className={location.pathname === '/devenir-partenaire' ? 'active' : ''}
            >{t('join_us')}
            </Link>

            <Link
              to='/blog'
              className={location.pathname === '/blog' ? 'active' : ''}
            >{t('blog')}
            </Link>
          </div>
          <div className="language-selector d-flex justify-content-end">
          <div className="dropdown">
          <button className="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'rgba(0, 0, 0, 0.7)'}}>
            <GlobeIcon />
          </button>
          <ul className="dropdown-menu" >
            {languages.map(({code, name, country_code}) => (
              <li key={country_code}>
                <button className="dropdown-item" onClick={() => i18next.changeLanguage (code)} disabled={code === currentLanguageCode}>
                  <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>

          </div>
          <div className='nav-appointment'>
            <Link to='/devenir-partenaire'>{t('appointment')}</Link>
          </div>
        </nav>
      </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
