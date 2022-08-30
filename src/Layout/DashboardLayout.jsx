import React from "react";
import { Outlet } from "react-router-dom";

import LayoutNavbar from "./LayoutNavbar";
const DashboardLayout = () => {
  return (
    <div>
      <div className="flex-col">
        <div className="flex-none mb-2">
          <LayoutNavbar></LayoutNavbar>
        </div>
      </div>

      <div className="flex">
        {/* here child component will be rendered */}
        <div className="flex-auto m-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
