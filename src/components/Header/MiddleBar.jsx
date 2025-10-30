import React from "react";
import logo from "../../assets/logo192.png";

const MiddleBar = () => {
  return (
    <div className="w-full bg-[#f7f3f0] border-b border-[#e5dfd9]">
      {/* Top Selector Bar */}
      <div className="flex gap-6 text-sm pt-2 pl-8">
        <span className="text-white bg-[#ff5a4a] px-4 py-2 rounded-sm font-medium cursor-pointer">
          For Homes
        </span>
        <span className="text-gray-700 cursor-pointer hover:text-black font-medium">
          For Businesses
        </span>
      </div>

      {/* Logo + Icons */}
      <div className="flex justify-between items-center py-4 px-8">
        {/* Logo Center */}
        <div className="flex flex-1 justify-center pr-16">
          <img src={logo} alt="Interio Logo" className="h-12 object-contain" />
        </div>

        {/* Icons Right */}
        <div className="flex gap-8 text-2xl text-gray-700">
          <i className="ri-search-line cursor-pointer hover:text-black"></i>
          <i className="ri-user-line cursor-pointer hover:text-black"></i>
          <i className="ri-heart-line cursor-pointer hover:text-black"></i>
          <i className="ri-shopping-cart-line cursor-pointer hover:text-black"></i>
        </div>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-12 text-gray-700 pb-4 font-medium text-lg">
        <span className="cursor-pointer hover:text-black">Living room</span>
        <span className="cursor-pointer hover:text-black">Bedroom</span>
        <span className="cursor-pointer hover:text-black">Dining room</span>
        <span className="cursor-pointer hover:text-black">
          Office and Study
        </span>
        <span className="cursor-pointer hover:text-black">
          Modular Kitchens
        </span>
        <span className="cursor-pointer hover:text-black">All Products</span>
        <span className="cursor-pointer hover:text-black">Offers</span>
      </div>
    </div>
  );
};

export default MiddleBar;
