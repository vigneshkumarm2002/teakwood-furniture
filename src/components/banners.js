import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronRightIcon ,ChevronLeftIcon } from '@heroicons/react/24/outline';


const Banners = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl pt-24 lg:px-8 px-6">
        <div className="relative">
          <Slider {...settings} ref={sliderRef}>
            {/* Your banner slides go here */}
            <div className="w-full h-[300px] bg-red-300">Banner 1</div>
            <div className="w-full h-[300px] bg-blue-300">Banner 2</div>
            <div className="w-full h-[300px] bg-green-300">Banner 3</div>
          </Slider>
          <button className="absolute top-1/2 left-4 transform -translate-y-1/2  " onClick={goToPrev}>
           <ChevronLeftIcon  className="w-6 h-6"/>
          </button>
          <button className="absolute top-1/2 right-4 transform -translate-y-1/2   " onClick={goToNext}>
          <ChevronRightIcon  className="w-6 h-6"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banners;
