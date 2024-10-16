import React from 'react'
import { Routes, Route} from 'react-router-dom'
import '../css/components/App.scss'

import Home from "../pages/Home"
import APropos from "../pages/APropos"
import Blog from "../pages/Blog"
import CommentCaMarche from "../pages/CommentCaMarche"
import NosSavoirsFaire from "../pages/NosSavoirsFaire"
import RejoignezNous from "../pages/RejoignezNous"
import Layout from '../components/Layout'
import ArticleDetails from '../pages/articles/ArticleDetails'

function AnimationRoutes() {

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 , transition: { duration: 1.2} },
    exit: { opacity: 0, transition: { duration: 1.2} }
  };

  return (

  <Routes>

    <Route path='/' >
      <Route path='' element= {<Layout><Home pageVariants={pageVariants}/></Layout>} />
      <Route path='comment-ca-marche' element= {<Layout><CommentCaMarche pageVariants={pageVariants}/></Layout>} />
      <Route path='nos-savoirs-faire' element= {<Layout><NosSavoirsFaire pageVariants={pageVariants}/></Layout>} />
      <Route path='a-propos' element= {<Layout><APropos pageVariants={pageVariants}/></Layout>} />
      <Route path='devenir-partenaire' element= {<Layout><RejoignezNous pageVariants={pageVariants}/></Layout>} />
      <Route path='blog' element= {<Layout><Blog pageVariants={pageVariants}/></Layout>} />

      {/* Articles */}
      <Route path='articles/:id' element= {<Layout><ArticleDetails pageVariants={pageVariants}></ArticleDetails></Layout>} />
    </Route>
  </Routes>

  )
}

export default AnimationRoutes
