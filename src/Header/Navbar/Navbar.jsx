import React from "react";
import NavItems from "./NavItems/NavItems";

function Navbar({ setCartCount, cartCount }) {
  return (
    <div>
      <p>Navbar</p>
      <NavItems setCartCount={setCartCount} cartCount={cartCount} />
    </div>
  );
}

export default Navbar;
