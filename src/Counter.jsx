import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const count = useSelector(({ count }) => count);

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>
        Count - {count}
      </button>
    </div>
  );
}

export default Counter;
