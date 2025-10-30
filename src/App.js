import React from "react";
import TopBar from "./components/Header/TopBar";
import MiddleBar from "./components/Header/MiddleBar";
import NavMenu from "./components/Header/NavMenu";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <>
      <TopBar />
      <MiddleBar />
      <NavMenu />

      {/* ✅ Product Page Content (Breadcrumb will be shown INSIDE ProductPage) */}
      <ProductPage />
    </>
  );
};

export default App;
