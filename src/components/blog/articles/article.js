import React from 'react'
import '../../../css/components/blog/article.scss'
import GlobalFooter from '../../globalFooter/GlobalFooter'
import { Link } from 'react-router-dom'
import { articlesData } from '../../../data/data'

function Article({
    title,
    author,
    category,
    image,
    date,
    text }) {
  return (
    <div className='article-content'>

      <div className="article-container" id='top'>

        <div className="article-main" >
          <div className="article-title">
            <h1>{title}</h1>
          </div>

          <div className="article-infos">
            By <strong>{author}</strong> | <strong>{date}</strong> | {category} | 0 comments
          </div>

          <div className="article-image">
            <img src= {image} alt='article-image' />
          </div>

          <div className="article-text">
            {text}
          </div>

          <div className="article-comment">
            <h2>Soumettre un commentaire</h2>
            <p>Votre adresse e-mail ne sera pas publiée. Les champs obligatoires sont indiqués par *</p>
            <form>
              <textarea placeholder='commentaire'></textarea>
              <br/>
              <input type='text' placeholder='nom*' />
              <br/>
              <input type='email' placeholder='email*' />
              <br/>
              <input type='text' placeholder='site web' />
              <br/>
              <input type='checkbox' id='saveCheckbox' />
              <label for='saveCheckbox' style={{marginLeft : '5px'}}>Enregistrer mon nom, mon email et mon site web dans ce navigateur pour mon prochain commentaire.</label>

              <div className="submit-button">
                <button type='submit'>Soumettre</button>
              </div>

            </form>
          </div>
        </div>

        <div className="article-sidebar">
          <h2>Recent Posts</h2>

          {articlesData.map((article) => (
            <Link key={article.id} to={`/articles/${article.id}`}>
              {article.title}
            </Link>
          ))}

        </div>
      </div>

      <GlobalFooter />

    </div>
  )
}

export default Article
