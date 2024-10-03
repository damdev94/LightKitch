import React from 'react';
import { Link } from 'react-router-dom';
import '../css/components/navbar.scss';
import { motion } from 'framer-motion';

const Navbar = ({pageVariants}) => {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='transparent-container'>
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
            <Link to='/comment-ca-marche'>Comment ça marche</Link>
            <Link to='/nos-savoirs-faire'>Nos savoirs-faire</Link>
            <Link to='/a-propos'>A propos</Link>
            <Link to='/rejoignez-nous'>Rejoignez-nous</Link>
            <Link to='/blog'>Blog</Link>
          </div>
          <div className='nav-appointment'>
            <Link to='/rejoignez-nous'>Prendre RDV</Link>
          </div>
        </nav>
      </div>
    </motion.div>
  );
};

export default Navbar;
