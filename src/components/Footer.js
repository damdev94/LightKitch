import React from 'react';
import '../css/components/footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="social-icons">
          <Link to='#'>
            <FontAwesomeIcon icon={faInstagram} className='social-logo instagram-logo' />
          </Link>
          <Link to='#'>
            <FontAwesomeIcon icon={faFacebook} className='social-logo facebook-logo'/>
          </Link>
          <Link to='#'>
            <FontAwesomeIcon icon={faWhatsapp} className='social-logo whatsapp-logo'/>
          </Link>
          <Link to='#'>
            <FontAwesomeIcon icon={faXTwitter} className='social-logo x-logo' />
          </Link>
          <Link to='#'>
            <FontAwesomeIcon icon={faYoutube} className='social-logo youtube-logo'/>
          </Link>
        </div>
        <div className='legal-info'>
          <Link to="#" >Politique de confidentialité </Link>  |  <Link to="#" > Conditions d’utilisation </Link>
        </div>
        <div className='footer-copyright'>
          <p>© 2024 LightKitch. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
