import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import '../css/components/App.scss'

import Home from "../pages/Home"
import APropos from "../pages/APropos"
import Blog from "../pages/Blog"
import CommentCaMarche from "../pages/CommentCaMarche"
import NosSavoirsFaire from "../pages/NosSavoirsFaire"
import RejoignezNous from "../pages/RejoignezNous"

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
      <Route path='home' element= {<Home pageVariants={pageVariants}/>} />
      <Route path='comment-ca-marche' element= {<CommentCaMarche pageVariants={pageVariants}/>} />
      <Route path='nos-savoirs-faire' element= {<NosSavoirsFaire pageVariants={pageVariants}/>} />
      <Route path='a-propos' element= {<APropos pageVariants={pageVariants}/>} />
      <Route path='rejoignez-nous' element= {<RejoignezNous pageVariants={pageVariants}/>} />
      <Route path='blog' element= {<Blog pageVariants={pageVariants}/>} />
    </Route>
  </Routes>
  )
}

export default AnimationRoutes
