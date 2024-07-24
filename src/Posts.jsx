import React, { useEffect, useReducer, useState } from "react";

function Posts() {
  function postReducer(currentState, action) {
    switch (action.type) {
      case "FETCHING":
        return {
          ...currentState,
          loading: true,
          error: false,
        };

      case "FETCHED":
        return {
          post: action.payload,
          loading: false,
          error: false,
        };
    }
  }

  const [state, dispatch] = useReducer(postReducer, {
    post: null,
    loading: false,
    error: false,
  });

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = () => {
    debugger;
    dispatch({ type: "FETCHING" });
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCHED", payload: data });
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  };
  return (
    <div>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error</p>}
      {state.post && state.post.title}
    </div>
  );
}

export default Posts;
