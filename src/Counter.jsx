import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { counterActions } from "./store";

function Counter() {
  const counter = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  return (
    <div>
      {counter}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase by 5</button>
    </div>
  );
}

export default Counter;
