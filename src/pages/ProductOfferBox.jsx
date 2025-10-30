// src/pages/ProductOfferBox.jsx
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const ProductOfferBox = () => {
  return (
    <div className="bg-white mt-6 p-5 rounded-lg text-[12px] border border-[#E5DFDB]">
      <p className="text-red-600 font-semibold">Product Offers</p>
      <p className="mt-2 text-gray-700 leading-tight">
        Save upto Rs 7,500 using HDFC Bank Credit Cards and EasyEMI
        <br />
        Use coupon code <b>FESTIVE25</b> at checkout for additional discount
      </p>
      <div className="flex items-center gap-2 mt-3 cursor-pointer text-[12px] underline font-medium text-[#222]">
        Explore More Offers
        <FiChevronRight />
      </div>
    </div>
  );
};

export default ProductOfferBox;
