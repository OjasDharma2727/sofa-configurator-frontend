import React from "react";
import { FiHeart, FiShare2, FiChevronRight } from "react-icons/fi";

// Import components
import Breadcrumb from "../components/Header/Breadcrumb";
import ProductOfferBox from "./ProductOfferBox";
import ProductInfoPanel from "./ProductInfoPanel";
import BottomStickyBar from "../components/Header/Product/BottomStickyBar";
import ProductWhyCarousel from "./ProductWhyCarousel";
import ProductDetailsSection from "./ProductDetailsSection";

const ProductPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#F6F0EB] pb-24">
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-4">
          <Breadcrumb />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[62%_38%] gap-8">
          {/* LEFT: Scrollable Images */}
          <div className="flex justify-start w-full">
            <div className="w-[95%]">
              <div className="flex flex-col gap-6">
                <img src="/images/sofa.webp" alt="" className="rounded-md" />
                <img src="/images/image2.webp" alt="" className="rounded-md" />
                <div className="grid grid-cols-2 gap-6">
                  <img
                    src="/images/image3.webp"
                    alt=""
                    className="rounded-md"
                  />
                  <img
                    src="/images/image4.webp"
                    alt=""
                    className="rounded-md"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <img
                    src="/images/image5.webp"
                    alt=""
                    className="rounded-md"
                  />
                  <img
                    src="/images/image6.webp"
                    alt=""
                    className="rounded-md"
                  />
                </div>
                <img src="/images/image7.webp" alt="" className="rounded-md" />
              </div>
            </div>
          </div>

          {}
          <div className="w-full pl-4 sticky top-24 self-start max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-hide">
            <div className="flex justify-end gap-4 mb-4 text-gray-700 text-xl">
              <FiHeart className="cursor-pointer" />
              <FiShare2 className="cursor-pointer" />
            </div>

            <h1 className="text-[20px] font-semibold text-[#222]">
              Missouri L-Shape Leather Motorised Recliner Sofa
            </h1>

            <p className="text-sm text-gray-600 mt-2">
              1-Year Warranty, Olive Green
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-[23px] font-bold">₹1,89,590</span>
              <span className="line-through text-gray-500">₹2,24,397</span>
              <span className="text-[13px] text-red-600 font-semibold">
                16% Off
              </span>
            </div>

            <p className="text-xs underline cursor-pointer mt-1">
              Or Pay ₹15,395 Monthly EMI with 0% interest
            </p>

            <ProductOfferBox />

            {/* Delivery */}
            <div className="mt-10">
              <p className="text-xs font-medium">Check delivery & assembly</p>
              <div className="flex justify-between border-b border-gray-300 pb-2 mt-2">
                <input
                  placeholder="Enter pincode"
                  className="flex-1 text-xs bg-transparent outline-none"
                />
                <span className="text-sm cursor-pointer">Check</span>
              </div>
            </div>

            {/* Exchange */}
            <div className="flex justify-between mt-7 py-4 cursor-pointer border-b border-gray-300">
              <span className="text-xs font-medium">
                Apply furniture exchange
              </span>
              <FiChevronRight />
            </div>

            {/* Support Card */}
            <ProductInfoPanel />
          </div>
        </div>
      </div>

      {}
      <div className="bg-white py-14 px-6 border-t mt-14">
        <div className="max-w-7xl mx-auto">
          <ProductWhyCarousel />
        </div>
      </div>

      {}
      <ProductDetailsSection />

      {/* Sticky Bottom */}
      <BottomStickyBar />
    </div>
  );
};

export default ProductPage;
