import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import Image1 from '../assets/images/banner.jpg';
import Image2 from '../assets/images/CnJjRaoW8AASfQE.jpg';
import Image3 from '../assets/images/post-historia-adidas-predator-18.webp';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HeroData = [
  { id: 1, img: Image1 },
  { id: 2, img: Image2 },
  { id: 3, img: Image3 },
];

const Slide = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false, // ما از دایره‌های سفارشی استفاده می‌کنیم
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    beforeChange: (oldIndex, newIndex) => setCurrent(newIndex),
  };

  const nextSlide = () => sliderRef.current.slickNext();
  const prevSlide = () => sliderRef.current.slickPrev();

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 -mt-7'>
      <div className='relative overflow-hidden rounded-3xl mt-10 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]'>

       
        <div className="absolute top-1/2 right-3 transform -translate-y-1/2 z-10 cursor-pointer text-white text-4xl" onClick={nextSlide}>
          <IoIosArrowBack className="rotate-180" /> 
        </div>
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10 cursor-pointer text-white text-4xl" onClick={prevSlide}>
          <IoIosArrowBack /> 
        </div>

        <Slider ref={sliderRef} {...settings}>
          {HeroData.map(({ id, img }) => (
            <div key={id} className='relative w-full h-[400px] sm:h-[500px] lg:h-[585px]'>
              <img
                src={img}
                alt={`Slide ${id}`}
                className='w-full h-[595px] object-cover'
              />
            </div>
          ))}
        </Slider>

        {/* دایره‌های نشانگر اسلاید */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {HeroData.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                current === index ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => sliderRef.current.slickGoTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
