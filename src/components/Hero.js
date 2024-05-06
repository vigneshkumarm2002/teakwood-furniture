import { useEffect, useState } from "react";
import Banner1 from "./../assets/images/banner1.jpg";
import Banner2 from "./../assets/images/banner2.jpg";
import Banner3 from "./../assets/images/banner3.jpg";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = document.querySelectorAll(".hom-slid .item");

  useEffect(() => {
    const intervalId = setInterval(() => {
      showNextItem();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]); // useEffect will re-run whenever currentIndex changes

  const showNextItem = () => {
    const currentItem = items[currentIndex];
    currentItem?.classList.remove("active");

    let nextIndex = currentIndex + 1;
    if (nextIndex >= items.length) {
      nextIndex = 0;
    }

    setCurrentIndex(nextIndex);
    const nextItem = items[nextIndex];
    nextItem?.classList.add("active");
  };

  return (
    <main className="bg-[#0E6B66] ">
      <div className="mx-auto   max-w-7xl pb-14  px-6 sm:px-8  sm:pb-32 pt-[140px]  lg:pt-[170px]">
        <div className="mx-auto relative gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="  w-full  lg:shrink-0 lg:max-w-[47%] text-center lg:text-left flex flex-col items-center  lg:items-start">
            <h1
              style={{ lineHeight: 1.2 }}
              className="text-4xl font-bold text-white sm:text-[54px] font_poppins"
            >
              <span>Explore bespoke furniture magic at Teek Woods.</span>
            </h1>

            <p className="mt-6 text-xl leading-8 text-white ">
              Transform your living space with the timeless elegance of Teek
              Woods furniture, where craftsmanship meets sophistication to
              create an ambiance of unparalleled beauty and comfort.
            </p>
            <div className="mt-10 flex items-center gap-x-6 w-[fit-content] ">
              <a
                href="tel:09876543210"
                target="blank"
                className="min-w-[150px] text-center rounded-md gradient px-3.5 py-3 text-lg font-medium text-white shadow-sm hover:bg-[#A91CDB] "
              >
                Call now
              </a>
            </div>
          </div>
          <div className="w-[70%] h-[500px] rounded-2xl hom-slid overflow-hidden  absolute -top-5 -right-[240px] bg-red-300 px-6 md:px-16 lg:px-0 mt-14 sm:mt-24 lg:mt-[0px] flex flex-col gap-2 sm:gap-4  justify-center items-center lg:items-start">
            <img
              src={Banner1}
              alt="Slider Image 1"
              loading="lazy"
              className="w-full h-full object-cover item active"
            />

            <img
              src={Banner2}
              alt="Slider Image 2"
              loading="lazy"
              className="w-full h-full object-cover item "
            />

            <img
              src={Banner3}
              alt="Slider Image 3"
              loading="lazy"
              className="w-full h-full object-cover item "
            />
          </div>
        </div>
      </div>
  
    </main>
  );
}
