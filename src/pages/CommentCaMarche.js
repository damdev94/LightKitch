import React from 'react'
import { motion } from 'framer-motion';

function CommentCaMarche({pageVariants}) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='commentCaMarche-container'>
      <h1>Comment ca marche</h1>
    </motion.div>
  )
}

export default CommentCaMarche
