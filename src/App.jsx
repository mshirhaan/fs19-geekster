import "./App.css";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ProductList from "./components/ProductList/ProductList";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    let tempCart = [...cart];
    tempCart.push(product);
    setCart(tempCart);
  }

  return (
    <div>
      <ShoppingCart cartItems={cart} />

      <ProductList onAdd={addToCart} />
    </div>
  );
}

export default App;
