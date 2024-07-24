import "./App.css";
import { CartContext } from "./context/CartContext";
import Header from "./Header/Header";
import Products from "./Products/Products";
import React from "react";



function App() {

  const [cartCount, setCartCount] = React.useState(0);

  let data = { cartCount: cartCount, setCartCount: setCartCount };

  return (
    <CartContext.Provider value={data}>
      <div>
        <p>App</p>

        <Header cartCount={cartCount} setCartCount={setCartCount} />
        <Products cartCount={cartCount} setCartCount={setCartCount} />
      </div>
    </CartContext.Provider>
  );
}

export default App;
