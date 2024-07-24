import React from "react";

function Button({ setCartCount, cartCount }) {
  return (
    <div>
      <p>Button</p>
      <button onClick={() => setCartCount(cartCount + 1)}>{cartCount}</button>
    </div>
  );
}

export default Button;
