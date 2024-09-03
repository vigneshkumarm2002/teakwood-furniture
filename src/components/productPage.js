import React, { useEffect, useState } from "react";
import ProductCard from "./card";
import ProductDetails from "./productDetails";
import { useParams } from "react-router";
import axios from "axios";
import RangeSlider from "./priceSlider";

const ProductPage = () => {
  const [clickedData, setClickedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState(null);
  const [subcategoryData, setSubcategoryData] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  const { id } = useParams();

  const fetchProducts = async () => {
    const dataToSend = {
    category : selectedSubcategories.length > 0 ? null : [id],
      sub_category: selectedSubcategories.length > 0 ? selectedSubcategories : null,
    };
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_PORT}/api/products/category/`,
        dataToSend
      );

      console.log(response?.data);
      setProductData(response?.data?.product);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_PORT}/api/category/${id}/`
      );
      setCategoryData(response?.data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSubCategoryList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_PORT}/api/sub-category/category/${id}/`
      );
      setSubcategoryData(response?.data?.sub_category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategory();
    fetchSubCategoryList();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [selectedSubcategories]);

  const handleSubcategorySelect = (subcategoryId) => {
    const updatedSelection = selectedSubcategories.includes(subcategoryId)
      ? selectedSubcategories.filter((id) => id !== subcategoryId)
      : [...selectedSubcategories, subcategoryId];
    setSelectedSubcategories(updatedSelection);
  };

  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(7000);

  const min = 100;
  const max = 10000;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl pb-20 pt-28 lg:px-8 px-6 ">
        <h1 className="font-semibold text-[24px] pb-8 capitalize">
          {categoryData?.name}
        </h1>
        <div className="mb-6">
          <p className="font-medium  text-lg pb-3">Filter by</p>
          <div className="flex gap-4 items-center">
            <p className="">Sub category : </p>
            {subcategoryData?.map((subcategory) => (
              <div
                key={subcategory.uuid}
                className={`inline-block px-2 py-[2px] text-sm border cursor-pointer ${
                  selectedSubcategories.includes(subcategory.uuid)
                    ? "border-[#0E6B66] bg-[#0E6B66]/10"
                    : "border-gray-300"
                } rounded`}
                onClick={() => handleSubcategorySelect(subcategory.uuid)}
              >
                {subcategory.name}
              </div>
            ))}
          </div>
          {/* <RangeSlider
            minPrice={minPrice}
            maxPrice={maxPrice}
            min={min}
            max={max}
            onMinPriceChange={setMinPrice}
            onMaxPriceChange={setMaxPrice}
          /> */}
        </div>

        <div className="w-full grid grid-cols-1 min-[650px]:grid-cols-2 min-[900px]:grid-cols-3 xl:grid-cols-4 gap-4">
          {productData?.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
