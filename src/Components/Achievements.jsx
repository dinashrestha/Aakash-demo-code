import React from 'react'
import slid from'../Assets/A.png';
import slide from '../Assets/b.png';
import SlickSlider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import irelandd from '../Assets/ireland.jpg';

function Achievements() {
     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };
  return (
  <div>
  <div
    className="relative bg-cover bg-center h-[600px] flex items-center justify-center text-center text-white"
    style={{ backgroundImage: `url(${irelandd})` }}>
    <div className="absolute inset-0 bg-black/50 z-10"></div>

    <div className="relative z-10 max-w-2xl px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-2"> <span className="text-orange-600">AAKASH INSTITUTE</span> ACHIEVEMENTS</h1>
      <p className="text-base md:text-lg ">
        Our Education Awards and Achievements claim that we are one of the top education consultancies in Nepal.
      </p>
    </div>
  </div>



 <div className="py-8 px-4 bg-white">
  <SlickSlider {...settings}>
    <div className="px-2">
      <img
        src={slid}
        alt="Slide 1"
        className="w-full h-[400px] object-cover rounded-lg"
      />
    </div>
    <div className="px-2">
      <img
        src={slide}
        alt="Slide 2"
        className="w-full h-[400px] object-cover rounded-lg"
      />
    </div>
  </SlickSlider>
</div>


</div>


  )
}

export default Achievements