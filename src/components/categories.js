import React from "react";
import { motion } from "framer-motion";

const Categories = () => {
  const products = [
    { name: "Living", href: "#" },
    { name: "Bedroom", href: "#" },
    { name: "Dinning & Kitchen", href: "#" },
    { name: "Storage", href: "#" },
    { name: "Study", href: "#" },
    { name: "Outdoor", href: "#" },
    { name: "Baby & Kids", href: "#" },
    { name: "Office", href: "#" },
    { name: "Decor", href: "#" },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto   max-w-7xl py-32 lg:px-8 px-6  ">
        <div className="text-2xl text-[#0E6B66] font-semibold text-center ">
          Our Categories
        </div>
        <p className="text-base mx-auto mt-4 text-gray-900 text-center max-w-2xl">
          Discover a wide range of furniture options tailored to suit your style
          and needs. From contemporary pieces to timeless classics,
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-normal gap-4 mt-8">
          {products.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="relative w-full h-[150px] flex items-center justify-center rounded-lg cursor-pointer bg-black overflow-hidden"
                whileHover="hover"
             
              >
                <motion.img
                    initial={{ opacity: 0.7,scale:1 }}
                    variants={{
                      hover: {
                        opacity: 1,
                        scale:1.1
                      },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "linear",
                    }}
                  className="w-full h-full rounded-lg object-cover "
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <motion.p
                  className="absolute text-center font-medium text-lg text-white whitespace-normal"
                  initial={{ opacity: 1, }}
                  variants={{
                    hover: {
                      opacity: 0,
                    },
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "linear",
                  }}
                >
                  {item.name}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
