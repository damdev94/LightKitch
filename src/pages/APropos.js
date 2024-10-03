import React from 'react'
import { motion } from 'framer-motion';

function APropos({pageVariants}) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='apropos-container'>
      <h1>A propos</h1>
    </motion.div>
  )
}

export default APropos
