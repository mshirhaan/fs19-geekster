import React from "react";
import Button from "./Button/Button";

function ProductItem({ setCartCount, cartCount }) {
  return (
    <div>
      <p>ProductItem</p>
      <Button setCartCount={setCartCount} cartCount={cartCount} />
    </div>
  );
}

export default ProductItem;
