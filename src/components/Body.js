import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Header from "./Header";

const Body = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <ScrollToTop />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
