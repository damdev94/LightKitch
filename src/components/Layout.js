import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Layout = ({ children, pageVariants }) => {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='layout-container'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </motion.div>
  );
};

export default Layout;
