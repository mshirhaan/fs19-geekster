import NaviLink from "./NaviLink/NaviLink";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NaviLink to="/">Home</NaviLink>
        </li>
        <li>
          <NaviLink to="quote">Quote</NaviLink>
        </li>
        <li>
          <NaviLink to="restaurants">Restaurants</NaviLink>
        </li>
        <li>
          <NaviLink to="foods">Foods</NaviLink>
        </li>
        <li>
          <NaviLink to="contact">Contact</NaviLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
