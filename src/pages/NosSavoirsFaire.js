import React from 'react'
import { motion } from 'framer-motion';

function NosSavoirsFaire({pageVariants}) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='nosSavoirsFaire-container'>
      <h1>Nos savoirs Faire</h1>
    </motion.div>
  )
}

export default NosSavoirsFaire
