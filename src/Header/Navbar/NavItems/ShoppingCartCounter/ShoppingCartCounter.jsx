import React, { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

function ShoppingCartCounter() {

  const {cartCount, setCartCount} = useContext(CartContext);
  return (
    <div>
      <p>ShoppingCartCounter</p>
      <button onClick={() => setCartCount(cartCount + 1)}>{cartCount}</button>
    </div>
  );
}

export default ShoppingCartCounter;
