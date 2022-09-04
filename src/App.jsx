import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Tailwind Style
import "./style.css";

// import your route components
import Homepage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";

// Example Components
import ProductId from "./pages/examples/products/ProductId";
import ProductIndex from "./pages/examples/products/ProductIndex";
import Login from "./pages/Login";
import FlowbiteComponentSample from "./pages/examples/FlowbiteComponentSample";
import DashboardLayout from "./Layout/DashboardLayout";

// Lazy load page split
// const Homepage = lazy(() => import("./pages/Home"));
// const NotFoundPage = lazy(() => import("./pages/NotFound"));
// const ProductId = lazy(() => import("./pages/products/ProductId"));
// const ProductIndex = lazy(() => import("./pages/products/ProductIndex"));

import { RecoilRoot } from "recoil";
import PageOne from "./pages/examples/recoilsample/PageOne";
import PageTwo from "./pages/examples/recoilsample/PageTwo";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Logout from "./pages/Logout";
import TableExample from "./pages/examples/TableExample";
import MenuGroup from "./pages/examples/menugroup/MenuGroup";
import HomePageMenuGroup from "./pages/examples/menugroup/HomePageMenuGroup";

export default function App() {
  return (
    // Recoil Root
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          {/* After add here, dont forget to add on navbar or side bar menu nav */}
          {/* Protected Wrapper */}
          <Route path="/" element={<ProtectedRoutes></ProtectedRoutes>}>
            {/* Dashboard Layout Wrapper */}
            <Route element={<DashboardLayout />}>
              {/* all child dashboard here, in react-router-dom v6 remove all slash for child route */}
              <Route index element={<Homepage />}></Route>
              {/* Example components */}
              <Route path="example">
                <Route
                  path="flowbitecomponents"
                  element={<FlowbiteComponentSample></FlowbiteComponentSample>}
                ></Route>
                {/* Menu Group */}
                <Route path="menugroup" element={<MenuGroup></MenuGroup>}>
                  <Route
                    index
                    element={<HomePageMenuGroup></HomePageMenuGroup>}
                  ></Route>
                  <Route
                    path="recoilpageone"
                    element={<PageOne></PageOne>}
                  ></Route>
                  <Route
                    path="recoilpagetwo"
                    element={<PageTwo></PageTwo>}
                  ></Route>
                </Route>
                <Route
                  path="tableexample"
                  element={<TableExample></TableExample>}
                ></Route>
                <Route
                  path="productsexample"
                  element={<ProductIndex></ProductIndex>}
                >
                  <Route path=":product_id" element={<ProductId />} />
                </Route>
              </Route>
              {/* Example components */}
              {/* all child dashboard here */}
            </Route>
            {/* Dashboard Layout Wrapper */}
          </Route>
          {/* Protected Wrapper*/}
          {/* Outer Route (not protected and no layout)  */}
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/logout" element={<Logout></Logout>}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
