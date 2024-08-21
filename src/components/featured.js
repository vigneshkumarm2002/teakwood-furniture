import React, { useEffect, useState } from "react";
import ProductCard from "./card";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { useAsyncError } from "react-router";
import ProductPage from "./productPage";
import ProductDetails from "./productDetails";
import axios from "axios";

const Featured = () => {
  const data = [
    {
      name: "Elegant Velvet Sofa",
      description:
        "Upgrade your living room with this luxurious velvet sofa, offering both style and comfort.",
      price: "₹25,999",
      variants: ["2-seater", "3-seater", "L-shaped"],
      colors: ["Beige", "Navy Blue", "Emerald Green", "Burgundy"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      name: "Classic Wooden Dining Table",
      description:
        "Gather around this sturdy wooden dining table for memorable family dinners and gatherings.",
      price: "₹12,499",
      variants: ["Round", "Rectangular", "Extendable"],
      colors: ["Oak", "Walnut", "Espresso"],
      sizes: ["4-seater", "6-seater", "8-seater"],
    },
    {
      name: "Modern Glass Coffee Table",
      description:
        "Add a contemporary touch to your living space with this sleek glass coffee table.",
      price: "₹8,999",
      variants: ["Oval", "Rectangular", "Round"],
      colors: ["Clear", "Black", "White"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      name: "Plush Upholstered Armchair",
      description:
        "Sink into the plush comfort of this upholstered armchair, perfect for reading or relaxation.",
      price: "₹6,799",
      variants: ["Single", "Rocking", "Recliner"],
      colors: ["Grey", "Beige", "Charcoal"],
      sizes: ["Standard", "Large"],
    },
    {
      name: "Sleek Metal Bed Frame",
      description:
        "Transform your bedroom into a modern retreat with this sleek metal bed frame.",
      price: "₹18,999",
      variants: ["Queen", "King", "California King"],
      colors: ["Silver", "Black", "Gold"],
      sizes: ["Single", "Double", "Queen", "King"],
    },
    {
      name: "Vintage Leather Ottoman",
      description:
        "Add a touch of vintage charm to your living space with this leather ottoman, perfect for extra seating or as a footrest.",
      price: "₹9,499",
      variants: ["Square", "Round", "Rectangular"],
      colors: ["Brown", "Tan", "Black"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      name: "Rustic Wooden Bookshelf",
      description:
        "Organize your books and display your favorite decor items with this rustic wooden bookshelf, featuring multiple shelves for storage.",
      price: "₹15,299",
      variants: ["Tall", "Wide", "Corner"],
      colors: ["Natural Wood", "White Wash", "Dark Brown"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      name: "Cozy Fabric Loveseat",
      description:
        "Snuggle up with your loved one on this cozy fabric loveseat, perfect for intimate conversations or movie nights.",
      price: "₹21,999",
      variants: ["2-seater", "3-seater"],
      colors: ["Beige", "Grey", "Navy Blue"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      name: "Chic Marble Dining Set",
      description:
        "Elevate your dining experience with this chic marble dining set, combining style and sophistication.",
      price: "₹32,499",
      variants: ["Round", "Rectangular"],
      colors: ["White Marble", "Black Marble"],
      sizes: ["4-seater", "6-seater", "8-seater"],
    },
    {
      name: "Minimalist TV Stand",
      description:
        "Keep your entertainment area organized with this minimalist TV stand, featuring ample storage space and a sleek design.",
      price: "₹7,999",
      variants: ["Floating", "Console"],
      colors: ["White", "Black", "Walnut"],
      sizes: ["Small", "Medium", "Large"],
    },
  ];

  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_PORT}/api/product/`
      );
      console.log("Response data:", response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const [more, setMore] = useState(false);
  const [open, setOpen] = useState(false);
  const [featuredData, setFeaturedData] = useState(null);
  const [clickedData, setClickedData] = useState(null);

  useEffect(() => {
    more ? setFeaturedData(data) : setFeaturedData(data.slice(0, 8));
  }, [more]);

  useEffect(() => {
    console.log("object", clickedData);
  }, [open]);

  return (
    <div className="bg-white">
      <div className="mx-auto   max-w-7xl pb-20 lg:px-8 px-6 ">
        <div className="text-2xl text-[#0E6B66] font-semibold text-left pb-8">
          Featured Products
        </div>
        <div className="w-full grid grid-cols-1 min-[650px]:grid-cols-2 min-[900px]:grid-cols-3  xl:grid-cols-4 gap-4 ">
          {featuredData?.map((item, index) => {
            return (
              <ProductCard
                setOpen={setOpen}
                setClickedData={setClickedData}
                data={item}
              />
            );
          })}
        </div>
        <ProductDetails
          product={clickedData}
          open={open}
          close={() => setOpen(false)}
        />
        <button
          onClick={() => {
            setMore(!more);
          }}
          className=" min-w-[150px] justify-center mt-12 w-max mx-auto text-center rounded-md text-base  px-6 py-2  font-medium text-white shadow-sm gradient flex items-center gap-[2px] cursor-pointer"
        >
          <p>{more ? "See less" : "See more"} </p>
          {more ? (
            <ChevronUpIcon className="w-6 h-6 pt-[2px]  " />
          ) : (
            <ChevronDownIcon className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Featured;
