import React from "react";
import ProductItem from "./ProductItem/ProductItem";

function Products({ setCartCount, cartCount }) {
  return (
    <div>
      <p>Products</p>
      <ProductItem setCartCount={setCartCount} cartCount={cartCount} />
    </div>
  );
}

export default Products;
