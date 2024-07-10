import React from "react";
import { NavLink } from "react-router-dom";

function ApnaLink(props) {
  return (
    <NavLink
      className={({ isActive }) => {
        return isActive ? "isActive" : null;
      }}
      style={{ textDecoration: "none" }}
      to={props.href}
    >
      {props.children}
    </NavLink>
  );
}

export default ApnaLink;
