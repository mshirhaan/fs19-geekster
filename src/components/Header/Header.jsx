function Header({ cartItems }) {
  //   const count = cartItems.reduce((carry, item) => {
  //     return carry + item.count;
  //   }, 0);

  let count = 0;

  for (let cartItem of cartItems) {
    count += cartItem.count;
  }

  return <div>Header: {count}</div>;
}

export default Header;
