import React from 'react'
import { motion } from 'framer-motion';
import Article from '../../components/blog/articles/article'
import { getArticlesData } from '../../data/data';
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export const article1Data = {
  title: 'La Révolution des Restaurants Virtuels',
  author: 'Admin',
  category: 'Uncategorized',
  image: 'https://res.cloudinary.com/dt04wtcwf/image/upload/v1728907319/LightKitch/article1_s7har4.jpg',
  date: 'May 20, 2024',
  text: (
    <>
      <p>Dans un monde de plus en plus numérique, les applications de livraison de repas ont radicalement transformé l’industrie de la restauration. Des plateformes telles que <strong>Uber Eats</strong> et <strong>Just Eat</strong> redéfinissent fondamentalement ce qu’il faut pour diriger un restaurant. Light Kitch devient votre partenaire parfait pour vous lancer dans ce monde numérique et propulser votre restaurant dans ce monde digital.</p>

      <br/>

      <h3>La Technologie au Cœur de l’Expérience</h3>
      <p>
        La tendance a donné naissance à un modèle numérique : les <strong>“restaurants virtuels”</strong>, liés à des établissements avec un lieu physique mais élaborant des plats exclusifs pour les applications. Cela permet d’élargir une offre qui se dévoile comme une possibilité non explorée :
        <em>Avoir des marques virtuelles spécialisées</em>, tenant compte des tendances et envies de ses clients fidélisés, et en même temps attirer de nouveaux clients.
      </p>
      <br />

      <p>
        L’amélioration continue de l’expérience en ligne et de l’efficacité opérationnelle a transformé les restaurants virtuels en un centre d’investissement majeur. Les entreprises reconnaissent le potentiel et s’embarquent dans le monde des restaurants virtuels.
      </p>
      <br/>

      <h3>Fonctionnement d’un Restaurant Virtuel</h3>
      <br/>
      <p>
        Ils opèrent sur des plateformes numériques. Les clients parcourent les menus, passent des commandes et payent en ligne. Le restaurant reçoit la demande, prépare la nourriture, et un service de livraison la transporte au client. Simple, efficace et adapté aux nouvelles formes de consommation.
      </p>
      <br />

      <h3>Défis du Propriétaire d’un Restaurant Virtuel</h3>
      <br/>
      <p>
        Bien que les coûts diminuent, la rentabilité n’est pas garantie. Le marketing devient crucial.
        Dans un marché compétitif, une promotion appropriée est essentielle pour se démarquer. Se tenir au courant des tendances et perfectionner les compétences en marketing sont des conditions de succès.
      </p>
      <p>
        De même, le temps consacré à la gestion administrative des plateformes, les actualisations, l’optimisation des comptes, les plaids et la communication avec les supports des applications, peut devenir un poids assez important que nous savons, peut vite se transformer en un blocage de votre expérience… Et pour cela, on est là!
      </p>

      <br/>
      <h3>Light Kitch, votre partenaire digital</h3>
      <br/>
      <p>
        Light Kitch, dans son engagement envers l’innovation, mène l’expertise du marketing digital sur les plateformes de livraison au service des restaurants virtuels. L’avenir de la restauration réside dans la numérisation, et nous sommes là pour façonner ce futur.
      </p>
      <br/>

      <p><strong>Vous nous rejoignez dans cette excitante aventure culinaire ?</strong></p>
      <br/>
    </>
  ),
};

function ArticleDetails({pageVariants}) {

  const { id } = useParams();
  const { t } = useTranslation('articles');
  const articlesData = getArticlesData(t)
  const article = articlesData.find(article => article.id === parseInt(id));

  if (!article) {
    return <div>Article non trouvé</div>;
  }

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='article1-container'>

        <Article
          id= {article.id}
          title={article.title}
          author={article.author}
          category={article.category}
          image={article.image}
          date={article.date}
          text={article.text}
        />

    </motion.div>
  )
}

export default ArticleDetails
