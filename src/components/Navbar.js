import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/components/navbar.scss';
import { motion } from 'framer-motion';

const Navbar = ({pageVariants}) => {

  const location = useLocation()

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='transparent-container'>
      <motion.div className='transparent-container-scale'
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      exit="exit"
      transition={{ duration: 0.5, ease: 'easeOut' }}>
      <div className='navbar-container'>
        <nav className='nav'>
          <div className='nav-logo'>
              <Link to='/'>
              <video width="150" height="150" autoPlay muted>
                <source src="https://res.cloudinary.com/dt04wtcwf/video/upload/v1727985337/LightKitch/logovideo_k3fdhn.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
              </video>
              </Link>
          </div>
          <div className='nav-links'>
            <Link to='/comment-ca-marche' className={location.pathname === '/comment-ca-marche' ? 'active' : ''}>Comment ça marche</Link>
            <Link to='/nos-savoirs-faire' className={location.pathname === '/nos-savoirs-faire' ? 'active' : ''}>Nos savoirs-faire</Link>
            <Link to='/a-propos' className={location.pathname === '/a-propos' ? 'active' : ''}>A propos</Link>
            <Link to='/devenir-partenaire' className={location.pathname === '/devenir-partenaire' ? 'active' : ''}>Rejoignez-nous</Link>
            <Link to='/blog' className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link>
          </div>
          <div className='nav-appointment'>
            <Link to='/devenir-partenaire'>Prendre RDV</Link>
          </div>
        </nav>
      </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
