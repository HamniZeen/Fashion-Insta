import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const [slides, setSlides] = useState([
    {
      id: 1,
      image: '/images/croptop.jpg',
      title: 'Crop Top',
      subtitle: 'Stylish and trendy crop top',
    },
    {
      id: 2,
      image: '/images/kurti.jpg',
      title: 'Kurti',
      subtitle: 'Elegant kurti for any occasion',
    },
    {
      id: 3,
      image: '/images/shirtdress.jpg',
      title: 'Shirt Dress',
      subtitle: 'A comfortable and fashionable shirt dress',
    },
    {
      id: 4,
      image: '/images/shortdress.jpg',
      title: 'Short Dress',
      subtitle: 'Short dress for Summer',
    },
    {
      id: 5,
      image: '/images/smartjeggings.jpg',
      title: 'Smart Jeggings',
      subtitle: 'Stylish jeggings for casual wear',
    },
  ]);

  return (
    <div className="hero-carousel-container">
      <Carousel showArrows={true} showStatus={false} showThumbs={false}>
        {slides.map((slide) => (
          <div className="carousel-slide" key={slide.id}>
            <img src={slide.image} alt={slide.title} />
            <div className="carousel-caption">
              <h2 className="title">{slide.title}</h2>
              <p className="subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
