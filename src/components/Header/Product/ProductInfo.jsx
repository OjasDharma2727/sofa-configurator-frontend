import React from "react";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";

const ProductInfo = () => {
  return (
    <div className="w-full md:w-1/2 pl-8">
      {/* Wishlist + Share Icons */}
      <div className="flex justify-end gap-3 mb-3">
        <button className="w-10 h-10 bg-white shadow rounded-full flex items-center justify-center">
          <AiOutlineHeart size={20} />
        </button>

        <button className="w-10 h-10 bg-white shadow rounded-full flex items-center justify-center">
          <AiOutlineShareAlt size={20} />
        </button>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-semibold leading-snug">
        Missouri L-Shape Leather <br /> Motorised Recliner Sofa
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 text-lg mt-2">1-Year Warranty, Olive Green</p>

      {/* Pricing */}
      <div className="mt-5">
        <span className="text-3xl font-bold">₹1,89,590</span>
        <span className="ml-2 text-gray-500 line-through">₹2,24,797</span>
        <span className="ml-3 text-red-500 font-semibold">16% Off</span>
      </div>

      {/* EMI */}
      <p className="text-gray-600 text-sm mt-2">
        Or Pay{" "}
        <span className="underline font-medium">₹15,395 Monthly EMI</span> with
        0% interest
      </p>
    </div>
  );
};

export default ProductInfo;
