import React from "react";
import { useParams } from "react-router-dom";

function ProductId() {
  const { product_id } = useParams();
  const product_list = [
    { id: 1, productName: "this is product number 1" },
    { id: 2, productName: "this is product number 2" },
    { id: 3, productName: "this is product number 3" },
  ];
  let selected_product = product_list.filter(
    (product) => product.id === parseInt(product_id)
  );
  return (
    <>
      <h4>
        the product id is = {product_id} and the item is
        {selected_product[0]
          ? selected_product[0].productName
          : " item not found"}
      </h4>
    </>
  );
}

export default ProductId;
