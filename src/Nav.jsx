import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import ApnaLink from "./ApnaLink";

function Nav({ style }) {
  return (
    <nav style={style}>
      <ul style={{ listStyle: "none", display: "flex" }}>
        <li
          style={{
            marginRight: "1rem",
            textDecoration: "none",
          }}
        >
          <ApnaLink href="/">Home</ApnaLink>
        </li>
        <li
          style={{
            marginRight: "1rem",
            textDecoration: "none",
          }}
        >
          <ApnaLink href="/about">About</ApnaLink>
        </li>
        <li
          style={{
            marginRight: "1rem",
            textDecoration: "none",
          }}
        >
          <ApnaLink href="/contact">Contact</ApnaLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
