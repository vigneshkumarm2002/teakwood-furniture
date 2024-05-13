import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import React, { useRef } from "react";

const YT = () => {
  const links = [
    "https://youtube.com/embed/tuTGRncdMlc?si=j4kotXInEoEkFdrq", 
    "https://youtube.com/embed/IXYLbKpqb7w?si=dOjo_5ZS9q9nzgN-",  
    "https://youtube.com/embed/-UmjbwYMJYk?si=FzR8XluY0Mo0NIVl",  
    "https://youtube.com/embed/_7pdDf8Zrlc?si=177OLe98zagryKpX", 
    "https://youtube.com/embed/n5x9o3OgeSk?si=gUYGqnT6kX0El1zb",

  ];

  const videoLinks = [
    "https://www.youtube.com/watch?v=VH91Hy1b0M4",
    "https://www.youtube.com/watch?v=-Dvd99WPAhA",
    "https://www.youtube.com/watch?v=C_5dR2zfoBU",
    "https://www.youtube.com/watch?v=7ef85yaswII",
    "https://www.youtube.com/watch?v=IXYLbKpqb7w",
    "https://www.youtube.com/watch?v=6Bs7F8q-S1I",
    "https://www.youtube.com/watch?v=yH2PqU8iPr4",
    "https://www.youtube.com/watch?v=tuTGRncdMlc",
    "https://www.youtube.com/watch?v=qBFGIHWZu_g",
    "https://www.youtube.com/watch?v=vwlMIGdN6iY",
    "https://www.youtube.com/watch?v=g5R08zEohus",
    "https://www.youtube.com/watch?v=VLf0ROMi9dY",
    "https://www.youtube.com/watch?v=yWC-cRT94Ns",
    "https://www.youtube.com/watch?v=hCEY2G2msHI",
    "https://www.youtube.com/watch?v=QT2r_2OpZAw",
    "https://www.youtube.com/watch?v=WyzVXwdv2Dg",
    "https://www.youtube.com/watch?v=_7pdDf8Zrlc",
    "https://www.youtube.com/watch?v=zt-oZxXvIYM",
    "https://www.youtube.com/watch?v=ZmTIMuylkH8",
    "https://www.youtube.com/watch?v=-UmjbwYMJYk",
    "https://www.youtube.com/watch?v=pIpaN0soZ20",
    "https://www.youtube.com/watch?v=VaRogpuQvdM",
    "https://www.youtube.com/watch?v=FSCVfbcVHmk",
    "https://www.youtube.com/watch?v=lF4loLmP_F0",
    "https://www.youtube.com/watch?v=VkduUXCsDtE",
    "https://www.youtube.com/watch?v=MAmU_x1pxGI",
    "https://www.youtube.com/watch?v=klVJepvUgOc",
    "https://www.youtube.com/watch?v=KdMB4pHNVfk",
    "https://www.youtube.com/watch?v=rLwc53LFna8",
    "https://www.youtube.com/watch?v=n5x9o3OgeSk",
    "https://www.youtube.com/watch?v=wuAQ7qHNpyI",
    "https://www.youtube.com/watch?v=s_QHbnwiXEE",
    "https://www.youtube.com/watch?v=PyFtGpGhlL8",
    "https://www.youtube.com/watch?v=5qb86Fwp1Ms",
    "https://www.youtube.com/watch?v=tnsR8iWoP8o"
  ];
  

  const containerRef = useRef(null);
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="bg-gray-200">
      <div className="mx-auto   max-w-7xl py-20 lg:px-8 px-6 mt-32  ">
        <div className="flex justify-between">
          <h1 className="text-2xl text-[#0E6B66] font-semibold text-left pb-8">
            Watch our videos
          </h1>
          <div className="flex gap-4">
            <ChevronLeftIcon onClick={scrollLeft}  className="w-8 h-8 cursor-pointer border-2 border-[#0E6B66] text-[#0E6B66] rounded-full" />
            <ChevronRightIcon onClick={scrollRight}  className="w-8 h-8 cursor-pointer border-2 border-[#0E6B66] text-[#0E6B66] rounded-full " />
          </div>
        </div>
        <div
          ref={containerRef}
          className="flex flex-row overflow-x-auto gap-4 no-scroll"
        >
          {links?.map((item, index) => {
            return (
              <iframe
                width="400"
                height="250"
                src={item}
                title="youtubebe video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default YT;
