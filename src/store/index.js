import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterInitialState = { count: 0, showCounter: true };
const authIntialState = { isAuthenticated: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    increase(state, action) {
      state.count = state.count + action.payload;
    },
    toggleCounter() {},
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: authIntialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

let obj = {
  counter: { count: 0, showCounter: true },
  auth: { isAuthenticated: false },
};

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;

export const authActions = authSlice.actions;

export default store;
