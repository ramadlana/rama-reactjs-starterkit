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

export default function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          {/* After add here, dont forget to add on navbar or side bar menu nav */}

          {/* Protected Wrapper */}
          <Route path="/" element={<ProtectedRoutes></ProtectedRoutes>}>
            {/* Dashboard Layout Wrapper */}

            <Route path="/" element={<DashboardLayout />}>
              <Route index element={<Homepage />}></Route>
              <Route
                path="/sample"
                element={<FlowbiteComponentSample></FlowbiteComponentSample>}
              ></Route>
              <Route path="recoilpageone" element={<PageOne></PageOne>}></Route>
              <Route path="recoilpagetwo" element={<PageTwo></PageTwo>}></Route>
              <Route path="products" element={<ProductIndex></ProductIndex>}>
                <Route path=":product_id" element={<ProductId />} />
              </Route>
            </Route>

            {/* Dashboard Layout Wrapper */}
          </Route>

          {/* Outer  */}
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/logout" element={<Logout></Logout>}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
