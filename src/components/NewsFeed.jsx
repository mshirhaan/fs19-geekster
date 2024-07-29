import React, { useContext } from "react";
import AuthContext from "../AuthContext";

function NewsFeed() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <div>Please login</div>;
  }
  return <div>NewsFeed</div>;
}

export default NewsFeed;
