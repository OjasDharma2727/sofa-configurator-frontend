// src/pages/ProductTabs.jsx
import React, { useState } from "react";

const tabs = [
  { id: "why", label: "Why this Product" },
  { id: "details", label: "Product Details" },
  { id: "reviews", label: "Reviews" },
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("why");

  return (
    <div className="bg-white mt-14 py-10">
      {/* Tabs */}
      <div className="flex justify-center space-x-12 border-b-[1px] border-gray-300 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-2 text-[12px] font-medium transition 
              ${
                activeTab === tab.id
                  ? "text-[#E15E4A] border-b-2 border-[#E15E4A]"
                  : "text-gray-600"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto text-center mt-12 px-5">
        {activeTab === "why" && (
          <div>
            <h2 className="text-[58px] font-semibold text-gray-800 mb-8">
              Why choose this product
            </h2>
            <p className="text-[48px] leading-loose text-[#F05A48] font-medium">
              Missouri brings luxury into motion. With genuine leather where it
              matters, dual comfort zones, and touch-controlled recline with USB
              port, it’s a home upgrade that feels like first class.
            </p>
          </div>
        )}

        {activeTab === "details" && (
          <p className="text-gray-700 text-[18px]">
            Product details coming soon...
          </p>
        )}

        {activeTab === "reviews" && (
          <p className="text-gray-700 text-[18px]">
            Customer reviews will appear here...
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
