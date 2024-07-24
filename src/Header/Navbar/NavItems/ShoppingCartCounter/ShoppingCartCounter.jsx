import React from "react";

function ShoppingCartCounter({ setCartCount, cartCount }) {
  return (
    <div>
      <p>ShoppingCartCounter</p>
      <button onClick={() => setCartCount(cartCount + 1)}>{cartCount}</button>
    </div>
  );
}

export default ShoppingCartCounter;
