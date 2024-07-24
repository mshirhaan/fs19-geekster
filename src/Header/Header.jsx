import React from "react";
import Navbar from "./Navbar/Navbar";

function Header({ setCartCount, cartCount }) {
  return (
    <div>
      <p>Header</p>
      <Navbar setCartCount={setCartCount} cartCount={cartCount} />
    </div>
  );
}

export default Header;
