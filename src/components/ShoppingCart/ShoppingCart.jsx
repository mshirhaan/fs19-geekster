import "./ShoppingCart.css";

function ShoppingCart(props) {
  return (
    <div className="cart">
      {props.cartItems.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
}

export default ShoppingCart;
