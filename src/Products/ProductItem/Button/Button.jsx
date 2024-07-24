import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

function Button() {
  const { cartCount, setCartCount } = useContext(CartContext);
  return (
    <div>
      <p>Button</p>
      <button onClick={() => setCartCount(cartCount + 1)}>{cartCount}</button>
    </div>
  );
}

export default Button;
