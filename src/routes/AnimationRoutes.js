import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import '../css/components/App.scss'

import Home from "../pages/Home"
import APropos from "../pages/APropos"
import Blog from "../pages/Blog"
import CommentCaMarche from "../pages/CommentCaMarche"
import NosSavoirsFaire from "../pages/NosSavoirsFaire"
import RejoignezNous from "../pages/RejoignezNous"
import Layout from '../components/Layout'

function AnimationRoutes() {

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 , transition: { duration: 1.2} },
    exit: { opacity: 0, transition: { duration: 1.2} }
  };

  return (
  <Routes>

    <Route path='/' element={<Navigate to="/home" replace />} />

    <Route path='/' >
      <Route path='home' element= {<Layout><Home pageVariants={pageVariants}/></Layout>} />
      <Route path='comment-ca-marche' element= {<Layout><CommentCaMarche pageVariants={pageVariants}/></Layout>} />
      <Route path='nos-savoirs-faire' element= {<Layout><NosSavoirsFaire pageVariants={pageVariants}/></Layout>} />
      <Route path='a-propos' element= {<Layout><APropos pageVariants={pageVariants}/></Layout>} />
      <Route path='rejoignez-nous' element= {<Layout><RejoignezNous pageVariants={pageVariants}/></Layout>} />
      <Route path='blog' element= {<Layout><Blog pageVariants={pageVariants}/></Layout>} />
    </Route>
  </Routes>
  )
}

export default AnimationRoutes
