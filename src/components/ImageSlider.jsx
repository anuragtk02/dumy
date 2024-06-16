// ImageSlider.jsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../assets/img1.1.jpg';
import image2 from '../assets/img2_1.jpg';
import image3 from '../assets/img3.jpg';

const ImageSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    adaptiveHeight: true,
    appendDots: dots => (
      <ul className="flex justify-center p-0 m-0 absolute bottom-4 w-full">
        {dots}
      </ul>
    ),
    customPaging: i => (
      <div className="w-3 h-3 bg-gray-400 rounded-full mx-1"></div>
    ),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative">
      <section id="home">
      <Slider {...sliderSettings}>
        <div className="relative">
          <img src={image2} alt="Product 2" className="w-full h-450 object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-3xl md:text-5xl font-cursive italic bg-terracotta-700 bg-opacity-50 backdrop-blur-md p-4 rounded">
              Every piece tells a story
            </p>
          </div>
        </div>
        <div className="relative">
          <img src={image3} alt="Product 3" className="w-full h-450 object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-3xl md:text-5xl font-cursive italic bg-brown-700 bg-opacity-50 backdrop-blur-md p-4 rounded">
              Crafted with love, adorned with tradition
            </p>
          </div>
        </div>
        <div className="relative">
          <img src={image1} alt="Product 1" className="w-full h-450 object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-3xl md:text-5xl font-cursive italic bg-olive-700 bg-opacity-50 backdrop-blur-md p-4 rounded">
              Elegance is the only beauty that never fades
            </p>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
      </section>
    </div>
  );
};

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white rounded-full p-2 hover:bg-opacity-100 transition z-10"
    onClick={onClick}
  >
    ❮
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white rounded-full p-2 hover:bg-opacity-100 transition z-10"
    onClick={onClick}
  >
    ❯
  </button>
);

export default ImageSlider;
