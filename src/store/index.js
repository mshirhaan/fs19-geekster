import { createStore } from "redux";

const initState = {
  count: 0,
  isLogged: false,
};
function reducer(state = initState, action) {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      count: state.count + action.payload,
    };
  } else if (action.type === "LOGIN") {
    return {
      ...state,
      isLogged: true,
    };
  }
  return state;
}

const store = createStore(reducer);

export default store;
