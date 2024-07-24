import React from "react";
import ShoppingCartCounter from "./ShoppingCartCounter/ShoppingCartCounter";

function NavItems({ setCartCount, cartCount }) {
  return (
    <div>
      <p>NavItems</p>
      <ShoppingCartCounter setCartCount={setCartCount} cartCount={cartCount} />
    </div>
  );
}

export default NavItems;
