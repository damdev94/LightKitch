import React, {useState} from 'react';
import Carousel from 'react-multi-carousel';
import { motion } from 'framer-motion'
import 'react-multi-carousel/lib/styles.css';
import '../css/components/slider.scss';

function Slider() {

  const sliderTextVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  const image1 = {
    src : "https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984564/LightKitch/icon1_ynccqo.png",
    text : ["Analyse de votre situation et de la concurrence", "Création de comptes adaptés et personnalisés", "Tarifs préférentiels"]};
  const image2 ={
    src : "https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984564/LightKitch/icon2_xbx7ti.png",
    text : ["Expertise et conseils", "Digitalisation et optimisation du menu", "Amélioration du référencement In-App"]};
  const image3 = {
    src : "https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984564/LightKitch/icon3_gjulu0.png",
    text : ["Gestion du back-office", "Utilisation de multiples leviers", "Marketing et réponses aux avis clients"]};
  const image4 = {
    src : "https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984564/LightKitch/icon4_edozlo.png",
    text : ["Suivi régulier des partenaires", "S.A.V. premium"]
  };
  const data = [image1, image2, image3, image4];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`caroussel-wrapper ${isHovered ? "active" : ''}`}
      onMouseEnter={() => {setIsHovered(true)}}
      onMouseLeave={() => {setIsHovered(false)}}>
      <Carousel
        additionalTransfrom={0}
        arrows={isHovered}
        autoPlay
        autoPlaySpeed={4000}
        centerMode={false}
        className=""
        containerClass="carousel-container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover={true}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots= {false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {data.map((url, index) => (
          <div key={index} className="slides">
            <img key={index} src={url.src} alt={`Slide ${index}`} />
          <motion.div
          variants={sliderTextVariants}
          initial="hidden"
          animate="visible"
          className="text-container"
        >
          {url.text.map((text, index) => (
            <p className='slide-text' key={index}>{text}</p>
          ))}
        </motion.div>

          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
