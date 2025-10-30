// src/pages/ProductInfoPanel.jsx
import React from "react";

const ProductInfoPanel = () => {
  return (
    <div className="bg-white mt-7 p-5 rounded-lg text-[12px] border border-[#E5DFDB]">
      <p className="font-semibold">Need help deciding? Get expert assistance</p>
      <p className="mt-2 text-gray-600 leading-tight">
        Speak with our in-store executives for personalised guidance on choosing
        the perfect products for your home.
      </p>
      <button className="mt-4 bg-transparent border border-gray-700 rounded-md px-5 py-2 text-[13px]">
        Call me back
      </button>
    </div>
  );
};

export default ProductInfoPanel;
