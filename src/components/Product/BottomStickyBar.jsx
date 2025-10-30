import React, { useState } from "react";

const BottomStickyBar = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl bg-white shadow-lg rounded-2xl px-6 py-4 flex items-center justify-between z-50">
      {/* Price Section */}
      <div>
        <p className="text-2xl font-bold">₹1,89,590</p>
        <p className="text-sm text-red-500 font-semibold">16% Off</p>
      </div>

      {/* Quantity Buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          className="w-10 h-10 border rounded-md text-xl"
        >
          -
        </button>

        <span className="text-xl font-semibold">{quantity}</span>

        <button
          onClick={() => setQuantity(quantity + 1)}
          className="w-10 h-10 border rounded-md text-xl"
        >
          +
        </button>
      </div>

      {/* Add to Cart */}
      <button className="bg-[#FF6A5B] text-white px-10 py-3 rounded-xl font-semibold text-lg flex items-center gap-2">
        Add to Cart 🛒
      </button>
    </div>
  );
};

export default BottomStickyBar;
