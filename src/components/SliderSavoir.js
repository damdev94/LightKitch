import React, {useState} from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../css/components/sliderSavoir.scss'

function SliderSavoir() {

  const [isHovered, setIsHovered] = useState(false);

  const images = ["https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984560/LightKitch/2_e1c0ck.jpg","https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984560/LightKitch/1_kuwyw9.jpg"]

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
        containerClass="carousel-savoir-container"
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
        {images.map((image, index) => (
          <div key={index} className="savoir-slides">
            <img key={index} src={image} alt={`Slide ${index}`} />
          <div

          initial="hidden"
          animate="visible"
          className="text-container"
        >
        </div>

          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default SliderSavoir
