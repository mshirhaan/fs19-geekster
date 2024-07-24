import "./App.css";
import Header from "./Header/Header";
import Products from "./Products/Products";import React from "react";

function App() {
  const [cartCount, setCartCount] = React.useState(0);
  return (
    <div>
      <p>App</p>

      <Header cartCount={cartCount} setCartCount={setCartCount} />
      <Products cartCount={cartCount} setCartCount={setCartCount} />
    </div>
  );
}

export default App;
