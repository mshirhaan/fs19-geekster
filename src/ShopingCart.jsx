import React from "react";
import useToggle from "./useToggle";

function ShopingCart() {
  const { value, toggleValue } = useToggle(false);

  return (
    <div>
      <p>Shoping Cart</p>

      {value && (
        <div>
          <p>Payment</p>
        </div>
      )}

      {!value ? (
        <button onClick={toggleValue}>Show Payment</button>
      ) : (
        <button onClick={toggleValue}>Hide Payment</button>
      )}
    </div>
  );
}

export default ShopingCart;
