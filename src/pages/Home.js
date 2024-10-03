import React from 'react'
import { motion } from 'framer-motion';

function Home({pageVariants}) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='home-container'>
      <h1>Home</h1>
    </motion.div>
  )
}

export default Home
