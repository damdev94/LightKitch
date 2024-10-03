import React from 'react'
import { motion } from 'framer-motion';

function Blog({pageVariants}) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='blog-container'>
      <h1>Blog</h1>
    </motion.div>
  )
}

export default Blog
