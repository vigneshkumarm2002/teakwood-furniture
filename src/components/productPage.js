import React, { useState } from "react";
import ProductCard from "./card";
import ProductDetails from "./productDetails";

const ProductPage = () => {
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
      name: "Modern Leather Recliner",
      description:
        "Relax in style with this modern leather recliner, perfect for your home theater or lounge.",
      price: "₹15,499",
      variants: ["Single", "Double", "Rocking"],
      colors: ["Black", "Brown", "White", "Grey"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      name: "Rustic Wooden Dining Table",
      description:
        "Gather your family around this beautiful wooden dining table for memorable meals.",
      price: "₹18,999",
      variants: ["4-seater", "6-seater", "8-seater"],
      colors: ["Oak", "Walnut", "Mahogany", "Teak"],
      sizes: ["Round", "Rectangular", "Square"],
    },
    {
      name: "Cozy Fabric Armchair",
      description:
        "Sink into this cozy fabric armchair and unwind after a long day.",
      price: "₹9,999",
      variants: ["Single", "Swivel", "Recliner"],
      colors: ["Grey", "Blue", "Green", "Pink"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      name: "Vintage Brass Chandelier",
      description:
        "Add a touch of elegance to any room with this stunning vintage brass chandelier.",
      price: "₹12,499",
      variants: ["5-bulb", "8-bulb", "12-bulb"],
      colors: ["Gold", "Bronze", "Antique Silver"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      name: "Contemporary Glass Coffee Table",
      description:
        "Create a modern focal point in your living room with this sleek glass coffee table.",
      price: "₹7,999",
      variants: ["Round", "Rectangular", "Oval"],
      colors: ["Clear", "Black", "White"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      name: "Plush Throw Pillows Set",
      description:
        "Instantly refresh your sofa or bed with this set of plush throw pillows in assorted colors.",
      price: "₹1,999",
      variants: ["Square", "Rectangle", "Round"],
      colors: ["Red", "Yellow", "Green", "Blue"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      name: "Classic Wooden Bed Frame",
      description:
        "Transform your bedroom into a cozy retreat with this classic wooden bed frame.",
      price: "₹22,499",
      variants: ["Single", "Double", "King"],
      colors: ["Oak", "Walnut", "Mahogany", "Cherry"],
      sizes: ["Twin", "Full", "Queen", "King"],
    },
    {
      name: "Minimalist Metal Desk Lamp",
      description:
        "Illuminate your workspace with this sleek and minimalist metal desk lamp.",
      price: "₹2,499",
      variants: ["Desk Lamp", "Table Lamp", "Clip Lamp"],
      colors: ["Black", "White", "Silver", "Gold"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      name: "Industrial Bar Stools Set",
      description:
        "Add an industrial flair to your kitchen or bar with this set of sturdy metal bar stools.",
      price: "₹6,999",
      variants: ["With Backrest", "Without Backrest"],
      colors: ["Black", "Gunmetal", "Rustic Brown"],
      sizes: ["Counter Height", "Bar Height"],
    },
    {
      name: "Retro Vinyl Record Player",
      description:
        "Experience the nostalgia of vinyl with this retro-inspired record player featuring modern technology.",
      price: "₹11,999",
      variants: [
        "Turntable",
        "Turntable with Bluetooth",
        "Turntable with Speakers",
      ],
      colors: ["Black", "Red", "Blue", "White"],
      sizes: ["Compact", "Standard", "Vintage"],
    },
    {
      name: "Bohemian Fringe Area Rug",
      description:
        "Enhance your living space with this bohemian-style area rug featuring intricate fringe details.",
      price: "₹5,499",
      variants: ["Rectangle", "Round", "Runner"],
      colors: ["Ivory", "Grey", "Beige", "Multi-color"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      name: "Sleek Metal Wall Clock",
      description:
        "Keep track of time in style with this sleek metal wall clock.",
      price: "₹3,999",
      variants: ["Analog", "Digital"],
      colors: ["Black", "White", "Silver", "Gold"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      name: "Vintage Writing Desk",
      description:
        "Channel your inner Hemingway with this vintage-inspired writing desk, perfect for journaling or working on your novel.",
      price: "₹8,999",
      variants: ["With Drawers", "Without Drawers"],
      colors: ["Natural Wood", "White", "Black", "Brown"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      name: "Modern Pendant Light Fixture",
      description:
        "Add a touch of sophistication to your space with this modern pendant light fixture.",
      price: "₹4,999",
      variants: ["Single", "Multi-light", "Adjustable Height"],
      colors: ["Black", "Gold", "Chrome", "Copper"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      name: "Luxe Velvet Dining Chairs Set",
      description:
        "Dine in luxury with this set of plush velvet dining chairs, featuring elegant design and comfortable seating.",
      price: "₹19,999",
      variants: ["With Armrests", "Without Armrests"],
      colors: ["Royal Blue", "Emerald Green", "Burgundy", "Blush Pink"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      name: "Scandinavian Bookcase",
      description:
        "Display your favorite books and decorative items with this minimalist Scandinavian-style bookcase.",
      price: "₹10,499",
      variants: ["Open Shelves", "With Doors", "With Drawers"],
      colors: ["White", "Natural Wood", "Black"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      name: "Art Deco Mirrored Side Table",
      description:
        "Add glamour to your living space with this Art Deco-inspired mirrored side table.",
      price: "₹6,499",
      variants: ["Round", "Square", "Hexagonal"],
      colors: ["Silver", "Gold", "Rose Gold"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      name: "Boho Macramé Hammock Chair",
      description:
        "Relax and unwind in style with this boho-chic macramé hammock chair.",
      price: "₹14,999",
      variants: ["Single", "Double"],
      colors: ["Natural", "White", "Black"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      name: "Mid-Century Modern Sofa Set",
      description:
        "Transform your living room with this stylish mid-century modern sofa set, featuring clean lines and tapered legs.",
      price: "₹28,999",
      variants: ["3-seater", "Sectional", "Chaise Lounge"],
      colors: ["Grey", "Blue", "Mustard Yellow", "Charcoal"],
      sizes: ["Small", "Medium", "Large"],
    },
  ];
  const [open, setOpen] = useState(false)
  const [clickedData, setClickedData]=useState(null)

  return (
    <div className="bg-white">
      <div className="mx-auto   max-w-7xl pb-20 pt-40 lg:px-8 px-6 ">
        <div className="w-full grid grid-cols-1 min-[650px]:grid-cols-2 min-[900px]:grid-cols-3  xl:grid-cols-4 gap-4 ">
          {data?.map((item, index) => {
            return <ProductCard setOpen={setOpen} setClickedData={setClickedData} data={item} />;
          })}
        </div>{" "}
        <ProductDetails product={clickedData} open={open} close={()=>setOpen(false)}/>
      </div>{" "}
    </div>
  );
};

export default ProductPage;
