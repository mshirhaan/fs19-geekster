import React from "react";
import ProductItem from "../ProductItem/ProductItem";

function Cart({ cartItems, setCartItems }) {
  function calculateTotal() {
    let sum = 0;
    for (let cartItem of cartItems) {
      sum += cartItem.price * cartItem.count;
    }
    return sum;
  }

  if (cartItems.length == 0) {
    return (
      <div>
        <h1>YOUR BAG</h1>
        <p>is currently empty</p>
      </div>
    );
  }

  function removeItem(itemId) {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== itemId);
    setCartItems(newCartItems);
  }

  function updateCount(itemId, count) {
    const newCartItems = [...cartItems];
    for (let cartItem of newCartItems) {
      if (cartItem.id === itemId) {
        cartItem.count = count;
        break;
      }
    }
    setCartItems(newCartItems);
  }

  return (
    <div>
      <h1>YOUR BAG</h1>
      {cartItems.map((cartItem) => (
        <ProductItem
          item={cartItem}
          key={cartItem.id}
          removeItem={removeItem}
          decrement={() => {
            updateCount(cartItem.id, cartItem.count - 1);
          }}
          increment={() => {
            updateCount(cartItem.id, cartItem.count + 1);
          }}
        />
      ))}
      <p>Total {calculateTotal()}</p>
      <button
        onClick={() => {
          setCartItems([]);
        }}
      >
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;
