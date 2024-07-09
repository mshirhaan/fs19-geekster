import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Samsung Galaxy S8", price: 399.99, count: 2 },
    { id: 2, name: "Google Pixel", price: 499.99, count: 1 },
    { id: 3, name: "Xioami Redmi Note 2", price: 699.99, count: 1 },
    { id: 4, name: "Samsung Galaxy S7", price: 599.99, count: 1 },
  ]);

  return (
    <div>
      <Header cartItems={cartItems} />
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}

// //Parent
// function App() {
//   const [count, setCount] = useState(0);

//   function increment(newcount) {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <Anuj count={count} />
//       <Ajay count={count} onIncrement={increment} />
//     </div>
//   );
// }

// //brother 1
// function Anuj(props) {
//   return (
//     <div>
//       <p>Anuj count is {props.count}</p>
//     </div>
//   );
// }

// //brother 2
// function Ajay(props) {
//   return (
//     <div>
//       <p>count from Ajay is {props.count}</p>
//       <button
//         onClick={() => {
//           props.onIncrement();
//         }}
//       >
//         Ajay +
//       </button>
//     </div>
//   );
// }

export default App;
