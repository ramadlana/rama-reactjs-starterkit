import { Card } from "flowbite-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function ProductIndex() {
  const product_list = [
    { id: 1, productName: "this is product number 1" },
    { id: 2, productName: "this is product number 2" },
    { id: 3, productName: "this is product number 3" },
  ];
  return (
    <>
      <p className="text-3xl font-bold underline mb-3">
        This is products index Page
      </p>
      <Card>
        {product_list.map((product) => (
          <li key={`${product.id}`}>
            <Link to={`/example/productsexample/${product.id}`}>
              {product.id}
            </Link>
          </li>
        ))}
      </Card>
      <Card className="mt-2">
        <Outlet></Outlet>
      </Card>
    </>
  );
}
