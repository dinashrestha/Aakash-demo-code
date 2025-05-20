import React from 'react';
import SlickSlider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from '../Assets/teacher.jpg';
import image2 from '../Assets/ireland.jpg';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: true,
};

const ImageSlider = () => {
  return (
    <div className="Slider" style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <SlickSlider {...settings}>
        <div>
          <img
            src={image1}
            alt="Slide 1"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div>
          <img
            src={image2}
            alt="Slide 2"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </SlickSlider>
    </div>
  );
};

export default ImageSlider;
