import React from 'react'
import { motion } from 'framer-motion';
import ArticleMini from '../components/blog/articles/ArticleMini';
import '../css/pages/blog.scss'
import { Link } from 'react-router-dom';
import MarqueeComponent from '../components/globalFooter/globalFooterComponents/MarqueeComponent';
import GlobalFooter from '../components/globalFooter/GlobalFooter';
import { getArticlesData } from '../data/data';
import { useTranslation } from "react-i18next";

function Blog({pageVariants}) {

  const { t } = useTranslation('blog');
  const { t : t2 } = useTranslation('articles');

  const articlesData = getArticlesData(t2)

  return (
    <motion.div id='top' initial="initial" animate="animate" exit="exit" variants={pageVariants} className='blog-content'>

        <div className="blog-container" >

          <div className="blog-title">
            <h1>{t('heading.text')} <strong>{t('heading.strong')}</strong></h1>
            <p>{t('paragraph')}</p>
          </div>

          <div className="blog-articleMini-container">

            { articlesData.map((articleData, index) => (

              <Link to={`/articles/${articleData.id}`}>
                <ArticleMini
                  key={index}
                  image= {articleData.image}
                  title = {articleData.title}
                  text= {articleData.text}
                  infos={articleData.date}
                  author= {articleData.author}
                  category= {articleData.category}
                />
              </Link>
            ))}
          </div>

        </div>
        <MarqueeComponent backgroundColor='#313131' color='white'/>
        <GlobalFooter />
    </motion.div>
  )
}

export default Blog
