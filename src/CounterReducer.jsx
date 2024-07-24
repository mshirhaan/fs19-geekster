import React, { useReducer } from "react";

//a function which takes current state, and action(data sent via dispatch) and returns new state
function counterReducer(currentCount, action) {
  if (action.type === "INCREMENT") {
    return currentCount + action.payload;
  } else if (action.type === "DECREMENT") {
    return currentCount - action.payload;
  }
  return currentCount + action.payload;
}

function CounterReducer() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      {count}
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
        -
      </button>
    </div>
  );
}

export default CounterReducer;
