import React from "react";
import TopBar from "./TopBar";
import NavMenu from "./NavMenu";
import MiddleBar from "./MiddleBar";

const Header = () => {
  return (
    <header className="w-full shadow-sm border-b border-gray-200">
      <TopBar />
      <MiddleBar />
      <NavMenu />
    </header>
  );
};

export default Header;
