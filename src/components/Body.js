import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <ScrollToTop />
      <Outlet />
    </div>
  );
};

export default Body;
