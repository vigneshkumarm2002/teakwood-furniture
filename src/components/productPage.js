import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "./card";

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState(null);
  const [subcategoryData, setSubcategoryData] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const { id } = useParams();

  const fetchData = async () => {
    setLoading(true);
    try {
      const baseUrl = process.env.REACT_APP_API_PORT;

      // API calls for products, category, and subcategories
      const [productsRes, categoryRes, subcategoriesRes] = await Promise.all([
        axios.post(`${baseUrl}/api/products/category/`, {
          category: selectedSubcategories.length > 0 ? null : [id], // Use the main category if no subcategories selected
          sub_category:
            selectedSubcategories.length > 0 ? selectedSubcategories : null, // Use subcategories if selected
          min_price: priceRange[0],
          max_price: priceRange[1],
        }),
        axios.get(`${baseUrl}/api/category/${id}/`), // Fetch category details
        axios.get(`${baseUrl}/api/sub-category/category/${id}/`), // Fetch subcategories for the category
      ]);

      // Set the state with the response data
      setProductData(productsRes.data.product || []);
      setCategoryData(categoryRes.data.category || null);
      setSubcategoryData(subcategoriesRes.data.sub_category || []);
    } catch (error) {
      console.error("Error fetching data:", error.response || error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when the component mounts and when dependencies change
  useEffect(() => {
    fetchData();
  }, [id, selectedSubcategories, priceRange]);

  // Handle selection of subcategories
  const handleSubcategorySelect = (subcategoryId) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategoryId)
        ? prev.filter((id) => id !== subcategoryId) // Remove if already selected
        : [...prev, subcategoryId] // Add if not selected
    );
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 py-12">
        <h1 className="text-2xl font-bold mb-2 text-gray-800 capitalize">
          {categoryData?.name || "Category"}
        </h1>
        <p className="text-gray-600 mb-8">{categoryData?.description}</p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Section */}
          <div className="w-full md:w-1/4">
            <div className="bg-gray-200 rounded-lg shadow-sm p-6 sticky top-20">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">
                Filters
              </h2>

              {/* Subcategories */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-700 mb-3">
                  Subcategories
                </h3>
                <div className="space-y-2">
                  {subcategoryData.map((subcategory) => (
                    <label key={subcategory.uuid} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedSubcategories.includes(
                          subcategory.uuid
                        )}
                        onChange={() =>
                          handleSubcategorySelect(subcategory.uuid)
                        }
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2 text-gray-700">
                        {subcategory.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Price Range</h3>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([parseInt(e.target.value), priceRange[1]])
                    }
                    className="w-full px-2 py-1 border rounded"
                    placeholder="Min"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full px-2 py-1 border rounded"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full md:w-3/4">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {productData.length > 0 ? (
                  productData.map((item) => (
                    <ProductCard key={item.id} data={item} />
                  ))
                ) : (
                  <p>No products found for the selected filters.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
