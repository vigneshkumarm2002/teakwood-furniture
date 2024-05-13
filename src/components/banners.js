import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import axios from "axios";

const Banners = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_PORT}/api/banner/`)
      .then((res) => {
        console.log("res", res.data);
        setBannerData(res.data.banner);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, []);

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
            {bannerData?.map((item, index) => (
              <div className="w-full h-[300px] bg-red-300">
                <img src={process.env.REACT_APP_API_PORT + item?.image} alt={item?.name} className="w-full" />
              </div>
            ))}
          </Slider>
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-[#0E6B66] "
            onClick={goToPrev}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-[#0E6B66]  "
            onClick={goToNext}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banners;
