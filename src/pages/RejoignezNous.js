import React from 'react'
import { motion } from 'framer-motion';

function RejoignezNous({pageVariants}) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='rejoignezNous-container'>
      <h1>Rejoignez-nous</h1>
    </motion.div>
  )
}

export default RejoignezNous
