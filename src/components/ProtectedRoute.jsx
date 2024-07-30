import React, { useContext } from "react";
import AuthContext from "../AuthContext";

function ProtectedRoute({ children }) {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <div>Please login</div>;
  }
  return <>{children}</>;
}

export default ProtectedRoute;
