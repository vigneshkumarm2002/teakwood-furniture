import React from "react";
import TeakWoodFactory from "./../assets/images/Teakwood_factory.jpg";
import Centuary from "./../assets/images/brands/centuary.jpg";
import Duroflex from "./../assets/images/brands/duroflex.jpg";
import Zen from "./../assets/images/brands/zen.jpeg";
import Benefits from "./benefits";
import FAQ from "./faq";
const About = () => {
  const brands = [Centuary, Duroflex, Zen];
  return (
    <>
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-24 mt-14 lg:px-8 ">
        <div className="flex flex-col md:flex-row items-center gap-12 h-full">
          <h1 className="text-[17px] w-full md:w-[50%] ">
            {" "}
            <span className="text-2xl block text-[#0E6B66] font-semibold mb-4">
              About Us
            </span>
            Teak Wood Factory is a Kerala based Furniture Manufacturing company
            focusing exclusively on solid teak wood since 1984. <br />
            <br />
            The Teak Wood Factory designs are contemporary, straight-line &
            uncluttered-unique in character but matched to the traditional
            Indian needs and taste. We pride ourselves as we use one of the best
            teak wood in India called Nilamboor teak from Kerala. <br />
            <br />
            We have a fearless attitude and approach toward furniture
            manufacturing. We always have a strong thirst for what is new,
            interesting, exciting, and creative. We pride ourselves on
            outshining the very depth of design by delivering in luxurious,
            creative, and beautiful homes that directly correspond to our client
            needs. <br />
            <br />
          </h1>

          <div className=" w-full md:w-[50%] flex-0 ">
            <img
              src={TeakWoodFactory}
              className="w-full h-full rounded-lg object-cover "
              alt="Factory Image"
            />
          </div>
        </div>

        <div className="pt-24 flex flex-col gap-8 items-center">
          <h1 className="text-xl block text-[#0E6B66] font-semibold mb-4"> Brands We Deal In </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 ">
            {brands?.map((item, index) => {
              return (<div className="w-24 h-24 rounded-full border flex items-center justify-center"> 
                <img src={item} className="full w-full rounded-full " />
              </div>);
            })}
          </div>
        </div>
      </div>
    </div>
<Benefits />
<FAQ paddingTop />
    </>
  );
};

export default About;
