import React from 'react'
import { motion } from 'framer-motion';
import GlobalFooter from '../components/globalFooter/GlobalFooter';
import '../css/pages/commentCaMarche.scss'
import { Link } from 'react-router-dom';

function CommentCaMarche({pageVariants}) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='commentCaMarche-container'>

      <div className='commentCaMarche-presentation'>

        <div className='presentation-left'>

          <div className='left-content'>
            <h2>Comment <strong>ça marche</strong></h2>
            <p>Découvrez comment notre solution clé en main peut transformer votre activité.</p>
            <Link to='/rejoignez-nous'>Prendre RDV</Link>
          </div>

        </div>

        <div className='presentation-right'>
          <div className='right-content'>

          </div>
        </div>

      </div>

      <div className='commentCaMarche-promotion'>
        <div className='promotion-content'>
          <p>Propulsez votre restaurant vers de nouveaux sommets grâce à Light Kitch, votre partenaire expert en restaurants virtuels. Nous nous occupons de tout, de la création de marques virtuelles sur mesure à l’optimisation de vos menus et de vos campagnes marketing, afin de maximiser votre visibilité et vos revenus sur les plateformes de livraison.</p>
        </div>
      </div>

      <GlobalFooter />

    </motion.div>
  )
}

export default CommentCaMarche
