import React from 'react'
import '../../../css/components/blog/articleMini.scss'

function ArticleMini({image, text, infos, author, category, title}) {
  return (
    <div className='articleMini-container'>
      <img src= {image} alt='image-mini'/>
      <div className="articleMini-title">
        {title}
      </div>

      <div className="articleMini-infos">
        By {author} | {infos} | {category}
      </div>

      <div className="articleMini-text">
        {text}
      </div>
    </div>
  )
}

export default ArticleMini
