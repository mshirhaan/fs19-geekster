import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";

function Auth() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  const login = () => {
    dispatch(authActions.login());
  };
  const logout = () => {
    dispatch(authActions.logout());
  };

  return (
    <div>
      Your current {isAuthenticated ? "Logged In" : "Logged out"}
      {isAuthenticated && <button onClick={logout}>Logout</button>}
      {!isAuthenticated && <button onClick={login}>Login</button>}
    </div>
  );
}

export default Auth;
