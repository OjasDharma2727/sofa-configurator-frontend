import React from "react";
import { FaStore, FaPhone, FaUserShield } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full bg-[#463E3F] text-white text-sm py-2 px-8 flex justify-end gap-6">
      <a href="#" className="flex items-center gap-1 hover:underline">
        🏪 Become a dealer
      </a>
      <a href="#" className="flex items-center gap-1 hover:underline">
        📍 Store locator
      </a>
      <a href="#" className="flex items-center gap-1 hover:underline">
        📞 Contact us
      </a>
      <a href="#" className="flex items-center gap-1 hover:underline">
        ⚙ Services
      </a>
    </div>
  );
};

export default TopBar;
