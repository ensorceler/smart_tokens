import React from "react";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-center">
      <Navbar />
      <div className="flex flex-row">
        <Drawer />
        {children}
      </div>
    </div>
  );
};

export default Layout;
