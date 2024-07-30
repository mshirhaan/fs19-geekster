import { useState } from "react";
import "./App.css";

import { auth } from "./firebaseConfig";

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NewsFeed from "./components/NewsFeed";
import { AuthProvider } from "./AuthContext";
import Settings from "./components/Settings";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  console.log(auth);

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("logged out");
    } catch (error) {
      console.log(error);
    }
  };

  function Home() {
    const navigate = useNavigate();

    return (
      <div>
        <h1>Welcome</h1>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    );
  }

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/newsfeed"
              element={
                <ProtectedRoute>
                  <NewsFeed />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
