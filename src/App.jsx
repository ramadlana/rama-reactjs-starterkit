import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="products" element={<ProductIndex></ProductIndex>}>
            <Route path=":product_id" element={<ProductId />} />
          </Route>
          <Route
            path="/sample"
            element={<FlowbiteComponentSample></FlowbiteComponentSample>}
          ></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
