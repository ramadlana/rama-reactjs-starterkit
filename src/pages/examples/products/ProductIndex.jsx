import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function ProductIndex() {
  const product_list = [
    { id: 1, productName: "this is product number 1" },
    { id: 2, productName: "this is product number 2" },
    { id: 3, productName: "this is product number 3" },
  ];
  return (
    <React.Fragment>
      <p className="text-3xl font-bold underline">
        this is products index Page
      </p>
      {product_list.map((product) => (
        <li key={`${product.id}`}>
          <Link to={`/products/${product.id}`}>{product.id}</Link>
        </li>
      ))}
      <Outlet></Outlet>
    </React.Fragment>
  );
}
