import React from "react";
import { NavLink } from "react-router-dom";
import "./NaviLink.css";

function NaviLink({ to, children }) {
  return (
    <NavLink

    style={{textDecoration:'none'}}

      className={({ isActive }) => {
        return isActive ? "isActive" : null;
      }}
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default NaviLink;
